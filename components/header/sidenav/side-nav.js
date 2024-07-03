import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/constants";
import { motion } from "framer-motion";
import { useMediaQuery } from "rsuite/esm/useMediaQuery/useMediaQuery";
import MobileSearch from "../searchbar/mobile-search";

export default function SideNav({ isSearching }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isSideNavHovered, setIsSideNavHovered] = useState(false); // State to track SideNav hover
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false); // State to track FullWidthSubMenu hover
  const isMdScreen = useMediaQuery("(min-width: 767px)");
  const pathname = usePathname();

  // Close submenu when hovering off both SideNav and FullWidthSubMenu
  useEffect(() => {
    if (!isSideNavHovered && !isSubMenuHovered) {
      setActiveSubMenu(null);
    }
  }, [isSideNavHovered, isSubMenuHovered]);

  return (
    <>
      <motion.div
        className="w-full bg-transparent flex pb-3 border-b md:flex hidden flex-col"
        onMouseEnter={() => setIsSideNavHovered(true)} // Set hover true on SideNav hover
        onMouseLeave={() => setIsSideNavHovered(false)} // Set hover false on SideNav hover out
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-row items-center">
            {SIDENAV_ITEMS.map((item, idx) => (
              <div key={idx} className="lg:mx-6">
                <MenuItem
                  item={item}
                  setActiveSubMenu={setActiveSubMenu}
                  activeSubMenu={activeSubMenu}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isSearching ? "auto" : 0 }}
        transition={{ type: "spring", stiffness: 1000, damping: 100 }}
        className="overflow-hidden w-full md:hidden flex flex-col"
      >
        <MobileSearch />
      </motion.div>
      {activeSubMenu && (
        <FullWidthSubMenu
          subMenuItems={activeSubMenu.subMenuItems}
          onClose={() => setActiveSubMenu(null)}
          onMouseEnter={() => setIsSubMenuHovered(true)} // Set hover true on FullWidthSubMenu hover
          onMouseLeave={() => setIsSubMenuHovered(false)} // Set hover false on FullWidthSubMenu hover out
        />
      )}
    </>
  );
}

function MenuItem({ item, setActiveSubMenu, activeSubMenu }) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isActive = activeSubMenu?.path === item.path;

  const handleMouseEnter = () => {
    setActiveSubMenu(item);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative font-[200] text-[14px] mx-2 my-2">
      {item.submenu ? (
        <div
          className={`relative flex flex-row items-center w-full justify-between whitespace-nowrap ${
            isActive
              ? "underline decoration-[rgb(116,10,10)] underline-offset-4 decoration-[1.4px]"
              : "link-underline link-underline-black"
          }`}
          style={{ overflow: "hidden" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row space-x-4 items-center">
            {item.icon}
            <Link href={item.path} className="text-l flex relative">
              {item.title}
            </Link>
          </div>
        </div>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center ${
            item.path === pathname
              ? "underline decoration-[rgb(116,10,10)] underline-offset-4 decoration-[1.4px]"
              : "link-underline link-underline-black"
          }`}
        >
          {item.icon}
          <span className="text-l flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
}

export function FullWidthSubMenu({
  subMenuItems,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <motion.div
      initial={{ y: "-10%" }} // start offscreen at the top
      animate={{ y: "0%" }} // slide down to its final position
      exit={{ y: "10%" }} // slide back up when exiting
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
      className="absolute top-full left-0 w-full bg-white z-50 p-2 overflow-y-auto"
      onMouseEnter={onMouseEnter} // Propagate hover events to parent component
      onMouseLeave={onMouseLeave} // Propagate hover events to parent component
    >
      <div className="flex justify-center">
        {subMenuItems?.map((subItem, idx) => (
          <SubMenu key={idx} subItem={subItem} onClose={onClose} />
        ))}
      </div>
    </motion.div>
  );
}

function SubMenu({ subItem, onClose }) {
  const pathname = usePathname();

  const handleClick = () => {
    onClose(); // Close the FullWidthSubMenu on click
  };

  return (
    <div className="hidden md:flex items-center ">
      <div className="text-center mb-2 mr-3 mx-20">
        <Link
          href={subItem.path}
          className={` text-[14px] font-[400] ${
            subItem.path === pathname
              ? "underline decoration-[rgb(116,10,10)] underline-offset-4 decoration-[1.4px]"
              : "link-underline link-underline-black"
          }`}
          onClick={handleClick} // Close submenu when clicking on the link
        >
          {subItem.title}
        </Link>
      </div>
      {subItem.subMenuItemsMenu && (
        <div className="border-l px-3 flex flex-col my-5 ">
          {subItem.subMenuItemsMenu.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.path}
              className={`m-1 text-sm font-[100]   ${
                menuItem.path === pathname
                  ? "font-semibold underline decoration-[rgb(116,10,10)] underline-offset-4 decoration-[1.5px]"
                  : "link-underline link-underline-black"
              }`}
              onClick={handleClick} // Close submenu when clicking on the link
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
