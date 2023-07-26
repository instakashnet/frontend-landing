import Image from "next/legacy/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";
import styles from "./Ads.module.scss";

const AdsCarousel = ({ banners = [] }) => {
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
    <div className="container px-0 pb-0">
      <Slider className={styles.BannerSlider} {...settings}>
        {banners.map((banner) => (
          <div className="w-full" key={banner.title}>
            <a className={styles.BannerCard} href={banner.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.BannerCard}>
                {isMobile ? (
                  <Image src={banner.mobile} alt={banner.description} layout="fill" objectFit="contain" />
                ) : (
                  <Image src={banner.desktop} alt={banner.description} layout="fill" objectFit="contain" />
                )}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdsCarousel;
