import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import treeIcon from "../../../public/assets/images/icon-carbon-neutral.svg";
import TotalOrder from "../../ui/TotalOrder";
import { updateStatus } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.carts);

  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white  md:basis-auto lg:basis-[35%] px-6 py-8 rounded-xl flex flex-col gap-8 ">
      <h1 className="text-app-red font-bold text-xl">
        Your Cart ({cart?.length ?? 0})
      </h1>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul className="flex flex-col divider divide-y border-b">
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <TotalOrder />

          <div className="bg-rose-50 rounded-lg flex justify-center items-center py-4 gap-1">
            <img src={treeIcon} alt="tree Icon" /> This is a{" "}
            <span className="font-bold">carbon-neutral</span> delivery
          </div>

          <Button type="confirm" onClick={() => dispatch(updateStatus(true))}>
            Confirm Order
          </Button>
        </>
      )}
    </div>
  );
}

export default Cart;
