"use client";
import { resetPassword } from "@/actions/resetPass";
import React, { useState } from "react";
import Input from "../util/input";
import Button from "../util/button";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function send() {
    const message = await resetPassword(email);
    setMessage(message);
  }
  return (
    <>
      <form
        action={send}
        className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] mx-auto my-20"
      >
        {!message ? (
          <>
            <Input
              type="email"
              name="email"
              label="Introduceti adresa de e-mail pentru care vreti sa resetati parola:"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" moreStyle="w-[200px] mx-auto my-5">
              Reseteaza parola
            </Button>
          </>
        ) : (
          <>
            <p className="text-center text-2xl font-[200]">{message}</p>
            <button
              onClick={() => router.push("/authentification/reset-password")}
              href="/authentification/reset-password"
              className="text-center font-[100] underline underline-offset-4 my-4"
            >
              Retrimiteti link-ul de resetare!
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default ResetPasswordForm;
