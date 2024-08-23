import OrderItem from "@/components/orders/order-item";
import Title from "@/components/util/title";
import { verifyAuth } from "@/lib/auth";
import Loading from "@/lib/loading";

export default async function OrdersPage() {
  const { user } = await verifyAuth();

  return (
    <div className="flex items-center justify-center w-full flex-col p-5">
      <Title moreStyle="my-5">COMENZILE MELE</Title>
      {/* <button onClick={createOrder} className="mb-5 p-2 bg-blue-500 text-white">
        Create Order
      </button> */}
      {!user ? <Loading /> : <OrderItem userId={user.id} mode="all" />}
    </div>
  );
}
