import { useFormik } from "formik";
import React, { useEffect } from "react";
import Button from "../UI/Button";
import Input from "./input.component";
import Rates from "./rates.component";
import Savings from "./savings.component";
import Swipe from "./swipe.component";

const Calculator = ({ rates }) => {
  const formik = useFormik({
    initialValues: { type: "sell", currency_sent: 2, currency_received: 1, amount_sent: 0, amount_received: 0 },
    onSubmit: () => (window.location.href = "https://app.instakash.net"),
  });
  const { setFieldValue } = formik;

  useEffect(() => {
    if (rates.buy > 0 && rates.sell > 0) {
      setFieldValue("amount_sent", (10000).toFixed(2));
      setFieldValue("amount_received", 10000 / rates.sell);
    }
  }, [rates, setFieldValue]);

  const swipeHandler = () => {
    setFieldValue("type", formik.values.type === "buy" ? "sell" : "buy");
    setFieldValue("currency_sent", formik.values.type === "buy" ? 2 : 1);
    setFieldValue("currency_received", formik.values.type === "buy" ? 1 : 2);
    setFieldValue("amount_received", formik.values.type === "buy" ? (formik.values.amount_sent / rates.sell).toFixed(2) : (formik.values.amount_sent * rates.buy).toFixed(2));
  };

  const amountChangeHandler = (e) => {
    const { name, rawValue } = e.target;
    setFieldValue(name, +rawValue);
    const inputName = name === "amount_sent" ? "amount_received" : "amount_sent";

    if (formik.values.type === "buy") setFieldValue(inputName, inputName === "amount_received" ? (+rawValue * rates.buy).toFixed(2) : (+rawValue / rates.buy).toFixed(2));
    if (formik.values.type === "sell") setFieldValue(inputName, inputName === "amount_received" ? (+rawValue / rates.sell).toFixed(2) : (+rawValue * rates.sell).toFixed(2));
  };

  return (
    <>
      <Rates rates={rates} type={formik.values.type} />
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center">
        <div className="relative mb-3 w-full">
          <Input name="amount_sent" label="Envias" currency={formik.values.currency_sent} value={formik.values.amount_sent} onChange={amountChangeHandler} />
          <Swipe onClick={swipeHandler} type={formik.values.type} />
          <Input name="amount_received" label="Recibes" currency={formik.values.currency_received} value={formik.values.amount_received} onChange={amountChangeHandler} />
        </div>
        <Savings type={formik.values.type} receiveAmount={formik.values.amount_received} />
        <Button type="submit" className="w-full" disabled={formik.values.amount_sent === 0}>
          Registrate y Cambia
        </Button>
      </form>
    </>
  );
};

export default Calculator;
