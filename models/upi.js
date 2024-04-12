const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  TxnID: {
    type: String,
    required: true,
    trim: true,
    toUppercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const paymentReg = mongoose.model("PaymentTxn", PaymentSchema);
export default paymentReg;
