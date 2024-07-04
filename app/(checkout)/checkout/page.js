"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import icon from "@/app/icon.png";
import OrderSummary from "../../../components/orders/orderSummary";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLoadScript } from "@react-google-maps/api";
import calculateDistance from "@/components/util/calc";
import Input from "@/components/util/input";
import Button from "@/components/util/button";

export default function CheckoutPage() {
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
  const [shippingFee, setShippingFee] = useState(0);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [distance, setDistance] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [destination, setDestination] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const toggleOrderSummary = () => {
    setIsOrderSummaryOpen(!isOrderSummaryOpen);
  };

  const handleCalculateDistance = async () => {
    const fullAddress = `${street} ${number}, ${city}, Suceava, ${postalCode}`; // Construct full address

    await calculateDistance(fullAddress, setDistance, isLoaded, loadError);

    setIsCalculating(false);

    // Effect to calculate shipping fee whenever distance changes
    if (distance) {
      const fee = Math.round((distance / 1000) * 3); // Adjust this calculation based on your actual fee logic
      setShippingFee(fee);
    }
  };
  return (
    <form className="flex flex-col md:flex-row h-full">
      <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto items-center border-r border-[#cdcdcb]">
        <div className="relative w-48 h-24 mt-6">
          <Image
            src={icon}
            alt="Image"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="flex my-4">
          <Link
            className="font-[300] text-[12px] flex items-center"
            href="/cart"
          >
            Cos <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
          </Link>
          <span className="font-[500] text-[12px] flex items-center">
            Livrare{" "}
            <ChevronRight className="ml-2 mr-1" strokeWidth={1} size={15} />
          </span>
          <Link
            className="font-[300] text-[12px] flex items-center"
            href="/cart"
          >
            Plata <ChevronRight className="ml-2" strokeWidth={1} size={15} />
          </Link>
        </div>
        <div className="lg:hidden w-full">
          <div className={`bg-[#f5f5f5] top-[10.5rem] border `}>
            <button
              type="button"
              onClick={toggleOrderSummary}
              className="flex w-full p-2.5 border-b"
            >
              <div className="flex justify-between w-full mx-6">
                <span className="flex font-bold mr-5 items-center">
                  <span className="font-[500]">Rezumatul comenzii</span>
                </span>
                {isOrderSummaryOpen ? (
                  <ChevronUp size={23} strokeWidth={1} />
                ) : (
                  <ChevronDown size={23} strokeWidth={1} />
                )}
              </div>
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOrderSummaryOpen ? "auto" : 0 }}
              transition={{ type: "spring", stiffness: 1000, damping: 50 }}
              className="overflow-hidden"
            >
              <div className="p-4 m-6">
                <OrderSummary shippingFee={shippingFee} />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-full md:h-[700px]">
          <div className="flex flex-col bg-white rounded-md p-10 mx-6">
            <h2 className="text-lg font-[600]">
              <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
                1.
              </span>{" "}
              Cine trimite cadoul?
            </h2>
            <Input type="text" name="personSendingEmail" label="E-mail" />
            <Input type="text" name="personSendingFirstName" label="Nume" />
            <Input type="text" name="personSendingSecondName" label="Prenume" />
            <Input type="text" name="personSendingPhone" label="Telefon" />
            <span className="text-xs ml-5">
              <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-3 font-[600]">
                i
              </span>
              Factura se emite exculiv online si pe email. Nicio factura nu
              ajunge la beneficiarul cadoului.
            </span>
          </div>
          <div className="flex flex-col bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-md my-10 p-10 m-6">
            <h2 className="text-lg font-[600]">
              <span className="border border-[rgb(155,47,14)] rounded-full px-2 py-1.5">
                2.
              </span>{" "}
              Cine primeste cadoul?
            </h2>
            <Input
              type="text"
              name="personReceivingFullName"
              label="Nume Complet"
            />
            <Input type="text" name="personReceivingPhone" label="Telefon" />
            <div className="flex w-full">
              <Input
                type="text"
                label="Numele strazii:"
                name="personReceivingStreetName"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Numele strazii"
                className="border border-gray-300 rounded-md p-1"
              />

              <Input
                type="text"
                name="personReceivingStreetNumber"
                label="Numarul Strazii:"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Numaruk strazii"
                className="border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="flex w-full">
              <Input
                name="deliveryCity"
                label="Alege orasul livrarii:"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="select"
                options={[
                  { value: "Gura Humorului", label: "Gura Humorului" },
                  { value: "Frasin", label: "Frasin" },
                  { value: "Voronet", label: "Voronet" },
                  { value: "Voronet", label: "Voronet" },
                  {
                    value: "Manastrirea Humorului",
                    label: "Manastrirea Humorului",
                  },
                  { value: "Capu Campului", label: "Capu Campului" },
                  { value: "Capu Codrului", label: "Capu Codrului" },
                  { value: "Vama", label: "Vama" },

                  // Add more cities as needed
                ]}
              />

              <Input
                label="Cod Postal:"
                name="personReceivingPostalCode"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Codul postal"
                className="border border-gray-300 rounded-md p-1"
              />
            </div>
            {/* Add more fields as needed for address components */}
            {distance !== null && <p>Distance: {distance / 1000} km</p>}
            <p>Cost Livrare: {shippingFee.toFixed(2)} lei</p>
            <button type="button" onClick={handleCalculateDistance}>
              {isCalculating ? "Calculating..." : "Calculeaza Livrarea"}
            </button>
          </div>

          <div className="flex justify-between m-5 pb-7">
            <Link
              className="font-[300] text-[12px] flex items-center"
              href="/cart"
            >
              <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
              Reveniti la cos
            </Link>
            <Button>Plateste</Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:sticky top-0 py-20 px-10 justify-center bg-[#f5f5f5]">
        <div className="w-full h-auto">
          <OrderSummary shippingFee={shippingFee} />
        </div>
      </div>
    </form>
  );
}
