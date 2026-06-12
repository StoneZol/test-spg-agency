import type { Metadata } from "next";
import localFont from 'next/font/local'
import "@styles/App.scss";
import { Header } from "@/1_widgets/Header";
import { DialogProvider } from "@/4_shared/components/custom/Dialog";
import { SmoothScrollProvider } from "@/4_shared/providers";

const ProximaNova = localFont({
    src: [
        {
            path: "./fonts/ProximaNova-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/ProximaNova-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/ProximaNova-Light.woff2",
            weight: "300",
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: {
        default: "INCHAPIN",
        template: "%s | INCHAPIN",
    },
    description:
        "Дом бизнес-класса для ценителей роскоши. Квартиры от 65 до 356 м² с чистовой отделкой.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={ProximaNova.variable}>
            <body className={ProximaNova.className}>
                <DialogProvider>
                    <SmoothScrollProvider />
                    <div className="root">
                        <Header />
                        <main>
                            {children}
                        </main>
                    </div>
                </DialogProvider>
            </body>
        </html>
    );
}
