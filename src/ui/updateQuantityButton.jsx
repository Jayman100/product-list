import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";
import Button from "./Button";
import incIcon from "../../public/assets/images/icon-increment-quantity.svg";
import decIcon from "../../public/assets/images/icon-decrement-quantity.svg";

function UpdateQuantityButton({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-app-red rounded-full sm:w-[200px] w-[150px] md:w-[150px] flex items-center justify-between py-3  px-2">
      <div className="h-5 w-5 flex items-center justify-center border border-rose-50  rounded-full">
        <Button
          onClick={() => dispatch(decreaseItemQuantity(id))}
          type="update"
        >
          <img src={decIcon} alt="" />
        </Button>
      </div>
      <p className="text-rose-50">{currentQuantity}</p>
      <div className="h-5 w-5 flex items-center justify-center border border-rose-50  rounded-full">
        <Button
          onClick={() => dispatch(increaseItemQuantity(id))}
          type="update"
        >
          <img src={incIcon} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default UpdateQuantityButton;
