import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import UpdateQuantityButton from "../../ui/updateQuantityButton";
import cartIcon from "../../../public/assets/images/icon-add-to-cart.svg";

function MenuItem({ menu }) {
  const { image, category, name, price, id } = menu;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  return (
    <li className="md:basis-[250px]">
      <div>
        <img
          className={`w-full rounded-2xl  ${
            isInCart ? "border-[3px] border-app-red" : ""
          }`}
          src={image.desktop}
          alt=""
        />

        <div className="absolute translate-x-[-50%] left-[50%] -translate-y-6 md:relative md:flex md:justify-center md:-translate-y-6">
          {!isInCart && (
            <Button
              onClick={() => {
                const newCart = {
                  name,
                  price,
                  id,
                  quantity: 1,
                  image,
                  totalPrice: price * 1,
                };

                dispatch(addItem(newCart));
              }}
              type="add"
            >
              <img className="inline" src={cartIcon} role="button" alt="" />
              <span className="font-medium text-rose-500">Add to Cart</span>
            </Button>
          )}
          {isInCart && (
            <UpdateQuantityButton id={id} currentQuantity={currentQuantity} />
          )}
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <p className="text-rose-400">{category}</p>
        <h2 className="font-semibold">{name}</h2>
        <p className="text-app-red font-semibold">{formatCurrency(price)}</p>
      </div>
    </li>
  );
}

export default MenuItem;
