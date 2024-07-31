import { getUserById } from "@/app/api/store/user";
import OrderItem from "@/components/orders/order-item";
import Button from "@/components/util/button";
import { verifyAuth } from "@/lib/auth";
import Link from "next/link";

export default async function ProfilePage() {
  let userdata;
  const response = await verifyAuth();
  if (response.user) {
    userdata = await getUserById(response.user.id);
  }

  return (
    <>
      {response.user ? (
        <div className="flex flex-col md:flex-row p-5 mt-5 w-full min-h-[400px]">
          <div className="mb-9 md:mb-0 flex flex-col w-full  mx-2 text-center">
            <span className="font-[400] text-4xl mb-10 text-transform: uppercase">
              BUNA, {userdata["second_name"]}
            </span>
            <div className="lg:flex lg:flex-row">
              <div className="flex flex-col items-center p-2 sm:mb-10 md:mb-0  w-full lg:w-1/2">
                <div className="flex items-center mb-5 w-full">
                  <span className="mr-2">COMENZI RECENTE</span>
                  <span className="mx-2 text-lg text-[rgb(0,0,0,0.4)] font-[100]">
                    |
                  </span>
                  <Link
                    href="/orders"
                    className="text-[12px] font-[100] text-[rgb(0,0,0,0.4)]"
                  >
                    VEZI TOATE COMENZILE
                  </Link>
                </div>
                <OrderItem />
              </div>

              <div className="flex flex-col mt-[3.5rem]  border rounded-sm h-fit p-5 lg:w-1/2">
                <span className="text-start mb-[1.4rem]">
                  INFORMATIILE MELE
                </span>
                <div className="flex">
                  <span>
                    NUME:{" "}
                    <span className="text-[rgb(0,0,0,0.4)] mx-1">
                      {userdata.second_name}
                      <span className="text-[rgb(0,0,0,0.4)] ml-1">
                        {userdata.first_name}
                      </span>
                    </span>
                  </span>
                </div>
                <div className="flex">
                  <span>
                    EMAIL:{" "}
                    <span className="ml-1 text-[rgb(0,0,0,0.4)]">
                      {" "}
                      {userdata.email}
                    </span>
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : (
        <div className="h-[200px] text-center my-20 flex flex-col">
          <span className="font-[300] text-3xl mb-10 mt-10">
            VA RUGAM SA VA LOGATI PENTRU A VEDEA DETALII
          </span>
          <Link href="/authentification">
            <Button>LOGARE</Button>
          </Link>
        </div>
      )}
    </>
  );
}
