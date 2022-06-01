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
      <div className="w-full">
        <Link href="/beneficios">
          <a className={styles.BannerCard}>
            {isMobile ? (
              <Image src="/images/banners/cupon-360.png" alt="Utiliza nuesrto cupón del mes y gana con INSTAKASH" layout="fill" objectFit="contain" />
            ) : (
              <Image src="/images/banners/cupon-1200.png" alt="Utiliza nuesrto cupón del mes y gana con INSTAKASH" layout="fill" objectFit="contain" />
            )}
          </a>
        </Link>
      </div>
      <div className="w-full">
        <a className={styles.BannerCard} href="https://wa.link/3yt2bw" target="_blank" rel="noopener noreferrer">
          {isMobile ? (
            <Image src="/images/banners/empresas-360.png" alt="Utiliza nuesrto cupón del mes y gana con INSTAKASH" layout="fill" objectFit="contain" />
          ) : (
            <Image src="/images/banners/empresas-1200.png" alt="Utiliza nuesrto cupón del mes y gana con INSTAKASH" layout="fill" objectFit="contain" />
          )}
        </a>
      </div>
    </Slider>
  );
};

export default AdsCarousel;
