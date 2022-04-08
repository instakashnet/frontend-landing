import Link from "next/link";
import React from "react";
import styles from "../styles/NotFound.module.scss";

const NotFound = () => {
  return (
    <section className="container">
      <div className={styles.NotFoundSection}>
        <div className={styles.NotFoundInfo}>
          <p>
            ¡Ups! Tal vez estabas buscando otra página, o el enlace ya no existe. <br /> Prueba con los siguiente:
          </p>

          <ul>
            <li>
              <Link href="/">
                <a>Incio</a>
              </Link>
            </li>
            <li>
              <Link href="/nosotros">
                <a>Nosotros</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>Preguntas frecuentes</a>
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones">
                <a>Términos y condiciones</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
