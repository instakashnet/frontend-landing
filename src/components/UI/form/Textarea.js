import styles from '../../../../styles/UI.module.scss';

const Textarea = ({ name, placeholder, error, touched, ...rest }) => {
  return (
    <div className={`${styles.formGroup} mt-6`}>
      <textarea name={name} className={error && touched ? styles.error : ''} placeholder={placeholder} {...rest} rows={9} />
      {error && touched && <span className='error-msg'>{error}</span>}
    </div>
  );
};

export default Textarea;
