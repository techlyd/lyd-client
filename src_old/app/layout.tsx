import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { WhatsApp } from "@/components/common/WhatsApp";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={font.className}>
                <Providers>
                    <WhatsApp />
                    {/* <Header /> */}
                    {children}
                    {/* <Footer /> */}
                </Providers>
            </body>
        </html>
    );
}
