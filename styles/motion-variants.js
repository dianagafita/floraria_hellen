export const variants_sidenav = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      opacity: { duration: 0.5 },
    },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      opacity: { duration: 0.5 },
    },
  },
};

export const variants_sidenav_mobile = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      opacity: { duration: 0.1 },
    },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      opacity: { duration: 0.1 },
    },
  },
};

export const variants = {
  open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
};

export const variansts_sidenav_items = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

export const variants_sidebar = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
      opacity: { duration: 0.1 },
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
      opacity: { duration: 0.1 },
    },
  },
};

export const variants_sidebar3 = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
      opacity: { duration: 0.1 },
    },
  },
  closed: {
    x: "-500%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 50,
      opacity: { duration: 0.1 },
    },
  },
};
export const variants_sidebar_2 = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    transition: {
      type: "spring",
      stiffness: 900,
      damping: 40,
    },
  },
};

export const variants_menu_item = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
export const variants_menu_item2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
// export const variants_sub_menu = {
//   open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
//   closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
// };

export const variants_sub_menu_item = {
  open: {
    y: 0,
    opacity: 1,
    height: "auto",
    transition: {
      y: { stiffness: 100, velocity: 10 },
      duration: 0.3,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    height: 0,
    transition: {
      y: { stiffness: 100 },
      duration: 0.3,
    },
  },
};
