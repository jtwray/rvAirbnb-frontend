import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import LoginForm from "../auth_views/login/LoginForm";

const render = (yum, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return rtlRender(yum, { wrapper: Router });
};

test("full app rendering/navigating", () => {
  render(<LoginForm />)
  expect(screen.findByText(/Welcome Back Stranger/i)).toBeInTheDocument()

  userEvent.click(screen.getByText(/signup/i))
  expect(screen.getByText(/Nice To Meet You/i)).toBeInTheDocument()
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
});
