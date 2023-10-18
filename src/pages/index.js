import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "@/styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Home() {
  const [is1024, setIs1024] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setIs1024({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smSlidePerView = is1024.width < 1024 ? true : false;

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
            <img src='/大安門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/台大門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/市府門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/瑞光門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/高雄門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/大安門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/台大門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/市府門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/瑞光門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/高雄門市.jpg' alt='' className={Styles.slideImg} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
