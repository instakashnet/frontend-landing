import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./Ads.module.scss";

const AdsCarousel = () => {
  let settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={styles.BannerSlider} {...settings}>
      <div className="w-full">
        <Link href="/beneficios">
          <a className={styles.BannerCard}>
            <Image src="/images/banners/kash.png" layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
      <div className="w-full">
        <a href="#" className={styles.BannerCard}>
          <Image src="/images/banners/sorteo-mama.png" layout="fill" objectFit="contain" />
        </a>
      </div>
    </Slider>
  );
};

export default AdsCarousel;
