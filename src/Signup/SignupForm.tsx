import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  d;
}

export default function SignupForm() {
  const { register, handleSubmit, errors } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        console.log("formData", formData);
      })}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={register({ required: "required" })}
        />
        {errors.name ? <p> what's your username? </p> : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={register({ required: "required" })}
        />
        {errors.email ? <p> provide an email </p> : null}
      </div>
      <div>
        <label htmlFor="pasword">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={register({ required: "required" })}
        />
        {errors.password ? <p> secure your account with a passord </p> : null}
      </div>
      <div>
        <label htmlFor="terms">Remember Me</label>
        <input type="checkbox" name="terms" id="terms" ref={register()} />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
}
