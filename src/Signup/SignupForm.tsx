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
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false
    }
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { isDirty, dirtyFields } = formState;
  return (
    <>
      {/* <span style={{position:"relative",top:".15%",left:"35%",background:"white",height:"10px"}}>Name:</span> */}
      <form
        style={{ fontSize: "4rem" }}
        onSubmit={handleSubmit(async (formData) => {
          setSubmitting(true);
          const response = await axiosWithAuth().get("/auth/rv/signup");
          setSubmitting(false);
        })}
      >
        <div className="input">
          {dirtyFields.name ? (
            <label className="isDirty" htmlFor="name">
              Name
            </label>
          ) : (
            <label htmlFor="name">Name</label>
          )}
          <input
            type="text"
            name="name"
            id="name"
            ref={register({ required: "required" })}
          />
          {errors.name ? <p> what's your username? </p> : null}
        </div>
        <div className="input">
          {dirtyFields.email ? (
            <label className="isDirty" htmlFor="email">
              Email
            </label>
          ) : (
            <label htmlFor="email">Email</label>
          )}
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            ref={register({ required: "required" })}
          />
          {errors.email ? <p> provide an email </p> : null}
        </div>
        <div className="input">
          {dirtyFields.password ? (
            <label className="isDirty" htmlFor="password">
              Password
            </label>
          ) : (
            <label htmlFor="password">Password</label>
          )}
          <input
            autoComplete="off"
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
        <div className="termsContainer">
          <input type="checkbox" name="terms" id="terms" ref={register()} />
          <label htmlFor="terms">Remember Me</label>
        </div>
        <div className="button">
          <button type="submit" disabled={submitting}>
            Signup
          </button>
        </div>
      </form>
    </>
  );
}
