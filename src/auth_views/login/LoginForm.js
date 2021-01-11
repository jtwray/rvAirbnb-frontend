import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar } from "@material-ui/core";
import { useStyles } from "../../utils/useStyles";
import { LoadingClackers } from "../../utils/LoadingClackers";

export default function LoginForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: { username: "", email: "", password: "", terms: false }
  });
  const history = useHistory();
  const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);
  const { dirtyFields } = formState;
  const authFormSTYLE = {
    fontSize: "4rem",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  };
  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      Welcome Back Stranger
      <form
        style={{ ...authFormSTYLE, fontSize: "4rem" }}
        onSubmit={handleSubmit(async (formData) => {
          setSubmitting(true);
          try {
            let { username, password, email } = formData;

            props.login(formData, history);
          } catch (error) {
            console.error(error);
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
          <button type="submit" disabled={props.isLoading}>
            {!props.isLoading ? (
              "Login"
            ) : (
              <span>
                <LoadingClackers
                  style={{ transform: " scale(0.25)", fontSize: "10rem" }}
                  message={"logging in"}
                />
              </span>
            )}
          </button>
        </div>
      </form>
      <div
        className="footerLinks--sigunupform"
        style={{
          display: "flex",
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
