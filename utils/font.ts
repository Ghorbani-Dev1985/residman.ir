import localFont from "next/font/local";

export const ShabnamFont = localFont({
    src: [
        {
            path: "../public/font/shabnam/woff2/Shabnam-Bold-FD.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "../public/font/shabnam/woff2/Shabnam-Medium-FD.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/font/shabnam/woff2/Shabnam-Light-FD.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/font/shabnam/woff2/Shabnam-Thin-FD.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/font/shabnam/woff2/Shabnam-FD.woff2",
            weight: "normal",
            style: "normal",
        },
    ],
    variable: "--font-shabnam-FD"
})