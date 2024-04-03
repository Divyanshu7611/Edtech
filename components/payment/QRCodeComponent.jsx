// QRCodeComponent.js
import React from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = () => {
  // UPI details
  const upiId = "9950156755@ibl";
  const amount = "1500";

  // Generate payment URL
  const paymentUrl = `upi://pay?pa=${encodeURIComponent(
    upiId
  )}&am=${amount}&cu=INR`;

  return (
    <div>
      <p className="text-xs">Scan the QR code to make the payment:</p>
      <QRCode value={paymentUrl} size={250} />
    </div>
  );
};

export default QRCodeComponent;
