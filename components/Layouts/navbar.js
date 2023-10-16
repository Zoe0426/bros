import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./navber.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";

export default function Navbar({ type = "" }) {
  const [isActive, setIsActive] = useState(false);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      "最新消息",
      null // No icon for this item
    ),
    getItem(
      "所有商品",
      "sub2",
      null, // No icon for this item
      [
        getItem("咖啡飲品", "5"),
        getItem("糕點", "6"),
        getItem("周邊商品", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
      ]
    ),
    getItem(
      "門市資訊",
      "sub4",
      null, // No icon for this item
      [getItem("找門市", "9"), getItem("找菜單", "10")]
    ),
  ];

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.navbar}>
          <div className={Styles.logo}>
            <button className={Styles.navToggler} onClick={handleClick}>
              <div className={`${Styles.line} ${isActive ? Styles.active : ""}`}></div>
            </button>
            {/* <Image src='/logo.png' alt='' className='logo' width={180} height={86} /> */}
            <Link href='/'>
              <img src='/logo.png' alt='' />
            </Link>
          </div>
          <div className={Styles.links}>
            <div className={Styles.linkMenu}>
              <div className={Styles.linkItem}>
                <Link href='https://www.facebook.com/broscoffeeshop/' target='_blank' className={Styles.link}>
                  最新消息
                </Link>
              </div>
              <div className={Styles.linkItem}>
                <Link href='/' className={Styles.link}>
                  所有商品
                </Link>
                <div className={Styles.dropdown}>
                  <Link href='/'>
                    <li className={Styles.dropdownItem}>咖啡飲品</li>
                  </Link>
                  <Link href='/'>
                    <li className={Styles.dropdownItem}>糕點</li>
                  </Link>
                  <Link href='/'>
                    <li className={Styles.dropdownItem}>周邊商品</li>
                  </Link>
                </div>
              </div>
              <div className={Styles.linkItem}>
                <Link href='/' className={Styles.link}>
                  門市資訊
                </Link>
                <div className={Styles.dropdown}>
                  <Link href='/'>
                    <li className={Styles.dropdownItem}>找門市</li>
                  </Link>
                  <Link href='/'>
                    <li className={Styles.dropdownItem}>找菜單</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className={Styles.iconMenu}>
              <div className={Styles.cartBtn}>
                {/* <NavRoundBtn icon='/h-cart.png'></NavRoundBtn> */}
                <Link href='/cart'>
                  <FontAwesomeIcon icon={faCartShopping} className={Styles.iconCart} />
                </Link>
              </div>

              <div className={Styles.memBtn}>
                {/* <NavRoundBtn icon='/h-user.png'></NavRoundBtn> */}
                <Link href='/member'>
                  <FontAwesomeIcon icon={faUser} className={Styles.iconUser} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Menu
        className={`${Styles.accordion} ${isActive ? Styles.active : ""}`}
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
          height: "100vh",
        }}
      >
        {items.map((item) =>
          item.children ? (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          )
        )}
      </Menu>
    </>
  );
}
