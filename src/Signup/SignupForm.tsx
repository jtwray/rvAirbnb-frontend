import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  username: string;
  email: string;
  password: string;
  terms: boolean;
}

export default function SignupForm() {
  const history = useHistory();

  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false
    }
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { isDirty, dirtyFields } = formState;
  const [error, setError] = useState<string>("");
  return (
    <>
      {/* <span style={{position:"relative",top:".15%",left:"35%",background:"white",height:"10px"}}>Name:</span> */}
      <form
        style={{ fontSize: "4rem" }}
        onSubmit={handleSubmit(async (formData) => {
          setSubmitting(true);
          console.log("formData", formData);
          try {
            let { username, password, email } = formData;
            const response = await axiosWithAuth().post("/auth/rv/register", {
              // username: formData.username,
              // password: formData.password,
              // email: formData.email
              username,
              password,
              email
            });
            console.log("resposne;=>", response);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("currentUserID", response.data.id);
            localStorage.setItem("currentUserName", response.data.username);
            history.push("/", {
              username: response.data.username,
              terms: response.data.terms
            });
            setSubmitting(false);
          } catch (error) {
            console.error(error);
            alert(error.userMessage || error.message);
            console.log("formData", formData);
          }
          setSubmitting(false);
        })}
      >
        <div className="input">
          {dirtyFields.username ? (
            <label className="isDirty" htmlFor="username">
              Username
            </label>
          ) : (
            <label htmlFor="username">Username</label>
          )}
          <input
            type="text"
            name="username"
            id="username"
            ref={register({ required: "required" })}
          />
          {errors.username ? <p> what's your username? </p> : null}
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
