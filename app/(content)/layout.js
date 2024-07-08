import Header from "@/components/header/header";
import MobileHeader from "@/components/header/header-mobile";
import CartModal from "@/components/cart/cart-modal";
import "@/app/globals.css";
import MainFooter from "@/components/footer/main-footer";
import { Providers } from "@/context/provider";
import { CartProvider } from "@/context/cart-context";

export const metadata = {
  title: "Next.js App",
  description: "Generated by create next app",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
        ></script>
      </head>
      <body className="relative">
        <div className="flex flex-col min-h-screen">
          {/* <AuthProvider> */}
          <CartProvider>
            <CartModal />
            <Header />{" "}
            <main className="relative z-1 min-h-[600px]">{children}</main>
          </CartProvider>
          <MainFooter />
          {/* </AuthProvider> */}
        </div>
        <MobileHeader />
      </body>
    </html>
  );
}
