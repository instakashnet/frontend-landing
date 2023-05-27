import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { event } from '../../utils/fbpixel';
import Button from '../UI/Button';
import styles from './Calculator.module.scss';
import Input from './Input';
import Rates from './Rates';
import Savings from './Savings';
import Swipe from './Swipe';

const Calculator = () => {
  const [rates, setRates] = useState({ buy: 0, sell: 0 }),
    [isLoading, setIsLoading] = useState(true);

  const formik = useFormik({
    initialValues: { type: 'sell', currency_sent: 2, currency_received: 1, amount_sent: 0, amount_received: 0 },
    onSubmit: () => {
      event('Subscribe');
      location.href = 'https://app.instakash.net/register';
    },
  });
  const { setFieldValue } = formik;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://api.instakash.net/exchange-service/api/v1/client/rates'),
          data = await res.json();

        setRates({ ...data[0], buy: +data[0].buy, sell: +data[0].sell });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (rates.buy > 0 && rates.sell > 0) {
      setFieldValue('amount_sent', (10000).toFixed(2));
      setFieldValue('amount_received', 10000 / rates.sell);
    }
  }, [rates, setFieldValue]);

  const swipeHandler = () => {
    setFieldValue('type', formik.values.type === 'buy' ? 'sell' : 'buy');
    setFieldValue('currency_sent', formik.values.type === 'buy' ? 2 : 1);
    setFieldValue('currency_received', formik.values.type === 'buy' ? 1 : 2);
    setFieldValue('amount_received', formik.values.type === 'buy' ? (formik.values.amount_sent / rates.sell).toFixed(2) : (formik.values.amount_sent * rates.buy).toFixed(2));
  };

  const amountChangeHandler = (e) => {
    const { name, rawValue } = e.target;
    setFieldValue(name, +rawValue);
    const inputName = name === 'amount_sent' ? 'amount_received' : 'amount_sent';

    if (formik.values.type === 'buy') setFieldValue(inputName, inputName === 'amount_received' ? (+rawValue * rates.buy).toFixed(2) : (+rawValue / rates.buy).toFixed(2));
    if (formik.values.type === 'sell') setFieldValue(inputName, inputName === 'amount_received' ? (+rawValue / rates.sell).toFixed(2) : (+rawValue * rates.sell).toFixed(2));
  };

  return (
    <>
      {isLoading ? (
        <div className='mt-2'>
          <PulseLoader color='#0d8284' size={10} />
        </div>
      ) : (
        <Rates rates={rates} type={formik.values.type} />
      )}
      <form onSubmit={formik.handleSubmit} className='flex flex-col items-center justify-center'>
        <div className={styles.FormControl}>
          <Input name='amount_sent' label='Envias' currency={formik.values.currency_sent} value={formik.values.amount_sent} onChange={amountChangeHandler} />
          <Swipe onClick={swipeHandler} type={formik.values.type} />
          <Input name='amount_received' label='Recibes' currency={formik.values.currency_received} value={formik.values.amount_received} onChange={amountChangeHandler} />
        </div>
        <Savings type={formik.values.type} receiveAmount={formik.values.amount_received} />
        <Button type='submit' className={styles.CalculatorButton} disabled={formik.values.amount_sent === 0}>
          Registrate y Cambia
        </Button>
      </form>
    </>
  );
};

export default Calculator;
