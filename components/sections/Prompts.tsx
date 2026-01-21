"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

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
        content: "Fotografía macro de alta resolución de una gota de espresso cayendo en una taza de cerámica blanca, iluminación cinemática, vapor visible, profundidad de campo baja, estilo editorial."
    },
    {
        id: 3,
        type: "Audio",
        content: "Genera un paisaje sonoro de 30 segundos de una cafetería bulliciosa en París: tintineo de tazas, murmullo suave de conversaciones en francés, máquina de espresso de fondo, lluvia suave en el exterior."
    }
];

export function Prompts() {
    const [copiedId, setCopiedId] = useState<number | null>(null);

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
                        Copia estos prompts para probar en tus propios modelos de IA.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {prompts.map((prompt) => (
                        <div key={prompt.id} className="relative bg-[#fbf5ea] p-8 rounded-2xl border border-black/5 hover:shadow-md transition-shadow">
                            <div className="inline-block px-3 py-1 rounded-full bg-[#7b4a12]/10 text-[#7b4a12] text-xs font-bold uppercase tracking-wider mb-4">
                                {prompt.type}
                            </div>
                            <p className="font-mono text-sm text-[#5e380e] mb-12 leading-relaxed">
                                {prompt.content}
                            </p>

                            <div className="absolute bottom-8 right-8">
                                <Button
                                    variant="secondary"
                                    onClick={() => handleCopy(prompt.id, prompt.content)}
                                    className="!px-4 !py-2 text-sm flex items-center gap-2"
                                >
                                    {copiedId === prompt.id ? <Check size={16} /> : <Copy size={16} />}
                                    {copiedId === prompt.id ? "Copiado" : "Copiar"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
