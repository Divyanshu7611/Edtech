import User from "../../../models/User";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../config/dbConnect";

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { Name, Phone, email, CollegeName, Branch, Year, Domain } =
    await req.body;

  try {
    await ConnectMongoDB();

    // Validation
    if (!Name || !Phone || !CollegeName || !Branch || !Year || !Domain) {
      return res.status(401).json({
        success: false,
        message: "Please fill all details",
      });
    }

    // Verification
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = await User.create({
      Name,
      email,
      Phone,
      CollegeName,
      Branch,
      Year,
      Domain,
    });

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      // data: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User registration failure",
      error: error.message,
    });
  } finally {
    await DisconnectMongoDB();
  }
}
