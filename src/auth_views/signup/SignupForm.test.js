import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "./SignupForm";
// import config from '../../jest.config'
// import 'mutationobserver-shim'
test("it should validate username is present", async () => {
  const { findByLabelText, findByText, findByRole } = render(<SignupForm />);
  const input = await findByLabelText("Username");

  await act(async () => {
    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(await findByRole("button"));

    const error = await findByText(/what's your username/);
    expect(error).toBeInTheDocument();
  });
});

test("it should validate Password length", async () => {
  const { findByLabelText, findByText, findByRole } = render(<SignupForm />);
  const input = await findByLabelText("Password");

  await act(async () => {
    fireEvent.input(input, { target: { value: "shortpw" } });
    fireEvent.submit(await findByRole("button"));

    const error = await findByText(
      "must be 8 chars.Try a funky sentence like Yourbatteryhorseeatsstapleswalmart"
    );

    expect(error).toBeInTheDocument();
  });
});

test("it should validate user did not duplicate example password", async () => {
  const { findByLabelText, findByText, findByRole } = render(<SignupForm />);
  const input = await findByLabelText("Password");

  await act(async () => {
    fireEvent.input(input, {
      target: { value: "Yourbatteryhorseeatsstapleswalmart" }
    });
    fireEvent.submit(await findByRole("button"));

    const error = await findByText(
      "Try using a nonsense phrase other than Yourbatteryhorseeatsstapleswalmart"
    );
  });
});
it("displays a loading svg on form submission", () => {});
