import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";
import styles from "./Ads.module.scss";

const AdsCarousel = () => {
  const { isMobile } = useDeviceDetect();

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
          {isMobile ? (
            <Image src="/images/banners/sorteo-mama-360.png" alt="Gana un día en un SPA para MAMÁ con INSTAKASH" layout="fill" objectFit="contain" />
          ) : (
            <Image src="/images/banners/sorteo-mama-1200.png" alt="Gana un día en un SPA para MAMÁ con INSTAKASH" layout="fill" objectFit="contain" />
          )}
        </a>
      </div>
      <div className="w-full">
        <Link href="/beneficios">
          <a className={styles.BannerCard}>
            {isMobile ? (
              <Image src="/images/banners/kash-360.png" alt="Gana 2 KASH por referido con INSTAKASH" layout="fill" objectFit="contain" />
            ) : (
              <Image src="/images/banners/kash-1200.png" alt="Gana 2 KASH por referido con INSTAKASH" layout="fill" objectFit="contain" />
            )}
          </a>
        </Link>
      </div>
    </Slider>
  );
};

export default AdsCarousel;
