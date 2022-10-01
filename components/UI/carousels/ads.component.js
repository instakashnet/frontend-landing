import Image from "next/image";
import Link from "next/link";
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
    autoplaySpeed: 5000,
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
              <Image src="/images/banners/cupon360.webp" alt="Mejora el tipo de cambio con INSTAKASH usando nuestro cupón del mes." layout="fill" objectFit="contain" />
            ) : (
              <Image src="/images/banners/cupon1200.webp" alt="Mejora el tipo de cambio con INSTAKASH usando nuestro cupón del mes." layout="fill" objectFit="contain" />
            )}
          </a>
        </Link>
      </div>
      <div className="w-full">
        <a className={styles.BannerCard} href="https://linktr.ee/instakashnet" target="_blank" rel="noopener noreferrer">
          {isMobile ? (
            <Image src="/images/banners/descargar-app360.webp" alt="Descarga nuestro app INSTAKASH y cambia facil" layout="fill" objectFit="contain" />
          ) : (
            <Image src="/images/banners/descargar-app1200.webp" alt="Descarga nuestro app INSTAKASH y cambia facil" layout="fill" objectFit="contain" />
          )}
        </a>
      </div>
    </Slider>
  );
};

export default AdsCarousel;
