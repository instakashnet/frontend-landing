import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { getCounters } from "../../utils/fetch-data";

import styles from "./counters.module.scss";

export default function Counters() {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const data = await getCounters();
        setCounters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounters();
  }, []);

  return (
    <div className={styles.countersWrapper}>
      <div className={styles.infoWrapper}>
        <div className="mr-6">
          <Image
            src="/images/icons/laptop.svg"
            width={45}
            height={45}
            alt="cambios realizados"
          />
        </div>
        <div>
          <span className={styles.counter}>
            +{counters.qtySuccessfullOrders?.toLocaleString("es-ES")}
          </span>
          <p>cambios realizados</p>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className="mr-6">
          <Image
            src="/images/icons/soles.svg"
            width={45}
            height={45}
            alt="cantidad de soles transferidos"
          />
        </div>
        <div>
          <span className={styles.counter}>
            +{counters.totalProcessed?.substring(0, 2)} mil millones
          </span>
          <p>de soles transferidos</p>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className="mr-6">
          <Image
            src="/images/icons/users.svg"
            width={45}
            height={45}
            alt="usuarios registrados"
          />
        </div>
        <div>
          <span className={styles.counter}>
            +{counters.qtyUsers?.toLocaleString("es-ES")}
          </span>
          <p>usuarios registrados</p>
        </div>
      </div>
    </div>
  );
}
