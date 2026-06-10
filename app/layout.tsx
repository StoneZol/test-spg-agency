import type { Metadata } from "next";
import localFont from 'next/font/local'
import "@styles/App.scss";
import { Header } from "@/1_widgets/Header";

const ProximaNova = localFont({
    src: [
        {
            path: "./fonts/ProximaNova-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/ProximaNova-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/ProximaNova-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/ProximaNova-Semibold.woff2",
            weight: "600",
            style: "normal",
        }
    ],
    variable: "--font-proxima-nova",
})

export const metadata: Metadata = {
    title: {
        default: "SPG Agency | Digital Agency",
        template: "%s | SPG Agency",
    },
    description: "SPG Agency",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${ProximaNova.variable}`}>
            <body>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
