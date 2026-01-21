import { Coffee } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#2c1810] text-[#fbf5ea] py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Coffee size={24} />
                    <span className="font-serif text-xl font-bold">CoffeeLab</span>
                </div>

                <p className="text-sm opacity-80 text-center md:text-right">
                    © {new Date().getFullYear()} CoffeeLab. Diseñado para explorar la IA y el café.
                    <br />
                    Hecho con Next.js + Tailwind.
                </p>
            </div>
        </footer>
    );
}
