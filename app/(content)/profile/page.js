import Button from "@/components/util/button";
import { verifyAuth } from "@/lib/auth";
import Link from "next/link";

export default function ProfilePage() {
  const response = verifyAuth();
  const user = response.user;

  return (
    <>
      {user ? (
        <div className="flex flex-col md:flex-row p-5 w-full">
          <div className="mb-9 md:mb-0 flex flex-col w-full p-5 mx-2 text-center">
            <span className="font-[400] text-4xl mb-10">BUNA, DIANA</span>
            <div className="flex border-b items-center p-2">
              <span className="mr-2">COMENZI RECENTE</span>
              <span className="mx-2 text-lg font-[200]">|</span>
              <Link
                href="/orders"
                className="text-[12px] font-[100] text-[#cdcdcf]"
              >
                VEZI TOATE COMENZILE
              </Link>
            </div>

            <div className="flex flex-col p-2 border-b">
              <span className="text-start mb-5">INFORMATIILE MELE</span>
              <div className="flex">
                <span>
                  NUME: <span> Gafita Diana</span>
                </span>
              </div>
              <div className="flex">
                <span>
                  EMAIL: <span> gafita.diana12@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[200px] text-center mt-20">
          <span className="font-[400] text-4xl mb-10 mt-10">
            VA RUGAM SA VA LOGATI PENTRU A
          </span>
          <Link href="/authentification">
            <Button>LOGARE</Button>
          </Link>
        </div>
      )}
    </>
  );
}
