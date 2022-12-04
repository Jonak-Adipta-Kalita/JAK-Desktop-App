import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import WebpackShellPlugin from "webpack-shell-plugin-next";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

export const plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: "webpack-infrastructure",
    }),
    new WebpackShellPlugin({
        onBuildEnd: {
            scripts: [
                "tailwindcss -i ./src/styles/globals.css -o ./.webpack/renderer/main_window/styles/globals.css",
                "copyfiles ./assets/fonts/OtomanopeeOne-Regular.ttf ./.webpack/renderer/main_window",
            ],
            blocking: true,
        },
    }),
];
