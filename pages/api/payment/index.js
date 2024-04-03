import Payment from "../../../models/upi";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../config/dbConnect";

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { TxnID, email } = await req.body;

  try {
    await ConnectMongoDB();

    // Validation
    if (!TxnID) {
      return res.status(401).json({
        success: false,
        message: "Please fill all details",
      });
    }

    const newUser = await Payment.create({
      TxnID: TxnID,
      email: email,
    });

    return res.status(200).json({
      success: true,
      message: "User Payment Success",
      // data: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User Payment failure",
      error: error.message,
    });
  } finally {
    await DisconnectMongoDB();
  }
}
