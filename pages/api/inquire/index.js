import { JWT } from "google-auth-library";

import creds from "../../../config/secrets.json";

import { GoogleSpreadsheet } from "google-spreadsheet";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const jwt = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});

export default async function handler(req, res) {
  if (req.body) {
    const body = req.body;

    for (const key in body) {
      if (body[key] == "") {
        return res.status(500).json({
          message: key + " is not given",
        });
      }
    }
    let name = typeof body == "object" ? body.name : JSON.parse(body).name;
    let phone = typeof body == "object" ? body.phone : JSON.parse(body).phone;
    let email = typeof body == "object" ? body.email : JSON.parse(body).email;
    let city = typeof body == "object" ? body.city : JSON.parse(body).city;
    let state = typeof body == "object" ? body.state : JSON.parse(body).state;
    let linkedin =
      typeof body == "object" ? body.linkedin : JSON.parse(body).linkedin;

    const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, jwt);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    try {
      await sheet.addRow({
        name,
        email,
        phone,
        city,
        state,
        linkedin,
      });

      const sendMail = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/send",
        {
          method: "post",
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );
      const response = await sendMail.json();
      if (response.code === 200) {
        console.log("sent");
        return res.status(200).json({
          code: 200,
          message:
            "Thankyou so much! Our representative will get in touch with you shortly.",
        });
      }
    } catch (err) {
      console.log(err);

      return res.status(500).json({
        message: "something went wrong",
        error: err,
      });
    }
  }
}
