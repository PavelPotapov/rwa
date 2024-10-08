import "./app/styles/main.pcss";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
