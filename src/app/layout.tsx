import React, { Suspense } from "react";
import Navbar from "@/component/navbar";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Suspense fallback={null}>
                    <Navbar />
                </Suspense>

                {children}
            </body>
        </html>
    );
}