import React from "react";
import Link from "next/link";
import Styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faLine } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.info}>
          <li>
            <Link href='https://www.facebook.com/broscoffeeshop/'>
              <FontAwesomeIcon icon={faSquareFacebook} className={Styles.socialMedia1} />
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/broscoffeeshop/'>
              <FontAwesomeIcon icon={faSquareInstagram} className={Styles.socialMedia1} />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faLine} className={Styles.socialMedia} />
          </li>
        </div>
        <div className={Styles.copyRight}>
          <p>© 2023 BrosCoffee. 此網站為練習作品，並無營業用途，來源參考湛盧咖啡 https://www.zhanlu.com.tw/</p>
        </div>
      </footer>
    </>
  );
}
