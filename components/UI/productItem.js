import React from "react";
import Link from "next/link";
import Styles from "./productItem.module.css";
import ProductBtn from "./productBtn";

export default function ProductItem({ text = "", title = "", bgc = "", link = "" }) {
  return (
    <>
      <div className={Styles.productItem}>
        <ProductBtn title={title} bgc={bgc} link={link} />
        <p className={Styles.productText}>{text}</p>
      </div>
    </>
  );
}
