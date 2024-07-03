import classes from "./a.module.css";
import Link from "next/link";

export default function Categories() {
  return (
    <section className={classes.sections}>
      <h1>CATEGORII</h1>
      <div className={classes.grid}>
        <Link href="/events/wedding/bride-bouque" className={classes.item}>
          <div className={classes["item__details"]}>BUCHETE BUJORI</div>
        </Link>
        <Link
          href="/events/wedding/flowers"
          className={`${classes.item} ${classes["item--large"]}`}
        >
          <div className={classes["item__details"]}>BUCHETE HORTENSII </div>
        </Link>
        <Link
          href="/events/wedding/bride-bouque"
          className={`${classes.item} ${classes["item--medium"]}`}
        >
          <div className={classes["item__details"]}>BUCHETE TRANDAFIRI</div>
        </Link>

        <Link
          href="/events/wedding/bride-bouque"
          className={`${classes.item} ${classes["item--medium"]}`}
        >
          <div className={classes["item__details"]}>BUCHETE TRANDAFIRI</div>
        </Link>
      </div>
    </section>
  );
}
