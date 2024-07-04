import Button from "@/components/util/button";
import Input from "@/components/util/input";
import Title from "@/components/util/title";
import React from "react";

export default function page({ currentDate }) {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Title>OFERTA </Title>
      <form className="w-[70%] items-center flex flex-col">
        <div className="flex w-full justify-end">
          <Input name="requestOfferFullName" label="NUME COMPLET" />
          <Input name="requestOfferPhone" label="TELEFON" />
        </div>
        <div className="flex w-full">
          <Input name="requestOfferEamil" label="E-MAIL" />
          <Input
            type="date"
            name="requestOfferDate"
            dateType="offer"
            label="DATA EVENIMENTULUI"
          />{" "}
        </div>
        <div className="flex w-full justify-between">
          <Input
            name="requestOfferEvent"
            type="select"
            options={[{ label: "NUNTA" }, { label: "BOTEZ" }]}
            label="TIP EVENIMENT"
          />
          <Input
            type="number"
            name="requestOfferNrInvitati"
            label="BUGET MAXIM"
          />
          <Input
            type="number"
            name="requestOfferNrInvitati"
            label="NUMAR INVITATI"
          />
          <Input type="number" name="requestOfferNrMese" label="NUMAR MESE" />
        </div>
        <Input
          type="textarea"
          name="requestOfferDetails"
          label="MAI MULTE DETALII"
        />
        <Input
          name="requestOfferProductID"
          label="CE PRODUSE VA INTERESEAZA?(ID-ul)"
        />
        <Button moreStyle="px-5 my-20">CERE OFERTA</Button>
      </form>
      {currentDate}
    </div>
  );
}
