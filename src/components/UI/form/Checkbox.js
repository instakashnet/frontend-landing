const Checkbox = ({ name, value, children, ...rest }) => {
  return (
    <div className='flex items-start my-6'>
      <input type='checkbox' className='mt-2' name={name} id={name} value={value} {...rest} />
      <label htmlFor={name} className='ml-3 text-sm'>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
