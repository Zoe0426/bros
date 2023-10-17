import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={Styles.container}>
        <Navbar />
        <main className={Styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
