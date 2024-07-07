import Title from "@/components/util/title";
import React from "react";
import { PiBagThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { BsHouse } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/util/button";
import { FaCheck } from "react-icons/fa6";

export default function OrderDetailsPage() {
  return (
    <div>
      <section class="bg-white py-8 px-5 antialiased md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-[600] sm:text-2xl ">
            Track the delivery of order #957684673
          </h2>

          <div class="mt-6 sm:mt-8 lg:flex lg:gap-8">
            <div class="w-full divide-y divide-gray-200 overflow-hidden rounded-sm border border-gray-200 :divide-gray-700 :border-gray-700 lg:max-w-xl xl:max-w-2xl">
              <div class="space-y-4 p-6">
                <div class="flex items-center gap-6">
                  <a href="#" class="h-14 w-14 shrink-0">
                    <img
                      class="h-full w-full :hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      alt="imac image"
                    />
                    <img
                      class="hidden h-full w-full :block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-.svg"
                      alt="imac image"
                    />
                  </a>

                  <a
                    href="#"
                    class="min-w-0 flex-1 font-medium  hover:underline "
                  >
                    {" "}
                    PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3,
                    24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma,
                    Blue, Keyboard layout INT{" "}
                  </a>
                </div>

                <div class="flex items-center justify-end gap-4">
                  <div class="flex items-center justify-end gap-4">
                    <p class="text-base font-normal text-gray-900 :text-white">
                      x1
                    </p>

                    <p class="text-xl font-bold leading-tight text-gray-900 :text-white">
                      $1,499
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-4 bg-[rgba(0,0,0,0.03)] p-6">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="font-normal text-gray-500 ">Produse</dt>
                    <dd class="font-medium text-gray-900 ">$6,592.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="font-normal text-gray-500 ">Livrare</dt>
                    <dd class="text-base font-medium text-gray-900">$299.00</dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 :border-gray-700">
                  <dt class="text-lg font-bold text-gray-900 :text-white">
                    Total
                  </dt>
                  <dd class="text-lg font-bold text-gray-900 :text-white">
                    $7,191.00
                  </dd>
                </dl>
              </div>
            </div>

            <div class="mt-6 grow sm:mt-8 lg:mt-0">
              <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
                <div className="grid grid-cols-2 ">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 :text-white">
                      Istoricul comenzii{" "}
                    </h3>

                    <ol class="relative ms-3 border-s border-gray-200 :border-gray-700">
                      <li class="ms-6 text-primary-700 my-7">
                        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <PiBagThin />
                        </span>
                        <h4 class="mb-0.5 text-base font-semibold text-gray-900 :text-white">
                          Comanda plasata
                        </h4>
                        <p class="text-sm font-normal text-gray-500 ">
                          19 Nov 2023, 10:45
                        </p>
                      </li>
                      <li class="mb-10 ms-6 text-primary-700 :text-primary-500">
                        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <CiCreditCard1 />
                        </span>
                        <h4 class="mb-0.5 text-base font-semibold text-gray-900 :text-white">
                          Plata acceptata
                        </h4>
                        <p class="text-sm font-normal text-gray-500 ">
                          19 Nov 2023, 10:45{" "}
                        </p>
                      </li>
                      <li class="mb-10 ms-6 text-primary-700 :text-primary-500">
                        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <FaCheck strokeWidth={0.1} size={13} />
                        </span>
                        <h4 class="mb-0.5 text-base font-semibold text-gray-900 :text-white">
                          Comanda acceptata{" "}
                        </h4>
                        <p class="text-sm font-normal text-gray-500 ">
                          19 Nov 2023, 10:45{" "}
                        </p>
                      </li>
                      <li class="mb-10 ms-6">
                        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <BsHouse strokeWidth={0.05} size={13} />
                        </span>
                        <h4 class="mb-0.5 text-base font-semibold text-gray-900 :text-white">
                          Trimis spre livrare{" "}
                        </h4>
                        <p class="text-sm font-normal text-gray-500 ">
                          19 Nov 2023, 10:45{" "}
                        </p>
                      </li>
                    </ol>
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 class="text-xl font-semibold text-gray-900 :text-white">
                      Factura
                    </h3>
                    <button
                      type="button"
                      class="my-10 w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 :border-gray-600 :bg-gray-800  :hover:bg-gray-700 :hover:text-white :focus:ring-gray-700"
                    >
                      Descarca factura
                    </button>
                  </div>
                </div>

                <div class="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 :border-gray-600 :bg-gray-800  :hover:bg-gray-700 :hover:text-white :focus:ring-gray-700"
                  >
                    Cancel the order
                  </button>

                  <a
                    href="#"
                    class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800 sm:mt-0"
                  >
                    Order details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
