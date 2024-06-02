"use client"

import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import TopBar from "@/components/shared/topbar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className = "flex h-screen flex-col">
        <TopBar/>
        <Navbar/>
        <main className = "flex-1">{children}</main>
        {/* <Footer/> */}
      </div>
    );
  }