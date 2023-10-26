import React from "react";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Styles from "./navber.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Menu, ConfigProvider } from "antd";


export default function Navbar({ type = "" }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);

  //監聽scrollPos
  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navIndexClass = scrollPosition >= 250 ? Styles.active : "";

  // 手機導航menu
  function getItem(label, key, icon, children, type, url) {
    return {
      key,
      icon,
      children,
      label,
      type,
      url,
    };
  }

  const items = [
    getItem(
      "最新消息",
      "sub1",
      null, // No icon for this item
      null,
      null,
      "https://www.facebook.com/broscoffeeshop/"
    ),
    getItem(
      "所有商品",
      "sub2",
      null, // No icon for this item
      [
        getItem("咖啡飲品", "5", null, null, null, "/"),
        getItem("糕點", "6", null, null, null, "/"),
        getItem("周邊商品", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")], null, "/"),
      ]
    ),
    getItem(
      "門市資訊",
      "sub4",
      null, // No icon for this item
      [getItem("找門市", "9", null, null, null, "/"), getItem("找菜單", "10", null, null, null, "/")]
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
    setScrollLock(!scrollLock);
    if (!scrollLock) {
      document.body.classList.add("scrollLock");
    } else {
      document.body.classList.remove("scrollLock");
    }
  };
  return (
    <>
      <header className={`${Styles.header} ${navIndexClass}`}>
        <nav className={Styles.navbar}>
          <div className={Styles.logo}>
            <button className={Styles.navToggler} onClick={handleClick}>
              <div className={`${Styles.line} ${isActive ? Styles.active : ""}`}></div>
            </button>
            {/* <Image src='/logo.png' alt='' className='logo' width={180} height={86} /> */}
              <Link href='/'>
                <img src="public/logo.png" alt='' />
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
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              /* here is your component tokens */
              itemHoverColor: "#fea200",
              itemActiveBg: "none",
              itemSelectedBg: "none",
              itemSelectedColor: "rgba(0, 0, 0, 0.88)",
            },
          },
        }}
      >
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
                  <Menu.Item key={subItem.key} onClick={() => router.push(subItem.url)}>
                    {subItem.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon} onClick={() => router.push(item.url)}>
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </ConfigProvider>

      <div className={`${Styles.darkWrap} ${isActive ? Styles.active : ""}`}></div>
    </>
  );
}
