import { formatCurrency } from "../../utils/helpers";

function OrderCondirmList({ item }) {
  const { name, price, id, image, quantity } = item;

  return (
    <li className="flex justify-between items-center py-4 first:pt-0 ">
      <div className="flex items-center gap-6">
        <img className="h-14 rounded-md" src={image.thumbnail} alt="" />
        <div className="space-y-2">
          <p className="font-semibold">{name}</p>
          <div className="flex gap-4">
            <p className="text-app-red font-semibold">{quantity}x</p>
            <p className="text-rose-400">@ {formatCurrency(price)}</p>
          </div>
        </div>
      </div>

      <p className="text-rose-900 font-semibold">{formatCurrency(price)}</p>
    </li>
  );
}

export default OrderCondirmList;
