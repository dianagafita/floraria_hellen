"use client";
import { resetPassword } from "@/actions/resetPass";
import React, { useState } from "react";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function send() {
    const message = await resetPassword(email);
    setMessage(message);
  }
  return (
    <form action={send} className="flex flex-col gap-4">
      <h1>Reset Password</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Reset Password</button>
      <p>{message}</p>
    </form>
  );
};

export default ResetPasswordForm;
