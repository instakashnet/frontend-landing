import cls from "classnames";
import Image from "next/legacy/image";
import styles from "./swipe.module.scss";

const Swipe = ({ onClick, type }) => {
  return (
    <div className={styles.SwipeWrapper}>
      <button type="button" onClick={onClick} className={cls(styles.SwipeButton, type === "sell" ? "" : styles.SwipeRotated)}>
        <div className={styles.SwipeIcon}>
          <Image src="/images/icons/circleArrows.svg" layout="fill" objectFit="contain" alt="cambia dólares online" />
        </div>
      </button>
    </div>
  );
};

export default Swipe;
