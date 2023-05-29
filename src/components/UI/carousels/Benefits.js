import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Card from '../Card';
import styles from './Benefits.module.scss';

const BenefitsCarousel = ({ benefits = [] }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    draggable: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '10px',
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
      {benefits.map((benefit) => (
        <div className={styles.Slide} key={benefit.id}>
          <Card className={styles.BenefitsCard}>
            <Link href='/beneficios' className='block' legacyBehavior>
              <>
                <div className={styles.Cover}>
                  <Image src={benefit.image?.url} alt={benefit.image?.alt} layout='fill' objectFit='cover' />
                </div>
                <div className={styles.BenefitsInfo}>
                  <h4 className='uppercase'>
                    <strong>{benefit.title}</strong>
                  </h4>
                  <p>{benefit.subtitle}</p>
                </div>
              </>
            </Link>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default BenefitsCarousel;
