import React, { useRef, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export default function SignupForm() {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  return (
    <>
      {/* <span style={{position:"relative",top:".15%",left:"35%",background:"white",height:"10px"}}>Name:</span> */}
      <form
        style={{ fontSize: "4rem" }}
        onSubmit={handleSubmit(async (formData) => {
          setSubmitting(true);
          console.log("formData", formData);
          setSubmitting(false);
          const response = await axiosWithAuth().get("/auth/rv/signup");
        })}
      >
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={register({ required: "required" })}
          />
          {errors.name ? <p> what's your username? </p> : null}
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: "required" })}
          />
          {errors.email ? <p> provide an email </p> : null}
        </div>
        <div className="input">
          <label htmlFor="pasword">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "required",
              minLength: {
                value: 8,
                message:
                  "must be 8 chars. Try using an unintelligible phrase like  ~ your-horse-battery-eats-staples-walmart ~"
              },
              validate: (value) =>
                [
                  /^((?!your-horse-battery-eats-staples-walmart).)*$/
                ].every((pattern) => pattern.test(value)) ||
                "Try using an unintelligible phrase other than ~ your-horse-battery-eats-staples-walmart ~ "
            })}
          />
          {errors.password ? <p>{errors.password.message} </p> : null}
        </div>
        <div>
          <input type="checkbox" name="terms" id="terms" ref={register()} />
          <label htmlFor="terms">Remember Me</label>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Signup
          </button>
        </div>
      </form>
    </>
  );
}
