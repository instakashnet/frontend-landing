import Card from "@components/UI/Card";
import Calculator from "@components/calculator";
import Image from "next/legacy/image";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./MainBanner.module.scss";

function MainBanner() {
  return (
    <section className={styles.MainBanner} id='calculator'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:mt-3'>
          <div className={styles.TitleWrapper}>
            <h1>
              <em>Casa de cambio online</em>
            </h1>
            <h2>
              Con la mejor tasa, <br /> comienza el cambio.
            </h2>
            <p className='flex'>
              <FaCheckCircle size={25} className='mr-2 lg:mt-1' /> Entidad registrada en la SBS.
            </p>
          </div>
          <Card className={styles.CalculatorWrapper}>
            <p>
              <strong>
                Tipo de cambio <br /> para hoy en Instakash
              </strong>
            </p>
            <Calculator />
          </Card>
        </div>
        <div className={styles.SuperKashWrapper}>
          <Image src='/images/illustrations/superkash.svg' alt='Casa de cambio online' layout='fill' objectFit='contain' />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
