import React from "react";
import Link from "next/link";
import Styles from "./productBtn.module.css";

export default function ProductBtn({ bgc = "", title = "", link = "" }) {
  return (
    <>
      <Link href={link}>
        <div className={Styles.productBtn} style={{ backgroundColor: bgc }}>
          {title}
        </div>
      </Link>
    </>
  );
}
