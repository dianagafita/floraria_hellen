"use client";
import { createContext, useContext, useState } from "react";

export const PaymentContext = createContext();
export const usePayment = () => {
  return useContext(PaymentContext);
};
export const PaymentProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState(null);

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
};
