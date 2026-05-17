export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-600",
        outline:
            "border border-orange-500 bg-white text-orange-500 hover:bg-orange-50",
        ghost: "bg-white text-slate-700 hover:bg-slate-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-xs",
        lg: "px-10 py-3 text-xs",
        icon: "h-11 w-11 text-xl",
    };

    return (
        <button
            className={`rounded-full font-black transition ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}