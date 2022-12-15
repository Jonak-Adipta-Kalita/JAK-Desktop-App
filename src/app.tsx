import * as ReactDOM from "react-dom";
import HomePage from "./components/HomePage";

export const render = () => {
    ReactDOM.render(
        <>
            <HomePage />
        </>,
        document.getElementById("body")
    );
};
