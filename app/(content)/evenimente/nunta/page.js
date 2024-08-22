import React from "react";
import classes from "./a.module.css";
import imgs from "./smoke.jpeg";
import Image from "next/image";
import { TitleByPath } from "@/components/util/getPathTitle";
import Link from "next/link";

const paths = [
  { href: "/events", title: "EVENIMENTE", style: "text-black-300/75" },
  { href: "/events/wedding", title: "NUNTA", style: "text-black" },
];

export default function Page() {
  return (
    <div>
      <div className="relative h-[335px] w-full">
        <Image src={imgs} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-end text-black text-center bg-black bg-opacity-50">
          <span className="bg-white py-10 px-20 mr-20 flex flex-col text-2xl">
            NUNTA{" "}
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

      {/* Page Info Section */}
      <TitleByPath paths={paths} />
      <section className={classes.sections}>
        <h1>CATEGORII</h1>
        <div className={classes.grid}>
          <Link href="/events/wedding/buchete-mireasa" className={classes.item}>
            <div className={classes["item__details"]}>BUCHETE DE MIREASA</div>
          </Link>
          <Link
            href="/events/wedding/aranjamente-masa"
            className={`${classes.item} ${classes["item--large"]}`}
          >
            <div className={classes["item__details"]}>
              ARANJAMENTE FLORALE DE MASA
            </div>
          </Link>
          <Link
            href="/events/wedding/lumanari-biserica"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>
              INTRARE IN SALA SI COVOR ROSU
            </div>
          </Link>
          <Link
            href="/events/wedding/lumanari-biserica"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>BISERICA</div>
          </Link>
          <Link
            href="/events/wedding/lumanari-biserica"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>
              LUMANARI DE BISERICA CU FLORI NATURALE
            </div>
          </Link>
          <Link
            href="/events/wedding/lumanari-biserica"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>CUNUNIE CIVILA </div>
          </Link>{" "}
          <Link
            href="/events/wedding/masa-oficiala"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>
              ARANJAMENTE MASA OFICIALA
            </div>
          </Link>
          <Link
            href="/events/wedding/corsaje-cocarde-coronite-bratari"
            className={`${classes.item} ${classes["item--large"]}`}
          >
            <div className={classes["item__details"]}>
              CORSAJE, COCARDE, CORONITE SI BRATARI
            </div>
          </Link>
          <Link
            href="/events/wedding/photo-corner"
            className={`${classes.item} ${classes["item--full"]}`}
          >
            <div className={classes["item__details"]}>PHOTO CORNER</div>
          </Link>
          <Link
            href="/events/wedding/ornamente-sali"
            className={`${classes.item} ${classes["item--large"]}`}
          >
            <div className={classes["item__details"]}>SALI</div>
          </Link>
          <Link
            href="/events/wedding/fantana-ciocolata"
            className={classes.item}
          >
            <div className={classes["item__details"]}>FANTANA DE CIOCOLATA</div>
          </Link>
          <Link
            href="/events/wedding/masina-fum"
            className={`${classes.item} ${classes["item--medium"]}`}
          >
            <div className={classes["item__details"]}>MASINA DE FUM</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import "./a.css";
// const GALLERY_DATA = [
//   {
//     stripClass: "one",
//     photos: [
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
//         name: "Kyoto",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg",
//         name: "Halstatt",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg",
//         name: "Peru",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg",
//         name: "Rio",
//       },
//     ],
//   },
//   {
//     stripClass: "two",
//     photos: [
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg",
//         name: "Italy",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg",
//         name: "Osaka",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg",
//         name: "Bali",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg",
//         name: "Paris",
//       },
//     ],
//   },
//   {
//     stripClass: "three",
//     photos: [
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg",
//         name: "Cusco",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg",
//         name: "Rome",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg",
//         name: "Paris",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg",
//         name: "Bali",
//       },
//     ],
//   },
//   {
//     stripClass: "four",
//     photos: [
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg",
//         name: "Milan",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg",
//         name: "Budapest",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg",
//         name: "Vienna",
//       },
//       {
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg",
//         name: "Mexico",
//       },
//     ],
//   },
// ];

// const Gallery = () => {
//   return (
//     <div classNameName="gallery">
//       {GALLERY_DATA.map((strip, index) => (
//         <div
//           key={index}
//           classNameName={`gallery__strip__wrapper gallery__strip ${strip.stripClass}`}
//         >
//           {strip.photos.map((photo, idx) => (
//             <div key={idx} classNameName="photo">
//               <div classNameName="photo__image">
//                 <Image
//                   src={photo.src}
//                   alt={photo.name}
//                   layout="fill"
//                   classNameName="object-cover"
//                 />
//               </div>
//               <div classNameName="photo__name">{photo.name}</div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;
// import React from "react";
// import "./a.css";

// const photos = {
//   one: [
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
//       name: "Kyoto",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg",
//       name: "Halstatt",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg",
//       name: "Peru",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg",
//       name: "Rio",
//     },
//   ],
//   two: [
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg",
//       name: "Italy",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg",
//       name: "Osaka",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg",
//       name: "Bali",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg",
//       name: "Paris",
//     },
//   ],
//   three: [
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg",
//       name: "Cusco",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg",
//       name: "Rome",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg",
//       name: "Paris",
//     },
//     {
//       src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg",
//       name: "Bali",
//     },
//   ],
// };

// const Gallery = () => {
//   return (
//     <div classNameName="gallery">
//       {Object.keys(photos).map((strip) => (
//         <div classNameName="gallery__strip__wrapper" key={strip}>
//           <div classNameName={`gallery__strip ${strip}`}>
//             {photos[strip].map((photo) => (
//               <div classNameName="photo" key={photo.name}>
//                 <div classNameName="photo__image">
//                   <img src={photo.src} alt={photo.name} />
//                 </div>
//                 <div classNameName="photo__name">{photo.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;
