import cls from "classnames";
import Image from "next/image";
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
    location.href = "https://app.instakash.net/signup";
  };

  return (
    <>
      <nav className={cls(styles.nav, scrollDirection === "down" ? styles.navDown : scrollDirection === "up" ? styles.navUp : "")}>
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className={styles.Logo}>
              <Image layout="fill" objectFit="contain" src="/images/logo.svg" alt="Instakash" />
            </a>
          </Link>

          <ul className="ml-auto mr-3">
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/beneficios">Beneficios</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>

          <div className={styles.navButtons}>
            <a href="https://app.instakash.net/signin" className="mr-4">
              Iniciar sesión
            </a>
            <button onClick={onRegister}>Registrarse</button>
          </div>

          <button className={`${styles.mobileNavButton} ${mobileNav ? styles.openedNavButton : ""}`} onClick={toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <nav className={`${styles.mobileNav} ${mobileNav ? styles.openedNav : ""}`} onClick={closeNav}>
        <ul>
          <h3>Menú</h3>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/beneficios">Beneficios</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={styles.schedule}>
          <h3>Horario</h3>
          <p>Lunes a Sábado 9 am - 7 pm</p>
          <p>Domingos y Feriados cerrados</p>
        </div>

        <div className={styles.navButtons}>
          <a href="https://app.instakash.net">Iniciar sesión</a>
          <a href="https://app.instakash.net">Registrarse</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
