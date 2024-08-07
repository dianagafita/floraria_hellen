import { TitleByPath } from "@/components/util/getPathTitle";
import classes from "./a.module.css";
import imgs from "./3.jpeg";

import Image from "next/image";
import Link from "next/link";

const paths = [
  { href: "/events", title: "EVENIMENTE", style: "text-black-300/75" },
  { href: "/events/christening", title: "BOTEZ", style: "text-black" },
];

export default function ChristeningPage() {
  return (
    <div>
      <div className="relative h-[335px] w-full">
        <Image src={imgs} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-end text-black text-center bg-black bg-opacity-50">
          <span className="bg-white py-10 px-20 mr-20 flex flex-col text-2xl">
            BOTEZ{" "}
            <span className="text-[10px] font-[100] text-[#A8A8A8]">
              Flori naturale si proapete
            </span>
            <Link
              href="/request-offer"
              className="text-[13px] font-[100] text-[#606060] hover:text-[#404040] underline underline-offset-2"
            >
              CERE OFERTA
            </Link>
          </span>
        </div>
      </div>
      <TitleByPath paths={paths} />

      <section className={classes.section2}>
        <h1>CATEGORII</h1>
        <div className={classes.grid}>
          <div className={`${classes.item} ${classes["item--large"]}`}>
            <div className={classes["item__details"]}>ARANJAMENTE FLORALE</div>
          </div>
          <div className={`${classes.item} ${classes["item--medium"]}`}>
            <div className={classes["item__details"]}>
              ARANJAMENTE CRISTELNITA
            </div>
          </div>
          <div className={`${classes.item} ${classes["item--large"]}`}>
            <div className={classes["item__details"]}>LUMANARI BOTEZ</div>
          </div>
          <div className={`${classes.item} ${classes["item--large"]}`}>
            <div className={classes["item__details"]}>SALI</div>
          </div>
          <div className={classes.item}>
            <div className={classes["item__details"]}>FANTANA DE CIOCOLATA</div>
          </div>
        </div>
      </section>
    </div>
  );
}
