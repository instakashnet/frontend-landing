import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "../Card";
import styles from "./Benefits.module.scss";

const BenefitsCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    draggable: false,
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
          <Link href="/beneficios">
            <a className="block">
              <div className={styles.Cover}>
                <Image src="/images/beneficios/empresas.png" alt="Cupón para cambio online para empresas" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.BenefitsInfo}>
                <p>
                  <strong>Plan de empresas</strong>
                </p>
                <p>Afíliate a nuestro Plan para Empresas y recibe beneficios exclusivos.</p>
              </div>
            </a>
          </Link>
        </Card>
      </div>
      {/* <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <Link href="/beneficios">
            <a className="block">
              <div className={styles.Cover}>
                <Image src="/images/beneficios/kash.png" alt="Participa en nuestro sorteo el mes de la madre." layout="fill" objectFit="cover" />
              </div>
              <div className={styles.BenefitsInfo}>
                <p>
                  <strong>Sorteo</strong>
                </p>
                <p>Disponible desde el 2 de Mayo hasta el 27 de Mayo.</p>
              </div>
            </a>
          </Link>
        </Card>
      </div> */}
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <Link href="/beneficios">
            <a className="block">
              <div className={styles.Cover}>
                <Image src="/images/beneficios/supermontos.png" alt="Cupones para cambiar online con SUPERMONTOS" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.BenefitsInfo}>
                <p>
                  <strong>Cupónes supermontos</strong>
                </p>
                <p>Cupón válido desde el 4 de abril y hasta el 15 de abril.</p>
              </div>
            </a>
          </Link>
        </Card>
      </div>
      <div className={styles.Slide}>
        <Card className={styles.BenefitsCard}>
          <Link href="/beneficios">
            <a className="block">
              <div className={styles.Cover}>
                <Image src="/images/beneficios/kash.png" alt="Gana KASH cambiando dólares online" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.BenefitsInfo}>
                <p>
                  <strong>Gana con referidos</strong>
                </p>
                <p>Invita a tus amigos a Instakash y con su primer cambio gana KASH.</p>
              </div>
            </a>
          </Link>
        </Card>
      </div>
    </Slider>
  );
};

export default BenefitsCarousel;
