import cls from 'classnames';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import styles from './tabs.module.scss';

const Tabs = ({ activeTab }) => {
  return (
    <div className={styles.TabsHead}>
      <Link href={{ pathname: '/faq', query: { tab: 1 } }} legacyBehavior>
        <div className={cls(styles.Tab, activeTab === 1 ? styles.Active : '')}>
          <div className={styles.TabIcon}>
            <Image src='/images/icons/circleArrows.svg' alt='Casa de cambio' width={30} height={30} objectFit='contain' />
          </div>
          <span>Casa de cambio</span>
        </div>
      </Link>

      <Link href={{ pathname: '/faq', query: { tab: 2 } }} className={cls(styles.Tab, activeTab === 2 ? styles.Active : '')} legacyBehavior>
        <div className={cls(styles.Tab, activeTab === 2 ? styles.Active : '')}>
          <div className={styles.TabIcon}>
            <Image width={30} height={30} objectFit='contain' src='/images/icons/kash.svg' alt='KASH' />
          </div>
          <span>KASH</span>
        </div>
      </Link>

      <Link href={{ pathname: '/faq', query: { tab: 3 } }} className={cls(styles.Tab, activeTab === 3 ? styles.Active : '')} legacyBehavior>
        <div className={cls(styles.Tab, activeTab === 3 ? styles.Active : '')}>
          <div className={styles.TabIcon}>
            <Image width={30} height={30} objectFit='contain' src='/images/icons/profile.svg' alt='Cuenta y perfil' />
          </div>
          <span>Cuenta y perfil</span>
        </div>
      </Link>

      <Link href={{ pathname: '/faq', query: { tab: 4 } }} className={cls(styles.Tab, activeTab === 4 ? styles.Active : '')} legacyBehavior>
        <div className={cls(styles.Tab, activeTab === 4 ? styles.Active : '')}>
          <div className={styles.TabIcon}>
            <Image width={30} height={30} objectFit='contain' src='/images/icons/horizontal-arrows.svg' alt='Mis cambios' />
          </div>
          <span>Mis cambios</span>
        </div>
      </Link>
    </div>
  );
};

export default Tabs;
