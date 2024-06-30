import { Montserrat } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layout/Sidebar";
import clsx from "clsx";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SPA - Sistem Penginputan Arsip",
  description: "BP Batam",
};

export default function RootLayout({ children }) {
  const isTokenExist = cookies().get("token")
  if(!isTokenExist){
    redirect("/login")
  }
  return (
    <html lang="en">
      <body className={clsx(font.className, "flex flex-row")}>
        <Sidebar />
        {children}

      </body>
    </html>
  );
}
