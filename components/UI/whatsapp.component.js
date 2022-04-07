import Image from "next/image";
import styles from "./Whatsapp.module.scss";

const Whatsapp = () => {
  return (
    <a href="https://wa.link/3yt2bw" className={styles.WhatsappButton} target="_blank" rel="noopener noreferrer">
      <div className={styles.WhatsappImage}>
        <Image src="/images/icons/whatsapp.svg" alt="Contáctanos por whatsapp" layout="fill" objectFit="contain" />
      </div>
      <p>Soporte</p>
    </a>
  );
};

export default Whatsapp;
