import cls from "classnames";
import styles from "./swipe.module.scss";

const Swipe = ({ onClick, type }) => {
  return (
    <div className={styles.SwipeWrapper}>
      <button type="button" onClick={onClick} className={cls(styles.SwipeButton, type === "sell" ? "" : styles.SwipeRotated)}>
        <img src="/images/icons/circleArrows.svg" atl="swipe" />
      </button>
    </div>
  );
};

export default Swipe;
