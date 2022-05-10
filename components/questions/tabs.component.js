import cls from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./tabs.module.scss";

const Tabs = ({ activeTab }) => {
  return (
    <div className={styles.TabsHead}>
      <Link href={{ pathname: "/faq", query: { tab: 1 } }}>
        <a className={cls(styles.Tab, activeTab === 1 ? styles.Active : "")}>
          <div className={styles.TabIcon}>
            <Image src="/images/icons/circleArrows.svg" alt="Casa de cambio" width={20} height={20} />
          </div>
          <span>Casa de cambio</span>
        </a>
      </Link>

      <Link href={{ pathname: "/faq", query: { tab: 2 } }}>
        <a className={cls(styles.Tab, activeTab === 2 ? styles.Active : "")}>
          <div className={styles.TabIcon}>
            <Image src="/images/icons/kash.svg" alt="KASH" width={20} height={20} />
          </div>
          <span>KASH</span>
        </a>
      </Link>

      <Link href={{ pathname: "/faq", query: { tab: 3 } }}>
        <a className={cls(styles.Tab, activeTab === 3 ? styles.Active : "")}>
          <div className={styles.TabIcon}>
            <Image src="/images/icons/profile.svg" alt="Cuenta y perfil" width={20} height={20} />
          </div>
          <span>Cuenta y perfil</span>
        </a>
      </Link>

      <Link href={{ pathname: "/faq", query: { tab: 4 } }}>
        <a className={cls(styles.Tab, activeTab === 4 ? styles.Active : "")}>
          <div className={styles.TabIcon}>
            <Image src="/images/icons/horizontal-arrows.svg" alt="Mis cambios" width={20} height={20} />
          </div>
          <span>Mis cambios</span>
        </a>
      </Link>
    </div>
  );
};

export default Tabs;
