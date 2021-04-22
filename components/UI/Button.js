import styles from '../../styles/UI.module.scss';

const Button = ({ type, className, children, ...rest }) => {
  return (
    <button type={type} className={`${styles.button} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
