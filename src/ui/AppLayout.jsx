import { useEffect } from "react";
import Cart from "../features/cart/Cart";
import Menu from "../features/menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { product } from "../features/menu/menuSlice";
import OrderConfirmed from "../features/cart/OrderConfirmed";
import data from "../../data/data.json";

function AppLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(product(data.products));
  }, [dispatch]);

  const confirmed = useSelector((state) => state.cart.status);

  return (
    <div className="flex flex-col w-full items-center gap-10 md:flex-row  md:max-w-[1300px] md:mx-auto md:mt-10 md:gap-4 h-dvh md:items-start">
      <Menu />
      <Cart />
      {confirmed && <OrderConfirmed />}
      {confirmed && <div className="modal-backdrop"></div>}
    </div>
  );
}

export default AppLayout;
