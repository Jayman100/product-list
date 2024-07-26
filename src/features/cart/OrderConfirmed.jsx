import { useDispatch, useSelector } from "react-redux";
import iconconfirm from "../../../public/assets/images/icon-order-confirmed.svg";
import { clearCart, getCart } from "./cartSlice";
import OrderCondirmList from "./OrderCondirmList";
import TotalOrder from "../../ui/TotalOrder";
import Button from "../../ui/Button";

function OrderConfirmed() {
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  return (
    <div className="modal w-full p-4 sm:w-[500px] gap-6 rounded-xl bg-white  md:p-10 flex flex-col ">
      <img className="self-start" src={iconconfirm} alt="" />

      <div className="space-y-1">
        <h1 className="text-2xl md:text-4xl font-bold">Order Confirmed</h1>
        <p className="text-[16px] md:text-lg text-rose-300">
          We hope you enjoy your food!
        </p>
      </div>

      <div className="bg-rose-50 p-4 rounded-lg space-y-4">
        <ul className="no-scrollbar divider divide-y border-b h-44 md:h-60 overflow-y-auto ">
          {cart.map((item) => (
            <OrderCondirmList item={item} key={item.id} />
          ))}
        </ul>

        <TotalOrder />
      </div>

      <Button type="confirm" onClick={() => dispatch(clearCart(true))}>
        Start New Order
      </Button>
    </div>
  );
}

export default OrderConfirmed;
