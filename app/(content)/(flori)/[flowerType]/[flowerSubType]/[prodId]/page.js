// "use client";
// import React, { useState, useEffect } from "react";
// import Input from "@/components/util/input";
// import { FeaturedImageGallery } from "@/components/pages/photoGallery";
// import { TitleByPath } from "@/components/util/getPathTitle";
// import { useCart } from "@/context/cart-context";
// import Button from "@/components/util/button";
// import Loading from "@/lib/loading";

// export default function ProductPage({ params }) {
//   const { addToCart } = useCart();
//   const [flowers, setFlowers] = useState(null);
//   const [formData, setFormData] = useState({
//     deliveryCity: "Gura Humorului",
//     deliveryDate: "",
//     deliveryInterval: "08:00-10:00",
//     deliveryType: false,
//   });
//   const [formValid, setFormValid] = useState(false); // State to track form validity

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/product/${params.prodId}`);
//         const data = await res.json();
//         setFlowers(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [params.prodId]);

//   // Effect to check form validity whenever formData changes
//   useEffect(() => {
//     const isFormValid =
//       formData.deliveryCity !== "" &&
//       formData.deliveryDate !== "" &&
//       formData.deliveryInterval !== "";
//     setFormValid(isFormValid);
//   }, [formData]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleAddToCart = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     const form = event.currentTarget.form;

//     if (form.checkValidity()) {
//       // Check if the form is valid based on HTML5 validation
//       if (flowers && formValid) {
//         // Only add to cart if form is valid
//         addToCart(flowers, formData);
//       }
//     } else {
//       form.reportValidity(); // Display HTML5 validation error messages
//     }
//   };

//   if (!flowers) {
//     return <Loading />;
//   }

//   const images = flowers.images_url;
//   const title = decodeURIComponent(params.prodId);
//   const paths = [
//     {
//       href: "/flower-bouquets",
//       title: "BUCHETE FLORI",
//       style: "text-black-300/75",
//     },
//     {
//       href: "/flower-bouquets/roses",
//       title: "TRANDAFIRI",
//       style: "text-black-300/75",
//     },
//     {
//       href: `/flower-bouquets/roses/${params.prodId}`,
//       title: title,
//       style: "text-black-300/75",
//     },
//   ];
//   if (!flowers) {
//     return <Loading />;
//   }
//   console.log(flowers);

//   return (
//     <div className="flex flex-col">
//       <TitleByPath paths={paths} />
//       <div className="md:flex py-5 px-10 w-full mt-5">
//         <div className="md:w-1/2 md:max-w-[700px] md:min-w-[450px] w-full mb-10">
//           <FeaturedImageGallery images={images} />
//         </div>
//         <div className="flex flex-col md:ml-10 md:w-1/2 md:w-[80%]">
//           <span className="text-2xl lg:text-3xl mb-5 text-center font-[400] ">
//             {flowers.name}
//           </span>
//           <span className="text-end text-lg mr-10">
//             100<sup>.00 lei</sup>
//           </span>
//           <form className="flex flex-col w-full h-full max-h-[365px] justify-between mb-20">
//             <div className="w-full">
//               <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
//                 <Input
//                   required
//                   name="deliveryCity"
//                   label="Alege orasul livrarii:"
//                   type="select"
//                   options={[
//                     { value: "Gura Humorului", label: "Gura Humorului" },
//                     { value: "Frasin", label: "Frasin" },
//                     { value: "Voronet", label: "Voronet" },
//                     {
//                       value: "Manastrirea Humorului",
//                       label: "Manastrirea Humorului",
//                     },
//                     { value: "Capu Campului", label: "Capu Campului" },
//                     { value: "Capu Codrului", label: "Capu Codrului" },
//                     { value: "Vama", label: "Vama" },
//                   ]}
//                   value={formData.deliveryCity}
//                   onChange={handleChange}
//                 />
//                 <Input
//                   required
//                   name="deliveryDate"
//                   label="Data livrarii:"
//                   type="date"
//                   dateType="order"
//                   value={formData.deliveryDate}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
//                 <Input
//                   required
//                   name="deliveryInterval"
//                   label="Interval orar livrare:"
//                   type="select"
//                   options={[
//                     { value: "08:00-10:00", label: "08:00 - 10:00" },
//                     { value: "10:00-12:00", label: "10:00 - 12:00" },
//                     { value: "12:00-14:00", label: "12:00 - 14:00" },
//                     { value: "14:00-16:00", label: "14:00 - 16:00" },
//                     { value: "16:00-18:00", label: "16:00 - 18:00" },
//                     { value: "18:00-20:00", label: "18:00 - 20:00" },
//                   ]}
//                   value={formData.deliveryInterval}
//                   onChange={handleChange}
//                 />
//                 <Input
//                   name="deliveryType"
//                   label="Livrare anonima"
//                   type="checkbox"
//                   checked={formData.deliveryType}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <Button type="submit" onClick={handleAddToCart}>
//               Adauga in cos
//             </Button>
//           </form>
//         </div>
//       </div>
//       <div className="m-10">
//         <span className="font-bold">
//           Buchetul contine:{" "}
//           <span className="font-[100] text-sm">
//             lisianthus, miniroze si trandafiri de inalta calitate, alese in
//             functie de disponibilitate si sezon.
//           </span>
//           <span className="my-2 flex flex-col">
//             Detalii suplimentare:
//             <span className="my-1 text-sm font-[100]">
//               La produsele cu flori naturale pot exista usoare variatii de
//               culoare fata de imaginea prezentata.
//             </span>
//             <span className="text-sm font-[100] mb-10">
//               Anumite flori din aranjamente pot fi disponibile doar in anumite
//               perioade din an.
//             </span>
//             <span className="text-sm font-[100] mb-10">
//               Anumite flori din buchet/aranjament pot fi imbobocite dar se vor
//               deschide.
//             </span>
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/util/input";
import { FeaturedImageGallery } from "@/components/pages/photoGallery";
import { TitleByPath } from "@/components/util/getPathTitle";
import { useCart } from "@/context/cart-context";
import Button from "@/components/util/button";
import Loading from "@/lib/loading";

import ExtraItemModal from "./extra-item-modal";

export default function ProductPage({ params }) {
  const { addToCart } = useCart();
  const [flowers, setFlowers] = useState(null);
  const [formData, setFormData] = useState({
    deliveryCity: "Gura Humorului",
    deliveryDate: "",
    deliveryInterval: "08:00-10:00",
    deliveryType: false,
  });
  const [formValid, setFormValid] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [extraItems] = useState([
    {
      id: 1,
      name: "Cutie Raffaello",
      price: 50,
      description: "A fine bottle of red wine.",
      image:
        "https://res.cloudinary.com/defo6qykq/image/upload/v1723475366/floraria_hellen/extra/Screenshot_2024-08-10_at_23.54.49_u3thc8.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Candy",
      price: 30,
      description: "Delicious assorted candies.",
      image:
        "https://res.cloudinary.com/defo6qykq/image/upload/v1723475366/floraria_hellen/extra/Screenshot_2024-08-10_at_23.54.49_u3thc8.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Toffifee",
      price: 30,
      description: "Delicious assorted candies.",
      image:
        "https://res.cloudinary.com/defo6qykq/image/upload/v1723475366/floraria_hellen/extra/Screenshot_2024-08-10_at_23.54.49_u3thc8.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Candy",
      price: 30,
      description: "Delicious assorted candies.",
      image:
        "https://res.cloudinary.com/defo6qykq/image/upload/v1723475366/floraria_hellen/extra/Screenshot_2024-08-10_at_23.54.49_u3thc8.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Candy",
      price: 30,
      description: "Delicious assorted candies.",
      image:
        "https://res.cloudinary.com/defo6qykq/image/upload/v1723475366/floraria_hellen/extra/Screenshot_2024-08-10_at_23.54.49_u3thc8.png",
      quantity: 1,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/${params.prodId}`);
        const data = await res.json();
        setFlowers(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.prodId]);

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
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.currentTarget.form;

    if (form.checkValidity()) {
      if (flowers && formValid) {
        const fullProductDetails = {
          ...flowers,
          extras: selectedExtras,
          formData,
        };
        addToCart(fullProductDetails);
      }
    } else {
      form.reportValidity();
    }
  };

  const handleAddExtra = (item) => {
    setSelectedExtras((prev) => [...prev, item]);
    setSelectedItem(null);
  };

  if (!flowers) {
    return <Loading />;
  }

  const images = flowers.images_url;
  const title = decodeURIComponent(params.prodId);
  const paths = [
    {
      href: "/flower-bouquets",
      title: "BUCHETE FLORI",
      style: "text-black-300/75",
    },
    {
      href: "/flower-bouquets/roses",
      title: "TRANDAFIRI",
      style: "text-black-300/75",
    },
    {
      href: `/flower-bouquets/roses/${params.prodId}`,
      title: title,
      style: "text-black-300/75",
    },
  ];
  console.log(flowers);
  return (
    <div className="flex flex-col">
      <TitleByPath paths={paths} />
      <div className="md:flex py-5 px-5 w-full mt-5 ">
        <div className="md:w-1/2 md:max-w-[700px] md:min-w-[450px] w-full mb-10">
          <FeaturedImageGallery images={images} />
        </div>
        <div className="flex flex-col md:ml-10 md:w-1/2 md:w-[80%] h-[570px] overflow-auto scrollbar">
          <span className="text-2xl lg:text-3xl mb-5 text-center font-[400] ">
            {flowers.name}
          </span>
          <span className="text-end text-lg mr-10">
            100<sup>.00 lei</sup>
          </span>
          <form className="flex flex-col w-full h-full max-h-[365px] justify-between mb-[4rem]">
            <div className="w-full">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
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
                  name="deliveryMessage"
                  label="Mesaj felicitare"
                  type="textarea"
                  checked={formData.deliveryMessage}
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
            <div className="my-10">
              <h3 className=" text-center font-[400] mb-3 text-[15px]">
                ADAUGA CEVA EXTRA
              </h3>
              <div className="ml-5 flex space-x-5 overflow-auto scrollbar">
                {extraItems.map((item) => (
                  <div
                    key={item.id}
                    className=" p-3 flex flex-col items-center"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      moreStyle="mt-2 text-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 mb-2 border-none"
                      />
                    </button>
                    <span className="font-[400] text-[13px] whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-sm font-[300]">{item.price} lei</span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              moreStyle=" !bg-black text-white hover:!bg-white hover:!text-black  active:bg-white active:text-black"
              type="submit"
              onClick={handleAddToCart}
            >
              Adauga in cos
            </Button>
          </form>
        </div>
      </div>{" "}
      <div className="m-10">
        <span className="font-bold">
          Buchetul contine:{" "}
          <span className="font-[100] text-sm">
            {flowers.flowers.map((item, index) => (
              <span key={item.flower}>
                <span>{item.flower}</span>
                {index < flowers.flowers.length - 1 && <span>, </span>}
              </span>
            ))}
          </span>
          <span className="my-2 flex flex-col">
            Detalii suplimentare:
            <span className="my-1 text-sm font-[100]">
              La produsele cu flori naturale pot exista usoare variatii de
              culoare fata de imaginea prezentata.
            </span>
            <span className="text-sm font-[100] mb-1">
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
      <ExtraItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAdd={handleAddExtra}
      />
    </div>
  );
}
