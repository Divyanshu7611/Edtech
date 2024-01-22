import JoinMail from "@/emails/JoinMail";
import { OAuth2Client } from "google-auth-library";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";

const oAuth2C1ient = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2C1ient.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

async function sendMail(name, email) {
  const accessToken = await oAuth2C1ient.getAccessToken();
  const emailHtml = render(<JoinMail userFirstname={name} />);
  const emailText = render(<JoinMail userFirstname={name} />, {
    plainText: true,
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "hardik@leveluphubs.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: "hardik@leveluphubs.com",
    to: email,
    subject: "Hello from Impact IT servicess",
    text: emailText,
    html: emailHtml,
  };

  const result = await transport.sendMail(mailOptions);
  // console.log(accessToken);

  return result;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
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
      let email = typeof body == "object" ? body.email : JSON.parse(body).email;

      const result = await sendMail(name, email);

      return res.status(200).json({
        code: 200,
        message: "mail sent",
      });
    }
  }
}
