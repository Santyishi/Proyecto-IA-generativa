import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
    return (
        <div
            onClick={onClick}
            className={`bg-white rounded-2xl p-6 border border-black/10 hover:shadow-lg transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
