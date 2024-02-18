import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { rootStore } from "./redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
