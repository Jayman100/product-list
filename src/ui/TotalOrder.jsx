import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/helpers";
import { getTotalOrderPrice } from "../features/cart/cartSlice";

function TotalOrder() {
  const OrderTotal = useSelector(getTotalOrderPrice);

  return (
    <div className="flex items-center justify-between ">
      <p>Order Total</p>
      <p className="text-lg md:text-2xl font-bold">
        {formatCurrency(OrderTotal)}
      </p>
    </div>
  );
}

export default TotalOrder;
