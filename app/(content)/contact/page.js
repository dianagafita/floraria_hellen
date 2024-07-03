import MapCard from "@/components/map/map-card";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ContactPage() {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/");
  }
  return (
    <div>
      <MapCard />
    </div>
  );
}
