import Input from "@/components/util/input";
import { FeaturedImageGallery } from "@/components/pages/photoGallery";
import { TitleByPath } from "@/components/util/getPathTitle";
import { getProductById } from "@/app/api/store/products";

export default async function Ad({ para, addToCart }) {
  const flowers = await getProductById(parseInt(para.prodId));
  console.log(para.prodId);
  console.log(flowers);
  const images = flowers.images_url;
  const title = decodeURIComponent(para.prodId);
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
      href: `/flower-bouquets/roses/${para.prodId}`,
      title: title,
      style: "text-black-300/75",
    },
  ];

  return (
    <div className="flex flex-col ">
      <TitleByPath paths={paths} />
      <div className="md:flex py-5 px-10 w-full mt-5 ">
        <div className="md:w-1/2 md:max-w-[700px] md:min-w-[450px] w-full mb-10 ">
          {/* <Image src={img} alt="" className="object-contain" /> */}
          <FeaturedImageGallery images={images} />{" "}
        </div>
        <div className="flex flex-col md:ml-10 md:w-1/2 md:w-[80%]  ">
          <span className="text-2xl lg:text-3xl mb-5 text-center font-[400] mt-10">
            {flowers.name}
          </span>
          <span className="text-end text-lg mr-10">
            100<sup>.00 lei</sup>
          </span>
          <form className="flex flex-col w-full h-full max-h-[365px] justify-between mb-20">
            <div className="w-full">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
                <Input
                  name="deliveryCity"
                  label="Alege orasul livrarii:"
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
                  ]}
                />
                <Input name="deliveryDate" label="Data livrarii:" type="date" />
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full items-end">
                <Input
                  name="deliveryInterval"
                  label="Interval orar livrare:"
                  type="select"
                  options={[
                    { value: "10:00-12:00", label: "10:00 - 12:00" },
                    { value: "10:00-12:00", label: "10:00 - 12:00" },
                    { value: "12:00-14:00", label: "12:00 - 14;00" },
                    { value: "14:00-16:00", label: "14:00 - 16:00" },
                    { value: "16:00-18:00", label: "16:00 - 18:00" },
                    { value: "18:00-20:00", label: "18:00 - 20:00" },
                  ]}
                />
                <Input
                  name="deliveryType"
                  label="Livrare anonima"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button type="button" moreStyle="px-4" onClick={addToCart}>
                Adauga in cos
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="m-10">
        <span className="font-bold">
          Buchetul contine:{" "}
          <span className="font-[100] text-sm ">
            lisianthus, miniroze si trandafiri de inalta calitate, alese in
            functie de disponibilitate si sezon.
          </span>
          <span className="my-2 flex flex-col ">
            Detalii suplimentare:
            <span className="my-1 text-sm font-[100]">
              La produsele cu flori naturale pot exista usoare variatii de
              culoare fata de imaginea prezentata.
            </span>
            <span className="text-sm font-[100] mb-10">
              Anumite flori din aranjamente pot fi disponibile doar in anumite
              perioade din an.
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
