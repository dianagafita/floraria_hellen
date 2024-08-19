// import Button from "@/components/util/button";
// import Input from "@/components/util/input";
// import Title from "@/components/util/title";
// import React from "react";

// export default function page({ currentDate }) {
//   return (
//     <div className="w-full flex flex-col items-center mt-10">
//       <Title>OFERTA </Title>
//       <form className="w-[70%] items-center flex flex-col">
//         <div className="flex w-full justify-end">
//           <Input name="requestOfferFullName" label="NUME COMPLET" />
//           <Input name="requestOfferPhone" label="TELEFON" />
//         </div>
//         <div className="flex w-full">
//           <Input name="requestOfferEamil" label="E-MAIL" />
//           <Input
//             type="date"
//             name="requestOfferDate"
//             dateType="offer"
//             label="DATA EVENIMENTULUI"
//           />{" "}
//         </div>
//         <div className="flex w-full justify-between">
//           <Input
//             name="requestOfferEvent"
//             type="select"
//             options={[{ label: "NUNTA" }, { label: "BOTEZ" }]}
//             label="TIP EVENIMENT"
//           />
//           <Input
//             type="number"
//             name="requestOfferNrInvitati"
//             label="BUGET MAXIM"
//           />
//           <Input
//             type="number"
//             name="requestOfferNrInvitati"
//             label="NUMAR INVITATI"
//           />
//           <Input type="number" name="requestOfferNrMese" label="NUMAR MESE" />
//         </div>
//         <Input
//           type="textarea"
//           name="requestOfferDetails"
//           label="MAI MULTE DETALII"
//         />
//         <Input
//           name="requestOfferProductID"
//           label="CE PRODUSE VA INTERESEAZA?(ID-ul)"
//         />
//         <Button moreStyle="px-5 my-20">CERE OFERTA</Button>
//       </form>
//       {currentDate}
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Button from "@/components/util/button";
import Input from "@/components/util/input";
import Title from "@/components/util/title";

export default function Page({ currentDate }) {
  const [formData, setFormData] = useState({
    requestOfferFullName: "",
    requestOfferPhone: "",
    requestOfferEmail: "",
    requestOfferDate: "",
    requestOfferEvent: "nunta", // Default value
    requestOfferNrInvitati: "",
    requestOfferNrMese: "",
    requestOfferDetails: "",
    requestOfferProductID: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("a");
    try {
      const response = await fetch("/api/request-offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Title>OFERTA </Title>
      <form
        className="w-[70%] items-center flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full justify-end">
          <Input
            required
            name="requestOfferFullName"
            label="NUME COMPLET"
            value={formData.requestOfferFullName}
            onChange={handleInputChange}
          />
          <Input
            required
            type="tel"
            pattern="[0-9]{10}"
            name="requestOfferPhone"
            label="TELEFON"
            value={formData.requestOfferPhone}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full">
          <Input
            required
            name="requestOfferEmail"
            label="E-MAIL"
            value={formData.requestOfferEmail}
            onChange={handleInputChange}
          />
          <Input
            required
            type="date"
            name="requestOfferDate"
            label="DATA EVENIMENTULUI"
            value={formData.requestOfferDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full justify-between  lg:flex-row">
          <div className="flex w-full justify-between">
            <Input
              required
              name="requestOfferEvent"
              type="select"
              options={[{ label: "NUNTA" }, { label: "BOTEZ" }]}
              label="TIP EVENIMENT"
              value={formData.requestOfferEvent}
              onChange={handleInputChange}
            />
            <Input
              required
              type="number"
              name="requestOfferNrInvitati"
              label="BUGET MAXIM (LEI)"
              more="w-full"
              value={formData.requestOfferNrInvitati}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-full justify-between">
            <Input
              required
              more="w-full"
              type="number"
              name="requestOfferNrInvitati"
              label="NUMAR INVITATI"
              value={formData.requestOfferNrInvitati}
              onChange={handleInputChange}
            />
            <Input
              required
              more="w-full"
              type="number"
              name="requestOfferNrMese"
              label="NUMAR MESE"
              value={formData.requestOfferNrMese}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Input
          required
          type="textarea"
          name="requestOfferDetails"
          label="MAI MULTE DETALII"
          value={formData.requestOfferDetails}
          onChange={handleInputChange}
        />
        <Input
          required
          name="requestOfferProductID"
          label="CE PRODUSE VA INTERESEAZA?(ID-ul)"
          value={formData.requestOfferProductID}
          onChange={handleInputChange}
        />
        <Button type="submit" moreStyle="px-5 my-20">
          CERE OFERTA
        </Button>
      </form>
      {currentDate}
    </div>
  );
}
