import cls from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { event } from "../../utils/fbpixel";
import styles from "./Nav.module.scss";

const Nav = () => {
  const [scrollDirection, setScrollDirection] = useState("default"),
    [mobileNav, setMobileNav] = useState(false),
    router = useRouter();

  useEffect(() => {
    let lastScroll = 40,
      direction = "default";

    const setNavbarEffect = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 40) direction = "default";
      if (lastScroll > 40 && currentScroll > lastScroll && direction !== "down") direction = "down";
      if (currentScroll < lastScroll && direction === "down") direction = "up";

      setScrollDirection(direction);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", setNavbarEffect);

    return () => window.removeEventListener("scroll", setNavbarEffect);
  }, []);

  useEffect(() => {
    if (mobileNav) setMobileNav(false);
  }, [router.asPath]);

  const toggleNav = () => setMobileNav((prev) => !prev);
  const closeNav = (e) => {
    if (e.target.href) setMobileNav(false);
  };

  const onRegister = () => {
    event("Subscribe");
    location.href = "https://app.instakash.net/register";
  };

  return (
    <>
      <nav className={cls(styles.nav, scrollDirection === "down" ? styles.navDown : scrollDirection === "up" ? styles.navUp : "")}>
        <div className='container flex items-center justify-between'>
          <Link href='/' legacyBehavior>
            <div className={styles.Logo}>
              <Image layout='fill' objectFit='contain' src='/images/logo.svg' alt='Instakash' />
            </div>
          </Link>

          <div className='flex items-center'>
            <ul className='mr-3'>
              <li>
                <Link href='/nosotros'>Nosotros</Link>
              </li>
              <li>
                <Link href='/beneficios'>Beneficios</Link>
              </li>
              <li>
                <Link href='/sistema-de-niveles'>Niveles</Link>
              </li>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>
            </ul>

            <div className={styles.navButtons}>
              <a href='https://app.instakash.net/login' className={styles.secondary}>
                Iniciar sesión
              </a>
              <button onClick={onRegister} className={styles.primary}>
                Registrarse
              </button>
            </div>

            <button className={`${styles.mobileNavButton} ${mobileNav ? styles.openedNavButton : ""}`} onClick={toggleNav}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <nav className={`${styles.mobileNav} ${mobileNav ? styles.openedNav : ""}`} onClick={closeNav}>
        <ul>
          <h3>Menú</h3>
          <li>
            <Link href='/nosotros'>Nosotros</Link>
          </li>
          <li>
            <Link href='/beneficios'>Beneficios</Link>
          </li>
          <li>
            <Link href='/sistema-de-niveles'>Niveles</Link>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
        </ul>
        <div className={styles.schedule}>
          <h3>Horario</h3>
          <p>
            Lunes a Viernes <b>9 am - 7 pm</b>
          </p>
          <p>
            Sábados <b>9 am - 2 pm</b>
          </p>
          <p>
            Domingos y Feriados <b>cerrados</b>
          </p>
        </div>

        <div className={styles.navButtons}>
          <a href='https://app.instakash.net/login' className={styles.secondary}>
            Iniciar sesión
          </a>
          <a href='https://app.instakash.net/login' className={styles.primary}>
            Registrarse
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
