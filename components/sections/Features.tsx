import { Brain, Coffee, Mic, Sparkles } from "lucide-react";
import { Card } from "../ui/Card";

const features = [
    {
        icon: <Brain className="text-[#7b4a12]" size={32} />,
        title: "Modelos Fundacionales",
        description: "Entendiendo la base de la IA generativa aplicada a la gastronomía."
    },
    {
        icon: <Coffee className="text-[#7b4a12]" size={32} />,
        title: "Curaduría de Café",
        description: "Selección de granos analizados por algoritmos de sabor."
    },
    {
        icon: <Sparkles className="text-[#7b4a12]" size={32} />,
        title: "Prompts Creativos",
        description: "Genera descripciones y recetas únicas con ingeniería de prompts."
    },
    {
        icon: <Mic className="text-[#7b4a12]" size={32} />,
        title: "Experiencia Auditiva",
        description: "Acompaña tu taza con paisajes sonoros generados por IA."
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-white/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-[#2c1810] mb-4">
                        Qué incluye
                    </h2>
                    <p className="text-[#5e380e] max-w-xl mx-auto">
                        Descubre las herramientas y experiencias que CoffeeLab pone a tu disposición.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col items-center text-center p-8 group hover:-translate-y-1">
                            <div className="mb-6 p-4 bg-[#fbf5ea] rounded-full group-hover:bg-[#7b4a12]/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-[#2c1810] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-[#5e380e] opacity-80">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
