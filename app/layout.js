import { CartProvider } from "@/context/cart-context";
import "./globals.css";

export default function RootLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
