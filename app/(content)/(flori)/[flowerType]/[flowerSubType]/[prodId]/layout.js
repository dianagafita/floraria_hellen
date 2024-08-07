import Image from "next/legacy/image";
import imgs from "./IMG_6947.jpeg";
import { CartProvider } from "@/context/cart-context";
export default async function RosesPageLayout({ children }) {
  return <main className="flex flex-col ">{children}</main>;
}
