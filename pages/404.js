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
                Incio
              </Link>
            </li>
            <li>
              <Link href="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/faq">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
