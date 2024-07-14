"use client";

import Link from "next/link";
import { PROFILE_MENU } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserById } from "@/app/api/store/user";
import { logout } from "@/actions/auth-actions";

export default function ProfileMenuDrawer() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState("1");
  const [fetchedUser, setFetchedUser] = useState();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const response = await fetch("/api/valid");
      const data = await response.json();
      if (data.user) {
        const user = await fetch(`/api/user/${data.user.id}`);
        const userData = await user.json();

        setFetchedUser(userData);
      }
      setIsAuthenticated(data);
    };

    fetchAuthStatus();
  }, []);

  return (
    <div
      className={`top-[10.5rem] border-y z-10 border-gray-300 shadow-md md:w-full`}
    >
      <div className="flex justify-center w-full">
        <span className="flex font-[200] items-center text-[12px] md:text-[13px] ">
          {isAuthenticated.user && (
            <>
              {" "}
              <Link
                href="/profile"
                className={`${
                  "/profile" === pathname ? "bg-[#f5f5f5]" : ""
                } text-transform: uppercase border-l p-4 border-[#f5f5g5] px-6`}
              >
                {fetchedUser["second_name"]}
              </Link>
              {PROFILE_MENU.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex justify-between px-4 p-4 ${
                    item.href === pathname ? "bg-[#f5f5f5]" : ""
                  } ${
                    item.title === "INFORMATII CONT "
                      ? "border-x border-[#f5f5g5]"
                      : "border-r border-[#f5f5g5]"
                  } p-4`}
                >
                  {item.title}
                </Link>
              ))}{" "}
              {isAuthenticated.user && (
                <form action={logout}>
                  <button className="border-r border-[#f5f5g5] px-6 p-4">
                    DECONECTARE
                  </button>
                </form>
              )}
            </>
          )}
        </span>
      </div>
    </div>
  );
}
