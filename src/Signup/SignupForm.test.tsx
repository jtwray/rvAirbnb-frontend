import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "./SignupForm";

test("it should validate length", async () => {
  const { findByLabelText, findByText, findByRole } = render(<SignupForm />);
  const input = await findByLabelText("password");
});

test("it should validate user did not duplicate example password", async () => {});
