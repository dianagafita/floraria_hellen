export const SIDENAV_ITEMS = [
  {
    title: "PLANTE",
    path: "/plants",
  },

  {
    title: "BUCHETE FLORI",
    path: "/flower-bouquets",
    submenu: true,
    subMenuItems: [
      { title: "Buchet de trandafiri", path: "/flower-bouquets/roses" },
      { title: "Buchet de lalele", path: "/flower-bouquets/tulips" },
      { title: "Buchet de hortensii", path: "/flower-bouquets/hortensia" },
      { title: "Buchet de bujori", path: "/flower-bouquets/privacy" },
    ],
  },
  {
    title: "ARANJAMENTE FLORALE",
    path: "/floral-arrangements",
    submenu: true,
    subMenuItems: [
      { title: "Cutie cu trandafiri", path: "/floral-arrangements/roses" },
      { title: "Cutie cu lisianthus", path: "/floral-arrangements/lisianthus" },
    ],
  },
  {
    title: "OCAZII SPECIALE",
    path: "/special-ocasions",
    submenu: true,
    subMenuItems: [
      { title: "Flori de Craciun", path: "/special-ocasions/christman" },
      {
        title: "Flori de Sf. Valentin",
        path: "/special-ocasions/sf-valentine",
      },
      { title: "Flori de 1 si 8 Martie", path: "/special-ocasions/march" },
      { title: "Flori de Paste", path: "/special-ocasions/easter" },
    ],
  },

  {
    title: "EVENIMENTE",
    path: "/events",
    submenu: true,
    subMenuItems: [
      {
        title: "BOTEZ",
        path: "/events/christening",
        subMenuItemsMenu: [
          { title: "Aranjamente florale", path: "/christening/flowers" },
          { title: "Aranjamente cristelnita", path: "/christening/cr" },
          {
            title: "Lumanari de botez cu flori naturale ",
            path: "/christening/candles",
          },
        ],
      },

      {
        title: "NUNTA",
        path: "/events/wedding",
        subMenuItemsMenu: [
          { title: "Aranjamente florale", path: "/events/wedding/flowers" },
          {
            title: "Buchet de mireasa",
            path: "/events/wedding/graphic-design",
          },
          {
            title: "Lumanari de biserica cu flori naturale",
            path: "/events/wedding/graphic-design",
          },
          {
            title: "Corsaj, cocarede, bratari si coronite",
            path: "/events/wedding/graphic-design",
          },
          {
            title: "Aranjament masa oficiala",
            path: "/events/wedding/graphic-design",
          },
          { title: "Aranjamente sala", path: "/events/wedding/graphic-design" },

          { title: "Photo corner", path: "/events/wedding/graphic-design" },
          {
            title: "Fantana de ciocolata",
            path: "/events/wedding/graphic-design",
          },
        ],
      },
    ],
  },
  {
    title: "COROANE FUNERARE",
    path: "/funeral-wreaths",
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/projects" },
      { title: "Web Design", path: "/projects/web-design" },
      { title: "Graphic Design", path: "/projects/graphic-design" },
    ],
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
];

export const languagesLong = [
  // { label: `Română`, value: "/auto/ro" },
  { label: `Română`, value: "/auto/ro" },

  { label: "English", value: "/auto/en" },
];
export const languagesShort = [
  // { label: `Română`, value: "/auto/ro" },
  { label: `Ro`, value: "/auto/ro" },

  { label: "En", value: "/auto/en" },
];

export const PROFILE_MENU = [
  {
    href: "/profile/personal-data",
    title: "INFORMATII CONT ",
  },
  {
    href: "/profile/orders",
    title: "COMENZI",
  },
  // {
  //   href: "/profile/adresses",
  //   title: "Adrese ",
  // },
  // {
  //   href: "/profile/cards",
  //   title: "Cardurile mele",
  // },
];

import immg from "./components/main-page/1.jpeg";
export const CAROUSEL_IMAGES = [
  {
    src: { immg },
  },
  {
    src: { immg },
  },
  {
    src: { immg },
  },
];

export const FOOTER_MENU = [
  { title: "Contact", href: "contact" },
  { title: "Livrare", href: "delivery" },

  { title: "Despre noi", href: "about" },
  { title: "Termeni si conditii", href: "terms-conditions" },
  { title: "Politica de confidentialitate", href: "politics" },
];

import img from "@/components/items/BUJORI.jpeg";
import img1 from "@/components/items/CRIZANTEME.jpg";
import img2 from "@/components/items/2.jpeg";
import img3 from "@/components/items/3.jpeg";
import img4 from "@/components/items/4.jpeg";
import img5 from "@/components/items/5.jpeg";
import img6 from "@/components/items/6.jpeg";
import img7 from "@/components/items/HORTENSII.jpg";
import img8 from "@/components/items/8.jpeg";
import img9 from "@/components/items/TRANDAFIRI.jpg";

export const BUCHET_MENU = [
  {
    image: img,
    title: "BUCHET BUJORI",
  },
  {
    image: img1,
    title: "BUCHET CRIZANTEME",
  },
  {
    image: img8,
    title: "BUCHET LISIANTHUS",
  },
  {
    image: img5,
    title: "BUCHET LALELE",
  },
  {
    image: img9,
    title: "BUCHET TRANDAFIRI",
  },
  {
    image: img7,
    title: "BUCHET HORTENSII",
  },
];

export const SORT_ITEMS = [
  {
    title: "Recomandare",
  },
  {
    title: "Alfabetic, A-Z",
  },
  {
    title: "Alfabetic, Z-A",
  },

  {
    title: "Pret, de la mic la mare",
  },
  {
    title: "Pret, de la mare la mic",
  },
];
