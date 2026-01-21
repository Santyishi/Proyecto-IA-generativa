"use client";

import { Copy, Check, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

interface PromptData {
    id: number;
    type: "Texto" | "Imagen" | "Audio";
    content: string;
}

const prompts: PromptData[] = [
    {
        id: 1,
        type: "Texto",
        content: "Generá una ficha enciclopédica del café [NOMBRE]. Incluí: definición breve, ingredientes, proporción típica, preparación en pasos, perfil de sabor y un dato curioso. Estilo: claro, educativo, 120/180 palabras. Español neutro."
    },
    {
        id: 2,
        type: "Imagen",
        content: "Icono cuadrado 1:1, estilo vector minimalista y realista, vista cenital (top-down) de una taza de café centrada. Dentro de la espuma, latte art formando claramente un signo de interrogación “?” (y un pequeño “+” sutil al lado del punto del signo). Paleta cálida (crema, marrón café), alto contraste, bordes limpios, sin texto, sin marcas, sin fondo o fondo transparente. Composición centrada, diseño muy simple y reconocible incluso a 32x32."
    },
    {
        id: 3,
        type: "Texto",
        content: `Escribí un texto MUY breve en español para una sección titulada “El Modelo Fundacional” en una landing llamada CoffeeLab. Debe sonar como marketing técnico (seguro, claro) y mencionar un modelo ficticio llamado Arabica-LLM

        REQUISITOS:
        - 2 oraciones (máximo 35/45 palabras en total).
        - Sin listas, sin emojis, sin comillas.
        - Incluir: entrenado con más de 50,000 fuentes (recetas de baristas, botánica y reseñas sensoriales), diferencia vs modelos genéricos, entiende la química de la extracción y predice perfiles de sabor según altitud de cultivo y curva de tueste.
        Devolvé SOLO el texto final.`
    }
];

export function Prompts() {
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);

    const handleCopy = async (id: number, text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    return (
        <section id="prompts" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-[#2c1810] mb-4">
                        Prompts de Ejemplo
                    </h2>
                    <p className="text-[#5e380e]">
                       Estos son los prompts utilizados para generar el contenido de CoffeeLab. Se muestran para evidenciar el proceso y las decisiones de diseño.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {prompts.map((prompt) => (
                        <div
                            key={prompt.id}
                            className="relative bg-[#fbf5ea] p-8 rounded-2xl border border-black/5 hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer flex flex-col"
                            onClick={() => setSelectedPrompt(prompt)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="inline-block px-3 py-1 rounded-full bg-[#7b4a12]/10 text-[#7b4a12] text-xs font-bold uppercase tracking-wider">
                                    {prompt.type}
                                </div>
                                <Maximize2 size={16} className="text-[#7b4a12] opacity-50" />
                            </div>

                            <div className="font-mono text-sm text-[#5e380e] mb-12 leading-relaxed line-clamp-4 flex-grow">
                                {prompt.content}
                            </div>

                            <div className="mt-auto flex justify-end">
                                <Button
                                    variant="secondary"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(prompt.id, prompt.content);
                                    }}
                                    className="!px-4 !py-2 text-sm flex items-center gap-2"
                                >
                                    {copiedId === prompt.id ? <Check size={16} /> : <Copy size={16} />}
                                    {copiedId === prompt.id ? "Copiado" : "Copiar"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Modal isOpen={!!selectedPrompt} onClose={() => setSelectedPrompt(null)}>
                    {selectedPrompt && (
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="inline-block px-3 py-1 rounded-full bg-[#7b4a12]/10 text-[#7b4a12] text-xs font-bold uppercase tracking-wider">
                                    {selectedPrompt.type}
                                </div>
                                <Button
                                    variant="secondary"
                                    onClick={() => handleCopy(selectedPrompt.id, selectedPrompt.content)}
                                    className="!px-4 !py-2 text-sm flex items-center gap-2"
                                >
                                    {copiedId === selectedPrompt.id ? <Check size={16} /> : <Copy size={16} />}
                                    {copiedId === selectedPrompt.id ? "Copiado" : "Copiar"}
                                </Button>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-black/5 font-mono text-sm text-[#5e380e] leading-relaxed whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
                                {selectedPrompt.content}
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
}
