"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import Button from "@/components/util/button";
import Input from "@/components/util/input";
import { auth } from "@/actions/auth-actions";

export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {}); // Ensure `auth` and `signup` functions are properly imported and used

  return (
    <div className="flex flex-col pt-10  mx-20 my-10 items-center  bg-white border  shadow-lg">
      <span className="text-3xl font-[200]">
        {mode === "login" ? "LOGARE" : "Creaza cont"}
      </span>
      <form
        className="flex flex-col justify-center items-center w-full "
        onSubmit={formAction}
      >
        {mode === "login" && (
          <div className="grid grid-cols-2 w-[80%] items-end m-[35px]">
            <Input name="email" label="E-mail" />
            <Input name="password" label="Parola" type="password" />
          </div>
        )}
        {mode === "signup" && (
          <div className="flex flex-col justify-center items-center w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full justify-center">
              <Input name="firstName" label="Prenume" />
              <Input name="secondName" label=" Nume" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center mb-20">
              <Input name="email" label="E-mail" />
              <Input name="password" label="Parola" type="password" />
              <Input name="phone" label="Telefon" />
            </div>
          </div>
        )}

        {formState.errors && (
          <ul>
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>
                <p>{formState.errors[error]}</p>
              </li>
            ))}
          </ul>
        )}
        <Button moreStyle="w-[200px] mb-3 ">
          {mode === "login" ? "Intra in cont" : "Creaza cont"}
        </Button>
        <p className="text-[13px] font-[100] underline underline-offset-2 text-[#707070] hover:text-[#404040] mb-20">
          {mode === "login" ? (
            <Link href="/authentification/?mode=signup">
              Nu ti-ai facut inca cont? Creeaza acum.{" "}
            </Link>
          ) : (
            <Link href="/authentification/?mode=login">Intra in cont</Link>
          )}
        </p>
      </form>
    </div>
  );
}
