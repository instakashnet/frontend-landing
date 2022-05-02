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
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={styles.BannerSlider} {...settings}>
      <div className="w-full">
        <a href="https://rebrand.ly/2jmv3wh" target="_blank" rel="noopener noreferrer" className={styles.BannerCard}>
          <Image src="/images/banners/sorteo-mama.png" layout="fill" objectFit="contain" />
        </a>
      </div>
      <div className="w-full">
        <Link href="/beneficios">
          <a className={styles.BannerCard}>
            <Image src="/images/banners/kash.png" layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
    </Slider>
  );
};

export default AdsCarousel;
