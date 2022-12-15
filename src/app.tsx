import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage";

export const render = () => {
    const container = document.getElementById("body");
    const root = createRoot(container!);
    root.render(<HomePage />);
};
