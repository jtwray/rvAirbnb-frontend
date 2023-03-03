import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import App from "./App";
import "./styles.css";

// const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const theStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<Provider store={theStore}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
</Provider>);

// ReactDOM.createRoot(
//   <Provider store={theStore}>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );
// // 