import { SIDENAV_ITEMS } from "@/constants";

// export function getTitleOfPath(flowerType, flowerSubType) {
//   let title;
//   if (flowerType === "buchete") {
//     title = "BUCHETE FLORI";
//   } else if (flowerType === "aranjamente") {
//     title = "ARANJAMENTE FLORI";
//   } else if (flowerType === "ocazii-speciale") {
//     title = "OCAZII SPECIALE";
//   }

//   let subTitle;
//   if (flowerSubType === "buchete-flori-uscate") {
//     subTitle = "Buchete de flori uscate";
//   } else if (flowerSubType === "buchete-trandafiri") {
//     subTitle = "Buchete de trandafiri";
//   } else if (flowerSubType === "buchete-flori-primavara") {
//     subTitle = "Buchete flori de primavara";
//   } else if (flowerSubType === "buchete-flori-vara") {
//     subTitle = "Buchete flori de vara";
//   } else if (flowerSubType === "buchete-flori-toamna") {
//     subTitle = "Buchete flori de toamna";
//   } else if (flowerSubType === "aranjamente-nou-nascut") {
//     subTitle = "Aranjamente nou-nascut";
//   } else if (flowerSubType === "aranjamente-flori-uscate") {
//     subTitle = "Aranjamente cu flori uscate";
//   } else if (flowerSubType === "aranjamente-trandafiri") {
//     subTitle = "Aranjamente cu trandafiri";
//   } else if (flowerSubType === "aranjamente-flori-primavara") {
//     subTitle = "Aranjamente flori de primavara";
//   } else if (flowerSubType === "aranjamente-flori-vara") {
//     subTitle = "Aranjamente flori de vara";
//   } else if (flowerSubType === "aranjamente-flori-toamna") {
//     subTitle = "Aranjamente flori de toamna";
//   } else if (flowerSubType === "craciun") {
//     subTitle = "Flori de Craciun";
//   } else if (flowerSubType === "sf-valentin") {
//     subTitle = "Flori de Sf. Valentin";
//   } else if (flowerSubType === "martie") {
//     subTitle = "Flori de 1 si 8 Martie";
//   }
//   return { title, subTitle };
// }
// Utility function to get the title and subtitle dynamically based on flowerType and flowerSubType
// export function getTitleOfPath(flowerType, flowerSubType) {
//   let title = "";
//   let subTitle = "";

//   // Loop through the SIDENAV_ITEMS
//   SIDENAV_ITEMS.forEach((item) => {
//     // Check if the flowerType matches the item's path (e.g., '/buchete')
//     if (item.path.includes(flowerType)) {
//       title = item.title; // Set the title to the matched item's title

//       // If the item has submenu items, search for the matching flowerSubType
//       if (item.submenu && item.subMenuItems) {
//         item.subMenuItems.forEach((subItem) => {
//           if (subItem.path.includes(flowerSubType)) {
//             subTitle = subItem.title; // Set the subtitle to the matched subItem's title
//           }
//         });
//       }
//     }
//   });

//   // Fallback for undefined subtitles, if no match was found
//   subTitle = subTitle || "Unknown Subtype";

//   return { title, subTitle };
// }
// Example SIDENAV_ITEMS structure

export function getTitleOfPath(flowerType, flowerSubType, nestedSubMenuType) {
  let title = "";
  let subTitle = "";
  let nestedSubTitle = "";

  // Helper function to search through menu items and their submenus
  function findTitles(menuItems) {
    for (const item of menuItems) {
      // Check if the item path matches the flowerType
      if (item.path === flowerType) {
        title = item.title; // Set the title to the matched item's title

        // Check subMenuItems if this item has submenu
        if (item.submenu && item.subMenuItems) {
          for (const subItem of item.subMenuItems) {
            if (subItem.path === flowerSubType) {
              subTitle = subItem.title; // Set the subtitle to the matched subItem's title

              // Check nestedSubMenuItemsMenu if this subItem has further submenus
              if (subItem.subMenuItemsMenu) {
                for (const nestedSubItem of subItem.subMenuItemsMenu) {
                  if (nestedSubItem.path === nestedSubMenuType) {
                    nestedSubTitle = nestedSubItem.title; // Update nested subtitle if found
                  }
                }
              }
            }
          }
        }

        // Check nested subMenuItemsMenu in the main item if available
        if (item.subMenuItemsMenu) {
          for (const subItem of item.subMenuItemsMenu) {
            if (subItem.path === flowerSubType) {
              subTitle = subItem.title; // Set the nested subtitle to the matched subItem's title

              // Check further nestedSubMenuItemsMenu
              if (subItem.subMenuItemsMenu) {
                for (const nestedSubItem of subItem.subMenuItemsMenu) {
                  if (nestedSubItem.path === nestedSubMenuType) {
                    nestedSubTitle = nestedSubItem.title; // Update nested subtitle if found
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Start searching through the main menu items
  findTitles(SIDENAV_ITEMS);

  // Fallback for undefined subtitles, if no match was found
  subTitle = subTitle || "Unknown Subtype";
  nestedSubTitle = nestedSubTitle || "Unknown Nested Subtype";

  return { title, subTitle, nestedSubTitle };
}
