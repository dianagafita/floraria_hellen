import React from "react";
import Button from "../util/button";
import Link from "next/link";
import MapComponent from "./map";

export default function MapCard() {
  return (
    <div className="flex justify-end">
      <div className=" flex items-center w-[50%] m-2 shadow-2xl p-7 ">
        <div className=" flex flex-col text-sm w-[230px] ">
          <span className="font-[400] mb-1">
            Adresa:
            <span className="font-[200]">
              {" "}
              Bulevardul Bucovina 5, Gura Humorului 725300, Suceava
            </span>
          </span>
          <span className="font-[400] mb-1">
            Program:<span className="font-[200]"> Luni-Duminica</span>{" "}
          </span>
          <span className="font-[400] mb-1">
            Interval orar:<span className="font-[200]"> 08:00-20:00</span>{" "}
          </span>
          <span className="font-[400] mb-1">
            Telefon:<span className="font-[200]"> 064 - 638 - 990</span>{" "}
          </span>
          <span className="font-[400]">
            Email:
            <span className="font-[200]"> gafita.diana12@gmail.com</span>{" "}
          </span>
          <Button moreStyle="m-6">
            <Link
              className
              href="https://www.google.com/maps/place/Floraria+Hellen/@47.5547514,25.889537,17z/data=!4m15!1m8!3m7!1s0x4735a8d7b519ce97:0x60fd1d8ab37a58d8!2sBulevardul+Bucovina+5,+Gura+Humorului+725300!3b1!8m2!3d47.5547514!4d25.8921173!16s%2Fg%2F11fwt81t7r!3m5!1s0x4735a8d76e192d33:0xd5f11d10b121ccde!8m2!3d47.5547159!4d25.8912127!16s%2Fg%2F11f1zl8znb?entry=ttu"
            >
              Navigheaza la locatie
            </Link>
          </Button>
        </div>
        <div className="h-[350px] w-[400px] mx-6  shadow border ">
          <MapComponent address="Bulevardul Bucovina 5, Gura Humorului 725300" />
        </div>
      </div>
    </div>
  );
}
