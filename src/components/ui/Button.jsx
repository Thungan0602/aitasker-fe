export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-10 py-4 rounded-[24px] font-bold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:-translate-y-1",

    secondary:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
      third:
      "border-2 bg-pink border-black-500 text-black hover:bg-pink-500 hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}