import styles from '../../../styles/UI.module.scss';

const Select = ({ name, placeholder, options, value, error, touched, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <select name={name} value={value} className={error && touched ? styles.error : ''} {...rest}>
        <option value='' defaultValue>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <span className='error-msg'>{error}</span>}
    </div>
  );
};

export default Select;
