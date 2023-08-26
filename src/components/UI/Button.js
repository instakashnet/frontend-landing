import cls from "classnames";
import styles from "./Button.module.scss";

const Button = ({ type, className = "", children, variant = "primary", ...rest }) => {
  return (
    <button type={type} className={cls(styles.button, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
