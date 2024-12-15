"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/Custom/Layout/Header";
import SideBar from "@/Custom/Layout/sidebar";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  // Kiểm tra nếu đang ở trang /login
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body>
        {isLoginPage ? (
          // Nếu là trang /login, chỉ hiển thị children
          <div className="h-full">{children}</div>
        ) : (
          // Nếu không phải trang /login, hiển thị layout đầy đủ
          <div className="flex h-full">
            <SideBar />
            <div className="flex-1 flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
