"use client";
import { useRouter } from "next/router";

export default function GetRoute() {
  // Calling useRouter() hook
  const router = useRouter();
  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>pathname:- {router.pathname}</h2>
      <h2>query:- {router.query}</h2>
      <h2>asPath:- {router.asPath}</h2>
    </div>
  );
}
