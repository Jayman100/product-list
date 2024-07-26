function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center pb-6">
      <img
        src="../../../public/assets/images/illustration-empty-cart.svg"
        alt="illustion"
      />
      <p className="font-3xl font-rose-500 font-normal">
        Your added items will appear here{" "}
      </p>
    </div>
  );
}

export default EmptyCart;
