import React from "react";
import { Provider } from "redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import { rootReducer as reducer } from "../redux/reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";
