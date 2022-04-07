import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "../Card";
import styles from "./Carousel.module.scss";

const BenefitsCarousel = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "10px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.Carousel}>
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <div className={styles.Cover}>
            <Image src="/images/beneficios/semanasanta.png" alt="Cupón para cambio online SEMANASANTA" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.BenefitsInfo}>
            <p>
              <strong>Cupón de descuento</strong>
            </p>
            <p>Cupón válido para 4 usos por el mes de Abril.</p>
          </div>
        </Card>
      </div>
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <div className={styles.Cover}>
            <Image src="/images/beneficios/utilidades.png" alt="Cupón para cambio online MESDEUTILIDADES" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.BenefitsInfo}>
            <p>
              <strong>Cupón de descuento</strong>
            </p>
            <p>Cupón válido desde el 4 de abril y hasta el 15 de abril.</p>
          </div>
        </Card>
      </div>
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <div className={styles.Cover}>
            <Image src="/images/beneficios/supermontos.png" alt="Cupones para cambiar online con SUPERMONTOS" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.BenefitsInfo}>
            <p>
              <strong>Cupónes supermontos</strong>
            </p>
            <p>Cupón válido desde el 4 de abril y hasta el 15 de abril.</p>
          </div>
        </Card>
      </div>
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <div className={styles.Cover}>
            <Image src="/images/beneficios/kash.png" alt="Gana KASH cambiando dólares online" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.BenefitsInfo}>
            <p>
              <strong>Gana con referidos</strong>
            </p>
            <p>Invita a tus amigos a Instakash y con su primer cambio gana KASH.</p>
          </div>
        </Card>
      </div>
    </Slider>
  );
};

export default BenefitsCarousel;
