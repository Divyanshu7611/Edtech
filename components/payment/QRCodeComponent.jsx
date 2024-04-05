// QRCodeComponent.js
import React from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = () => {
  // UPI details
  const upiId = "9928637836@ybl";
  const amount = "2499";
  const businessName = "Impact It Services";

  // Generate payment URL
  const paymentUrl = `upi://pay?pa=${encodeURIComponent(
    upiId
  )}&am=${amount}&pn=${encodeURIComponent(businessName)}&cu=INR`;

  return (
    <div>
      <p className="text-xs">Scan the QR code to make the payment:</p>
      <QRCode value={paymentUrl} size={250} />
    </div>
  );
};

export default QRCodeComponent;
