import React from "react";
import { useForm } from "react-hook-form";

function ContactUsForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">
            firstName
            <input
              type="text"
              name="firstName"
              placeholder="Divyanshu"
              {...register("firstName", { required: true })}
            />
          </label>
          <label htmlFor="lastName">
            LastName
            <input
              type="text"
              name="lastName"
              placeholder="Sharma"
              {...register("lastName", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
