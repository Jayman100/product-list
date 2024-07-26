function Button({ children, type, onClick }) {
  const styles = {
    add: "py-3 sm:w-[200px] rounded-full w-[150px] md:w-[150px] border border-rose-500 bg-rose-50 flex items-center justify-center gap-2",
    delete: "  text-lg  text-rose-500",
    confirm:
      "bg-app-red text-rose-50 py-2 md:py-5  rounded-full text-sm md:text-lg",
    update: " text-2xl text-rose-50",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
