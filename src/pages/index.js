import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Styles from "@/styles/index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../../components/UI/productItem";
import ProductBtn from "../../components/UI/productBtn";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {
  const [is1024, setIs1024] = useState({ width: undefined });
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  const onChange1 = (isVisible) => {
    if (isVisible) setIsVisible1(true);
  };

  const onChange2 = (isVisible) => {
    if (isVisible) setIsVisible2(true);
  };

  const onChange3 = (isVisible) => {
    if (isVisible) setIsVisible3(true);
  };

  const onChange4 = (isVisible) => {
    if (isVisible) setIsVisible4(true);
  };

  const onChange5 = (isVisible) => {
    if (isVisible) setIsVisible5(true);
  };

  const onChange6 = (isVisible) => {
    if (isVisible) setIsVisible6(true);
  };

  // 監聽視窗大小
  useEffect(() => {
    const handleResize = () => {
      setIs1024({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smSlidePerView = is1024.width <= 1024 ? true : false;

  const [windowWidth, setWindowWidth] = useState({ width: undefined });
  const [windowHeight, setWindowHeight] = useState({ height: undefined });
  const [scrollPos, setScrollPos] = useState(0);
  const [elementPos, setElementPos] = useState(null);
  const activeBallRef = useRef(null);

  useEffect(() => {
    setElementPos(activeBallRef.current.getBoundingClientRect().top);
  }, []);

  // 更新滚动位置和窗口宽度
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({ width: window.innerWidth });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
      setWindowHeight({ height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransformValue = () => {
    if (!elementPos) return windowWidth.width;


    let value = windowWidth.width - (elementPos - scrollPos) / 2;
    console.log("value", value);
    if (value < 0) value = 0;

    return value;
  };
  console.log("scrollPos", scrollPos);
  console.log("elementPos", elementPos);
  console.log("windowWidth", windowWidth);
  console.log("is1024", is1024);
  console.log("windowHeight", windowHeight);

  // 監聽滾動
  // const [scrollPos, setScrollPos] = useState(0);

  // useEffect(() => {
  //   // 定義用於更新滾動距離的函數
  //   const updateScrollPos = () => {
  //     setScrollPos(window.scrollY);
  //   };

  //   // 當組件裝載和更新時，添加滾動監聽器
  //   window.addEventListener("scroll", updateScrollPos);

  //   // 當組件卸載時，移除滾動監聽器
  //   return () => window.removeEventListener("scroll", updateScrollPos);
  // }, []); // 為 useEffect 添加空數組作為依賴項列表，意味著這個 effect 只有在初次裝載和卸載時運行

  // console.log("scrollPos", scrollPos);

  return (
    <>
      <Head>
        <title>Bros Coffee | 兄弟咖啡</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <section className={Styles.jumbotron}>
        <h1 className={Styles.jbTitle}>Bros Coffee</h1>
        <h4 className={Styles.jbText}>兄弟咖啡</h4>
      </section>
      <section className={Styles.story}>
        <div className={Styles.storyInfo}>
          <div className={Styles.title}>
            <p>品牌精神</p>
            <p>OUR STORY</p>
          </div>
        </div>
        <div className={Styles.text}>
          <p>用咖啡開啟美好生活</p>
          <p>Have a nice day</p>
        </div>
      </section>
      <section className={Styles.swiper}>
        <Swiper
          cssMode={true}
          slidesPerView={smSlidePerView ? 1 : 3}
          spaceBetween={30}
          navigation={true}
          allowTouchMove={true}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={Styles.mySwiper}
        >
          <SwiperSlide>
            <Link href='/'>
              <img src='/public/大安門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/台大門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/市府門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/瑞光門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/高雄門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/大安門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/台大門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='/../../public/市府門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/瑞光門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/'>
              <img src='../../public/高雄門市.jpg' alt='' className={Styles.slideImg} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={Styles.bgColour}>
        <h2 className={Styles.title}>產品介紹</h2>
      </section>
      <section className={Styles.product1}>
        {/* 兩個bcgimage交換 */}
        <div className={Styles.img}></div>
        <div className={Styles.info}>
          <VisibilitySensor onChange={onChange1} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible1 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={isVisible1 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
                <ProductBtn title='配方豆' bgc='#808080' link='/' />
              </div>
              <p className={isVisible1 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                甜蜜烘焙 獨家風味
              </p>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={onChange2} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible2 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={isVisible2 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
                <ProductBtn title='單品豆' bgc='#4d4d4d' link='/' />
              </div>
              <p className={isVisible2 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                風味旅程 當季首選
              </p>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={onChange3} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible3 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={isVisible3 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
                <ProductBtn title='極精品豆' bgc='#1a1a1a' link='/' />
              </div>
              <p className={isVisible3 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                出類拔萃 一時之選
              </p>
            </div>
          </VisibilitySensor>
        </div>
      </section>
      <div className={Styles.activeBall} ref={activeBallRef}>
        <img
          src='/activeBall.png'
          alt=''
          className={Styles.ballImg}
          style={{ transform: `translateX(${getTransformValue()}px)` }}
        />
      </div>
      <div className={Styles.infosm}>
        <VisibilitySensor onChange={onChange1} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible1 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={isVisible1 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
              <ProductBtn title='配方豆' bgc='#808080' link='/' />
            </div>
            <p className={isVisible1 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              甜蜜烘焙 獨家風味
            </p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange2} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible2 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={isVisible2 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
              <ProductBtn title='單品豆' bgc='#4d4d4d' link='/' />
            </div>
            <p className={isVisible2 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              風味旅程 當季首選
            </p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange3} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible3 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={isVisible3 ? `${Styles.btnWrap} ${Styles.slideInLeft}` : Styles.btnWrap}>
              <ProductBtn title='極精品豆' bgc='#1a1a1a' link='/' />
            </div>
            <p className={isVisible3 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              出類拔萃 一時之選
            </p>
          </div>
        </VisibilitySensor>
      </div>
      <section className={Styles.product2}>
        <div className={Styles.img}></div>
        <div className={Styles.info}>
          <VisibilitySensor onChange={onChange4} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible4 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={isVisible4 ? `${Styles.btnWrap} ${Styles.rotateInL}` : Styles.btnWrap}>
                <ProductBtn title='行家系列' bgc='#808080' link='/' />
              </div>
              <p className={isVisible4 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                頂尖之作 餘韻不斷
              </p>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={onChange5} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible5 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={isVisible5 ? `${Styles.btnWrap} ${Styles.rotateInR}` : Styles.btnWrap}>
                <ProductBtn title='經典系列' bgc='#4d4d4d' link='/' />
              </div>
              <p className={isVisible5 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                狂銷熱賣 小資首選
              </p>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={onChange6} offset={{ top: 10 }} delayedCall partialVisibility>
            <div className={isVisible6 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
              <div className={Styles.btnWrap}>
                <ProductBtn title='單品系列' bgc='#1a1a1a' link='/' />
              </div>
              <p className={isVisible6 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
                繽紛風味 簡單享受
              </p>
            </div>
          </VisibilitySensor>
        </div>
      </section>
      <div className={Styles.infosm}>
        <VisibilitySensor onChange={onChange4} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible4 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={isVisible4 ? `${Styles.btnWrap} ${Styles.rotateInL}` : Styles.btnWrap}>
              <ProductBtn title='行家系列' bgc='#808080' link='/' />
            </div>
            <p className={isVisible4 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              頂尖之作 餘韻不斷
            </p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange5} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible5 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={isVisible5 ? `${Styles.btnWrap} ${Styles.rotateInR}` : Styles.btnWrap}>
              <ProductBtn title='經典系列' bgc='#4d4d4d' link='/' />
            </div>
            <p className={isVisible5 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              狂銷熱賣 小資首選
            </p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange6} offset={{ top: 10 }} delayedCall partialVisibility>
          <div className={isVisible6 ? `${Styles.productItem} ${Styles.show}` : Styles.productItem}>
            <div className={Styles.btnWrap}>
              <ProductBtn title='單品系列' bgc='#1a1a1a' link='/' />
            </div>
            <p className={isVisible6 ? `${Styles.productText} ${Styles.fadeIn}` : Styles.productText}>
              繽紛風味 簡單享受
            </p>
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
}
