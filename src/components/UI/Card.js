import cls from "classnames";

import styles from "../../../styles/UI.module.scss";

const Card = ({ children, className }) => {
  return <div className={cls(styles.card, className ?? "")}>{children}</div>;
};

export default Card;
