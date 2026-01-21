"use client";

import { useState } from "react";
import { Card } from "../ui/Card";
import { Modal } from "../ui/Modal";
import { BadgeInfo } from "lucide-react";
import Image from "next/image";

interface CoffeeData {
    id: number;
    name: string;
    origin: string;
    shortDesc: string;
    ingredients: string;
    ratio: string;
    preparation: string;
    profile: string;
    funFact: string;
    image: string;
}

const coffees: CoffeeData[] = [
    {
        id: 1,
        name: "Espresso Algorítmico",
        origin: "Etiopía Yirgacheffe",
        shortDesc: "Intensidad calibrada por datos.",
        ingredients: "18g café, 36g agua",
        ratio: "1:2",
        preparation: "9 bar presión, 27s extracción",
        profile: "Floral, Jazmín, Cítrico",
        funFact: "La curva de presión imita el latido cardíaco promedio en reposo.",
        image: "/images/coffees/coffee-1.png"
    },
    {
        id: 2,
        name: "Latte Neuronal",
        origin: "Colombia Huila",
        shortDesc: "Leche texturizada con precisión matemática.",
        ingredients: "Espresso doble, 200ml leche",
        ratio: "1:5",
        preparation: "Vaporización a 65°C constantes",
        profile: "Dulce, Caramelo, Chocolate",
        funFact: "La microespuma se optimiza para retener aromas volátiles.",
        image: "/images/coffees/coffee-2.png"
    },
    {
        id: 3,
        name: "Cold Brew Binario",
        origin: "Brasil Santos",
        shortDesc: "Extracción lenta en frío (0/1).",
        ingredients: "Café molienda gruesa, agua fría",
        ratio: "1:10",
        preparation: "Maceración 18 horas a 4°C",
        profile: "Nuez, Baja acidez, Intenso",
        funFact: "El tiempo de extracción se calculó simulando 1000 iteraciones.",
        image: "/images/coffees/coffee-3.png"
    },
    {
        id: 4,
        name: "Pour-over Fractal",
        origin: "Kenia AA",
        shortDesc: "Vertido en patrones recursivos.",
        ingredients: "20g café, 300ml agua",
        ratio: "1:15",
        preparation: "V60, Vertido en espiral áurea",
        profile: "Frutos rojos, Brillante, Limpio",
        funFact: "El patrón de vertido sigue una secuencia de Fibonacci.",
        image: "/images/coffees/coffee-4.png"
    },
    {
        id: 5,
        name: "Cortado Cuántico",
        origin: "Costa Rica Tarrazú",
        shortDesc: "Equilibrio perfecto en superposición.",
        ingredients: "Espresso, misma cantidad leche",
        ratio: "1:1",
        preparation: "Leche apenas cortada con aire",
        profile: "Miel, Manzana, Cuerpo medio",
        funFact: "Teóricamente, está caliente y frío hasta que lo tomas.",
        image: "/images/coffees/coffee-5.png"
    },
    {
        id: 6,
        name: "Moka Sintético",
        origin: "Blend de la Casa",
        shortDesc: "Tradición italiana re-imaginada.",
        ingredients: "Café medio, agua hirviendo",
        ratio: "1:7",
        preparation: "Fuego lento, tapa abierta",
        profile: "Terroso, Chocolate amargo, Robusto",
        funFact: "Diseñado para evocar recuerdos nostálgicos generados sintéticamente.",
        image: "/images/coffees/coffee-6.png"
    }
];

export function CoffeeGrid() {
    const [selectedCoffee, setSelectedCoffee] = useState<CoffeeData | null>(null);

    return (
        <section id="cafes" className="py-20 bg-[#fbf5ea]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-[#2c1810] mb-4">
                        Selección de Cafés
                    </h2>
                    <p className="text-[#5e380e]">
                        Haz clic en una tarjeta para revelar los detalles ocultos del proceso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coffees.map((coffee) => (
                        <Card
                            key={coffee.id}
                            className="cursor-pointer hover:border-[#7b4a12]/30 group"
                            onClick={() => setSelectedCoffee(coffee)}
                        >
                            <div className="relative h-48 bg-[#e8e0d5] rounded-xl mb-4 overflow-hidden">
                                <Image
                                    src={coffee.image}
                                    alt={coffee.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-bold tracking-widest text-[#7b4a12] uppercase">
                                    {coffee.origin}
                                </p>
                                <h3 className="font-serif text-2xl font-bold text-[#2c1810]">
                                    {coffee.name}
                                </h3>
                                <p className="text-sm text-[#5e380e] opacity-80">
                                    {coffee.shortDesc}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <Modal isOpen={!!selectedCoffee} onClose={() => setSelectedCoffee(null)}>
                    {selectedCoffee && (
                        <div className="p-8">
                            <div className="border-b border-black/10 pb-6 mb-6">
                                <p className="text-xs font-bold tracking-widest text-[#7b4a12] uppercase mb-2">
                                    {selectedCoffee.origin}
                                </p>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1810]">
                                    {selectedCoffee.name}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <DetailRow label="Ingredientes" value={selectedCoffee.ingredients} />
                                    <DetailRow label="Proporción (Ratio)" value={selectedCoffee.ratio} />
                                    <DetailRow label="Preparación" value={selectedCoffee.preparation} />
                                    <DetailRow label="Perfil de Sabor" value={selectedCoffee.profile} />
                                </div>

                                <div className="bg-[#7b4a12]/5 p-6 rounded-xl flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-3 text-[#7b4a12]">
                                        <BadgeInfo size={20} />
                                        <span className="font-bold text-sm uppercase">Dato Curioso</span>
                                    </div>
                                    <p className="italic text-[#5e380e] leading-relaxed">
                                        &quot;{selectedCoffee.funFact}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
}

function DetailRow({ label, value }: { label: string, value: string }) {
    return (
        <div>
            <h4 className="font-bold text-[#2c1810] text-sm mb-1">{label}</h4>
            <p className="text-[#5e380e]">{value}</p>
        </div>
    );
}
