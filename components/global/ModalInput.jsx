import React from "react";

export default function ModalInput({ name, type, id, label }) {
  return (
    <div className="w-full max-w-sm">
      <label htmlFor="email" className="label ">
        {label}
      </label>
      <div className="relative">
        <input type={type} id={id} name={name} className="input" required />
      </div>
    </div>
  );
}
