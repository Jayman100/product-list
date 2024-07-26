import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

function Menu() {
  const products = useSelector((state) => state.menu.product);

  return (
    <div className="basis-full md:basis-[60%] lg:basis-[65%] space-y-6 md:space-y-4">
      <h1 className="text-3xl font-bold">Desserts</h1>
      <ul className="flex flex-col md:flex-row gap-8 md:flex-wrap md:gap-8">
        {products.map((item) => (
          <MenuItem key={item.id} menu={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
