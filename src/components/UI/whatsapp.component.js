import cls from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Whatsapp.module.scss";

const Whatsapp = () => {
  const [hideBtn, setHideBtn] = useState(false);

  useEffect(() => {
    const hideOnScroll = () => {
      const { scrollY, innerHeight } = window;
      const windowHeight = document.body.offsetHeight;

      if (scrollY + innerHeight >= windowHeight - 200) {
        setHideBtn(true);
      } else setHideBtn(false);
    };

    document.addEventListener("scroll", hideOnScroll);
  }, []);

  return (
    <a href="https://wa.link/wekqza" className={cls(styles.WhatsappButton, hideBtn ? styles.Hide : "")} target="_blank" rel="noopener noreferrer">
      <div className={styles.WhatsappImage}>
        <Image src="/images/icons/whatsapp.svg" alt="Contáctanos por whatsapp" layout="fill" objectFit="contain" />
      </div>
      <p>Soporte</p>
    </a>
  );
};

export default Whatsapp;
