import Image from "next/image";
import styles from "./Whatsapp.module.scss";

const Whatsapp = () => {
  return (
    <button className={styles.WhatsappButton}>
      <div className={styles.WhatsappImage}>
        <Image src="/images/icons/whatsapp.svg" alt="Contáctanos por whatsapp" layout="fill" objectFit="contain" />
      </div>
      <p>Soporte</p>
    </button>
  );
};

export default Whatsapp;
