import React from "react";
import Input from "../util/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../util/button";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./payment-form";
import { loadStripe } from "@stripe/stripe-js";
import { convertToSubcurrency } from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error(
    "process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY nu e definit!"
  );
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm({
  address,
  setAddress,
  handleCalculateDistance,
  isCalculating,
  shippingFee,
}) {
  const amount = 49.99;
  return (
    <div className="flex flex-col w-full">
      <form className="w-full">
        <div className="h-full md:h-[700px] w-full">
          <div className="flex flex-col  bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-sm  p-10 my-10 mx-5">
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
            <span className="text-xs ml-5 my-6 pr-5">
              <span className="border border-[rgb(155,47,14)] rounded-full px-1.5 text-[rgb(155,47,14)] mr-2 font-[600] ">
                i
              </span>
              <span className="font-[100] text-[12px]">
                Factura se emite exculiv online si pe email. Nicio factura nu
                ajunge la beneficiarul cadoului.
              </span>
            </span>
          </div>
          <div className="flex flex-col  bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-sm  p-10 my-10 mx-5">
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
            <Input type="text" name="personReceivingPhone" label="Telefon" />{" "}
            <div className="flex w-full">
              <Input
                name="deliveryCity"
                label="Alege orasul livrarii:"
                value={address.city}
                onChange={(e) => setAddress({ city: e.target.value })}
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
            </div>
            <Input
              type="text"
              label="Numele strazii:"
              name="personReceivingStreetName"
              value={address.street}
              onChange={(e) => setAddress({ street: e.target.value })}
              placeholder="Numele strazii"
              className="border border-gray-300 rounded-md p-1"
            />
            <div className="flex w-full ">
              <div className="w-1/2">
                <Input
                  type="text"
                  name="personReceivingStreetNumber"
                  label="Numarul Strazii:"
                  value={address.number}
                  onChange={(e) => setAddress({ number: e.target.value })}
                  placeholder="Numaruk strazii"
                  className="border border-gray-300 rounded-md p-1"
                />{" "}
              </div>
              <div className="w-1/2">
                <Input
                  label="Cod Postal:"
                  name="personReceivingPostalCode"
                  type="text"
                  value={address.postalCode}
                  onChange={(e) => setAddress({ postalCode: e.target.value })}
                  placeholder="Codul postal"
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full mt-[50px] mb-5 px-5">
              <Button
                type="button"
                moreStyle="w-full mb-5  whitespace-nowrap py-[0.4rem] text-[15px]"
                onClick={handleCalculateDistance}
              >
                {isCalculating ? "Calculating..." : "Calculeaza Livrarea"}
              </Button>
              <p>
                Cost Livrare:{" "}
                <span className="font-[100] text-[15px]">
                  {shippingFee.toFixed(2)} lei
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between m-5 pb-7">
            <Link
              className="font-[300] text-[12px] flex items-center"
              href="/cart"
            >
              <ChevronLeft className="ml-2 mr-1" strokeWidth={1} size={15} />
              Reveniti la cos
            </Link>
            <Link className="font-[300] text-[12px] flex items-center" href="/">
              Mergeti la plata{" "}
              <ChevronRight className="ml-2 mr-2" strokeWidth={1} size={15} />
            </Link>{" "}
          </div>
        </div>
      </form>
      <div className="h-auto  p-10 m-5 bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-sm">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount, 100),
            currency: "ron",
          }}
        >
          <PaymentForm amount={amount} />
        </Elements>
      </div>
    </div>
  );
}
