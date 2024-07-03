import OrderItem from "@/components/orders/order-item";
import Title from "@/components/util/title";

export default function OrdersPage() {
  return (
    <div className="flex flex-col w-full p-5">
      <Title>COMENZILE MELE </Title>

      <div>
        <OrderItem />
      </div>
    </div>
  );
}
