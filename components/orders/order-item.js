"use client";
import { useEffect, useState } from "react";
import Button from "../util/button";
import Link from "next/link";

export default function OrderItem({ userId, mode }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`/api/userOrders/${userId}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error("Expected an array of orders but received:", data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  if (orders.length === 0) {
    return <div>No orders found.</div>;
  }

  const renderOrder = (order) => (
    <div
      key={order.id}
      className="border rounded-sm p-4 flex flex-col mb-5 w-full"
    >
      <div className="flex flex-col items-start mb-5">
        <span className="text-xl whitespace-nowrap">
          Comanda nr. {order.id}
        </span>
        <span className="text-sm text-[rgba(0,0,0,0.5)] font-[100]">
          Plasata pe {new Date(order.created_at).toLocaleDateString()} la{" "}
          {new Date(order.created_at).toLocaleTimeString()}
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="uppercase text-sm">{order.order_state}</span>
        <span className="mr-5">{order.total_price} lei</span>
        <Link href={`/profile/orders/${order.id}`}>
          <Button moreStyle="font-[100] px-5 py-1">Detalii</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {mode === "first" ? renderOrder(orders[0]) : orders.map(renderOrder)}
    </div>
  );
}
