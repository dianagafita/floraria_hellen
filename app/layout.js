import { CartProvider } from "@/context/cart-context";
import "./globals.css";
import { PaymentProvider } from "@/context/payment-context";

export default function RootLayout({ children }) {
  return (
    // <PaymentProvider>
    <CartProvider>{children}</CartProvider>
    // </PaymentProvider>
  );
}
