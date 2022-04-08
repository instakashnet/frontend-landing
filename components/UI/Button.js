import cls from "classnames";
import styles from "./Button.module.scss";

const Button = ({ type, className, children, ...rest }) => {
  return (
    <button type={type} className={cls(styles.Button, className || "")} {...rest}>
      {children}
    </button>
  );
};

export default Button;
