import styles from '../../../../styles/UI.module.scss';

const Input = ({ name, value, placeholder, className, type, error, touched, ...rest }) => {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <input type={type} name={name} value={value} placeholder={placeholder} className={error && touched ? styles.error : ''} {...rest} />
      {error && touched && <span className='error-msg'>{error}</span>}
    </div>
  );
};

export default Input;
