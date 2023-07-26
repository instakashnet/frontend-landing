import Image from "next/legacy/image";
import Card from "../UI/Card";
import styles from "./steps.module.scss";

function Steps() {
  return (
    <section className={styles.StepsSection}>
      <div className="container">
        <div className="text-center mt-5">
          <h2 className={styles.Title}>Cambia dólares online</h2>
          <p className={styles.Subtitle}>Ingresa a nuestra casa de cambio online, sigue estos 4 pasos y obtén el mejor tipo de cambio.</p>
        </div>
        <div className={styles.StepsWrapper}>
          <Card className={styles.StepCard}>
            <span className={styles.Step}>Paso 1</span>
            <div className={styles.StepImage}>
              <Image src="/images/steps/step-1.svg" alt="Cotiza tu cambio de dólares" width={125} height={125} />
            </div>
            <div className={styles.StepInfo}>
              <span>Paso 1</span>
              <h3>Cotiza tu cambio</h3>
              <p>Ingresa el monto que vas a enviar y calcula cuánto vas a recibir. Comienza tu operación.</p>
            </div>
          </Card>
          <Card className={styles.StepCard}>
            <span className={styles.Step}>Paso 2</span>
            <div className={styles.StepImage}>
              <Image src="/images/steps/step-2.svg" alt="Cotiza tu cambio de dólares" width={125} height={125} />
            </div>
            <div className={styles.StepInfo}>
              <span>Paso 2</span>
              <h3>Selecciona tus cuentas</h3>
              <p>Selecciona el banco desde donde envías y la cuenta donde recibirás tu cambio.</p>
            </div>
          </Card>
          <Card className={styles.StepCard}>
            <span className={styles.Step}>Paso 3</span>
            <div className={styles.StepImage}>
              <Image src="/images/steps/step-3.svg" alt="Cotiza tu cambio de dólares" width={125} height={125} />
            </div>
            <div className={styles.StepInfo}>
              <span>Paso 3</span>
              <h3>Transfiere</h3>
              <p>Transfiere a Instakash desde la app de tu banco e ingresa el número de transferencia en nuestra app.</p>
            </div>
          </Card>
          <Card className={styles.StepCard}>
            <span className={styles.Step}>Paso 4</span>
            <div className={styles.StepImage}>
              <Image src="/images/steps/step-4.svg" alt="Cotiza tu cambio de dólares" width={125} height={125} />
            </div>
            <div className={styles.StepInfo}>
              <span>Paso 4</span>
              <h3>Recibe</h3>
              <p>Recibe tu cambio en la cuenta que seleccionaste en el paso 2. Y sigue cambiando con Instakash.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Steps;
