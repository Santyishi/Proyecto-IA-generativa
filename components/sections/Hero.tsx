import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Image */}
                <div className="hidden md:block absolute inset-0">
                    <Image
                        src="/images/hero/hero-bg.png"
                        alt="CoffeeLab Hero Background"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden absolute inset-0">
                    <Image
                        src="/images/hero/hero-bg-mobile.png"
                        alt="CoffeeLab Hero Background Mobile"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#fbf5ea]/0 via-[#fbf5ea]/10 to-[#fbf5ea]/25" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2c1810] mb-6 leading-tight">
                    CoffeeLab
                    <span className="block text-2xl md:text-3xl font-sans font-normal mt-4 text-[#7b4a12]">
                        Donde la IA encuentra su sabor
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-[#5e380e] mb-10 max-w-2xl mx-auto">
                    Un experimento de diseño y tecnología para explorar cómo los modelos generativos pueden redefinir nuestra conexión con el café.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="#cafes">
                        <Button variant="primary">Explorar cafés</Button>
                    </Link>
                    <Link href="#audio">
                        <Button variant="secondary">Escuchar audio</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
