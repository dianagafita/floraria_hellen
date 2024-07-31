// import classes from "./a.module.css";
// import Link from "next/link";

// export default function Categories() {
//   return (
//     <section className={classes.sections}>
//       <h1>CATEGORII</h1>
//       <div className={classes.grid}>
//         <Link href="/events/wedding/bride-bouque" className={classes.item}>
//           <div className={classes["item__details"]}>BUCHETE BUJORI</div>
//         </Link>
//         <Link
//           href="/events/wedding/flowers"
//           className={`${classes.item} ${classes["item--large"]}`}
//         >
//           <div className={classes["item__details"]}>BUCHETE HORTENSII </div>
//         </Link>
//         <Link
//           href="/events/wedding/bride-bouque"
//           className={`${classes.item} ${classes["item--medium"]}`}
//         >
//           <div className={classes["item__details"]}>BUCHETE TRANDAFIRI</div>
//         </Link>

//         <Link
//           href="/events/wedding/bride-bouque"
//           className={`${classes.item} ${classes["item--medium"]}`}
//         >
//           <div className={classes["item__details"]}>BUCHETE TRANDAFIRI</div>
//         </Link>
//       </div>
//     </section>
//   );
// }
import { SIDENAV_ITEMS } from "@/constants";
import classes from "./a.module.css";
import Link from "next/link";

export default function Categories({ type }) {
  const data = SIDENAV_ITEMS.find((item) => item.path === `/${type}`);

  if (!data) {
    return null;
  }

  return (
    <section className={classes.sections}>
      <h1>{data.title}</h1>
      <div className={classes.grid}>
        {data.subMenuItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.path}
            className={`${classes.item} ${
              idx === 1
                ? classes["item--large"]
                : idx > 1
                ? classes["item--medium"]
                : ""
            }`}
          >
            <div className={classes["item__details"]}>{item.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
