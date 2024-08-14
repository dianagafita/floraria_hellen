import React from "react";
import Button from "../util/button";
import Link from "next/link";
import MapComponent from "./map";
import Title from "../util/title";

export default function MapCard() {
  return (
    <div className=" mt-10 text-center">
      <Title moreStyle="font-[300] mb-20 text-center">CONTACT</Title>
      <div className="flex flex-col-reverse md:flex-row  items-center justify-between md:justify-center w-full  p-10   ">
        <div className=" flex flex-col  text-start text-sm w-[230px] ">
          <span className="font-[400] mb-2">
            Adresa:
            <span className="font-[200]">
              {" "}
              Bulevardul Bucovina 5, Gura Humorului 725300, Suceava (Langa Hotel
              Best Western)
            </span>
          </span>
          <span className="font-[400] mb-2">
            Program:<span className="font-[200]"> Luni-Duminica</span>{" "}
          </span>
          <span className="font-[400] mb-2">
            Interval orar:<span className="font-[200]"> 08:00-20:00</span>{" "}
          </span>
          <span className="font-[400] mb-2">
            Telefon:<span className="font-[200]"> 064 - 638 - 990</span>{" "}
          </span>
          <span className="font-[400]">
            Email:
            <span className="font-[200]"> proparty10@gmail.com</span>{" "}
          </span>
          <Link href="https://www.google.com/maps/place/Floraria+Hellen/@47.5547514,25.889537,17z/data=!4m15!1m8!3m7!1s0x4735a8d7b519ce97:0x60fd1d8ab37a58d8!2sBulevardul+Bucovina+5,+Gura+Humorului+725300!3b1!8m2!3d47.5547514!4d25.8921173!16s%2Fg%2F11fwt81t7r!3m5!1s0x4735a8d76e192d33:0xd5f11d10b121ccde!8m2!3d47.5547159!4d25.8912127!16s%2Fg%2F11f1zl8znb?entry=ttu">
            <Button moreStyle="my-6 ml-4 px-3 mr-[50px]">
              Navigheaza la locatie
            </Button>
          </Link>
        </div>
        <div className="mb-20 h-[350px] w-[400px]  l-6 md:ml-20  border shadow-md">
          <MapComponent address="Bulevardul Bucovina 5, Gura Humorului 725300" />
        </div>
      </div>
    </div>
  );
}
