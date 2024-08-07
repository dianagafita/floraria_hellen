"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/util/input";
import { FeaturedImageGallery } from "@/components/pages/photoGallery";
import { TitleByPath } from "@/components/util/getPathTitle";
import { useCart } from "@/context/cart-context";
import Button from "@/components/util/button";
import Loading from "@/lib/loading";

export default function ProductPage({ params }) {
  const { addToCart } = useCart();
  const [flowers, setFlowers] = useState(null);
  const [formData, setFormData] = useState({
    deliveryCity: "Gura Humorului",
    deliveryDate: "",
    deliveryInterval: "08:00-10:00",
    deliveryType: false,
  });
  const [formValid, setFormValid] = useState(false); // State to track form validity

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/${params.productId}`);
        const data = await res.json();
        setFlowers(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.prodId]);

  // Effect to check form validity whenever formData changes
  useEffect(() => {
    const isFormValid =
      formData.deliveryCity !== "" &&
      formData.deliveryDate !== "" &&
      formData.deliveryInterval !== "";
    setFormValid(isFormValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget.form;

    if (form.checkValidity()) {
      // Check if the form is valid based on HTML5 validation
      if (flowers && formValid) {
        // Only add to cart if form is valid
        addToCart(flowers, formData);
      }
    } else {
      form.reportValidity(); // Display HTML5 validation error messages
    }
  };

  if (!flowers) {
    return <Loading />;
  }

  const images = flowers.images_url;
  const title = flowers.name.toUpperCase();
  const paths = [
    {
      href: "/plante",
      title: "PLANTE",
      style: "text-black-300/75",
    },
    {
      href: `/flower-bouquets/roses/${flowers.name}`,
      title: title,
      style: "text-black-300/75",
    },
  ];
  if (!flowers) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col">
      <TitleByPath paths={paths} />
      <div className="md:flex py-5 px-10 w-full mt-5">
        <div className="md:w-1/2 md:max-w-[700px] md:min-w-[450px] w-full mb-10">
          <FeaturedImageGallery images={images} type="funeral" />
        </div>
        <div className="flex flex-col md:ml-10 md:w-1/2 md:w-[80%]">
          <span className="text-2xl lg:text-3xl mb-5 text-center font-[400] ">
            {flowers.name}
          </span>
          <span className="text-end text-lg mr-10">
            100<sup>.00 lei</sup>
          </span>
          <form className="flex flex-col w-full h-full max-h-[365px] justify-between mb-20">
            <div className="w-full">
              <div
                className="
                  grid-cols-2
                    md:grid-cols-1
                grid  lg:grid-cols-2 w-full items-end"
              >
                {flowers.product_type === "coroane-funerare" && (
                  <>
                    <Input
                      name="message"
                      label="Mesaj panglica:"
                      type="text"
                      required
                    />
                    <Input
                      name="orderName"
                      label="Nume decedat:"
                      type="text"
                      required
                    />{" "}
                  </>
                )}
                <Input
                  required
                  name="deliveryCity"
                  label="Alege orasul livrarii:"
                  type="select"
                  options={[
                    { value: "Gura Humorului", label: "Gura Humorului" },
                    { value: "Frasin", label: "Frasin" },
                    { value: "Voronet", label: "Voronet" },
                    {
                      value: "Manastrirea Humorului",
                      label: "Manastrirea Humorului",
                    },
                    { value: "Capu Campului", label: "Capu Campului" },
                    { value: "Capu Codrului", label: "Capu Codrului" },
                    { value: "Vama", label: "Vama" },
                  ]}
                  value={formData.deliveryCity}
                  onChange={handleChange}
                />
                <Input
                  required
                  name="deliveryDate"
                  label="Data livrarii:"
                  type="date"
                  dateType="order"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
                <Input
                  required
                  name="deliveryInterval"
                  label="Interval orar livrare:"
                  type="select"
                  options={[
                    { value: "08:00-10:00", label: "08:00 - 10:00" },
                    { value: "10:00-12:00", label: "10:00 - 12:00" },
                    { value: "12:00-14:00", label: "12:00 - 14:00" },
                    { value: "14:00-16:00", label: "14:00 - 16:00" },
                    { value: "16:00-18:00", label: "16:00 - 18:00" },
                    { value: "18:00-20:00", label: "18:00 - 20:00" },
                  ]}
                  value={formData.deliveryInterval}
                  onChange={handleChange}
                />
                <Input
                  name="deliveryType"
                  label="Livrare anonima"
                  type="checkbox"
                  checked={formData.deliveryType}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button type="submit" onClick={handleAddToCart}>
              Adauga in cos
            </Button>
          </form>
        </div>
      </div>
      <div className="m-10">
        <span className="font-bold">
          Buchetul contine:{" "}
          <span className="font-[100] text-sm">
            lisianthus, miniroze si trandafiri de inalta calitate, alese in
            functie de disponibilitate si sezon.
          </span>
          <span className="my-2 flex flex-col">
            Detalii suplimentare:
            <span className="my-1 text-sm font-[100]">
              La produsele cu flori naturale pot exista usoare variatii de
              culoare fata de imaginea prezentata.
            </span>
            <span className="text-sm font-[100] mb-10">
              Anumite flori din aranjamente pot fi disponibile doar in anumite
              perioade din an.
            </span>
            <span className="text-sm font-[100] mb-10">
              Anumite flori din buchet/aranjament pot fi imbobocite dar se vor
              deschide.
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
