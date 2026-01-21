import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95";
    const variants = {
        primary: "bg-[#7b4a12] text-white hover:bg-[#5e380e] shadow-md hover:shadow-lg",
        secondary: "border-2 border-[#7b4a12] text-[#7b4a12] hover:bg-[#7b4a12] hover:text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
