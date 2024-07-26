import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import deleteIcon from "../../../public/assets/images/icon-remove-item.svg";

function CartItem({ item }) {
  const { name, price, id, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between  py-4 first:pt-0">
      <div className="">
        <p className="font-semibold mb-2">{name}</p>
        <div className="flex gap-4">
          <p className="text-app-red font-bold">{quantity}x</p>
          <div className="space-x-2">
            <span className="text-rose-400">@ {formatCurrency(price)}</span>
            <span className="text-rose-500 font-semibold">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>
      </div>
      <div
        onClick={() => console.log("delete")}
        className="h-3.5 w-3.5 md:h-5 md:w-5 flex items-center justify-center border border-rose-500  rounded-full"
      >
        <Button type="delete" onClick={() => dispatch(deleteItem(id))}>
          <img className="" src={deleteIcon} alt="delete icon" />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
