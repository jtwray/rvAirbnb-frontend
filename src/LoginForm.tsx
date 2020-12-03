import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./utils/useStyles";
import "mutationobserver-shim";

interface FormData {
  username: string;
  email: string;
  password: string;
  terms: boolean;
}

export default function LoginForm() {
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    defaultValues: { username: "", email: "", password: "", terms: false }
  });

  const history = useHistory();
  const classes = useStyles();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { dirtyFields } = formState;

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <form
        style={{ fontSize: "4rem" }}
        onSubmit={handleSubmit(async (formData) => {
          // if (submitting) {
          //   return false;
          // }
          setSubmitting(true);
          console.log("formData", formData);
          try {
            let { username, password, email } = formData;
            const response = await axiosWithAuth().post("auth/rv/login", {
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
            ref={register({ required: "required" })}
          />
          {errors.password ? <p>password required</p> : null}
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
      <div
        className="footerLinks--sigunupform"
        style={{
          display: "flex",
          border: "solid black .2rem",
          width: "90%",
          justifyContent: "flex-end"
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            margin: "0",
            paddingRight: "1rem",
            width: "auto"
          }}
        >
          don't have an account?
          <Link style={{ fontSize: "1.0rem" }} to="/signup">
            signup
          </Link>
        </p>
      </div>
    </>
  );
}
