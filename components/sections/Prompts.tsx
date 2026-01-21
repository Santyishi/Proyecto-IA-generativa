"use client";

import { Copy, Check, Maximize2 } from "lucide-react";
import { useState, CSSProperties } from "react";
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
    },
    {
        id: 4,
        type: "Imagen",
        content: `Imagen de fondo para header/hero de una landing llamada CoffeeLab. 
        Fotografía realista estilo editorial, ambiente de café minimalista, paleta cálida (crema, beige, marrones suaves). 
        Composición pensada para overlay de texto: centro y parte superior relativamente “limpios” (espacio negativo), elementos de café muy sutiles en los bordes (por ejemplo: una mesa clara, una taza desenfocada, granos de café fuera de foco, vapor suave). 
        Profundidad de campo corta y desenfoque ligero (bokeh), contraste bajo, iluminación suave natural, sin personas, sin logos, sin texto, sin marcas, sin objetos llamativos. 
        Sensación moderna y elegante, no abrumadora, ideal como background. 
        Formato panorámico 16:9 o 21:9, alta resolución.`
    },
    {
        id: 5,
        type: "Audio",
        content: "Describe un ambiente sonoro de cafetería moderna: máquinas de espresso siseando, tazas chocando suavemente, murmullo lejano de conversaciones, jazz lo-fi de fondo. Duración 30s. Estilo inmersivo y relajante."
    },
    {
        id: 6,
        type: "Imagen",
        content: "Fotografía editorial realista, vista cenital (top-down) de una taza de moka centrada sobre fondo crema uniforme, luz natural suave, paleta cálida. Superficie con crema y chocolate formando un patrón “sintético” limpio: geometrías suaves (hexágonos o polígonos redondeados) muy sutiles, como diseño generado por computadora, sin texto. Alto detalle, enfoque perfecto, sombras muy suaves, sin logos, sin manos, sin objetos alrededor, composición limpia, estilo consistente para una serie de 6 imágenes."
    },
    {
        id: 7,
        type: "Imagen",
        content: "Fotografía editorial realista, vista cenital (top-down) de una taza de cortado centrada sobre fondo crema uniforme, luz natural suave, paleta cálida. Latte art minimalista con un patrón “cuántico” sugerido: anillos elípticos suaves y pequeñas interferencias tipo ondas (como un diagrama abstracto de interferencia), sin texto. Alto detalle, enfoque perfecto, sombras muy suaves, sin logos, sin manos, sin objetos alrededor, composición limpia, estilo consistente para una serie de 6 imágenes."
    }
    ,
    {
        id: 8,
        type: "Imagen",
        content: "Fotografía editorial realista, vista cenital (top-down) de una taza de espresso centrada sobre fondo crema uniforme, luz natural suave, paleta cálida. Crema del espresso con un patrón sutil tipo “trama algorítmica” (líneas finas y curvas como un circuito abstracto) integrado en la superficie, elegante y minimalista, sin texto. Alto detalle, enfoque perfecto, sombras muy suaves, sin logos, sin manos, sin objetos alrededor, composición limpia, estilo consistente para una serie de 6 imágenes."
    },
    {
        id: 9,
        type: "Texto",
        content: `A partir de ahora respondé con el estilo “CoffeeLab”: tono editorial, tecnológico y cálido, en español neutro. 
        Texto claro y premium, sin exagerar claims técnicos, sin emojis. 
        Siempre conectá café + IA con metáforas sutiles (algoritmos, redes, patrones), sin sonar a ciencia falsa.
        Cuando te pida contenido para cafés, mantené consistencia de estructura y longitud.
        Confirmá con “Listo” y esperá mi siguiente pedido.`
    }
];

export function Prompts() {
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);
    const [filter, setFilter] = useState<"Todos" | "Texto" | "Imagen" | "Audio">("Todos");

    const filteredPrompts = prompts.filter(p => filter === "Todos" || p.type === filter);
    // Duplicate prompts significantly to create a long seamless strip for marquee
    const displayPrompts = filteredPrompts.length > 0
        ? [...filteredPrompts, ...filteredPrompts, ...filteredPrompts, ...filteredPrompts, ...filteredPrompts, ...filteredPrompts]
        : [];

    const handleCopy = async (id: number, text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    return (
        <section id="prompts" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16">
                <div className="text-center">
                    <h2 className="font-serif text-4xl font-bold text-[#2c1810] mb-4">
                        Prompts de Ejemplo
                    </h2>
                    <p className="text-[#5e380e] mb-8">
                        Estos son los prompts utilizados para generar el contenido de CoffeeLab. Se muestran para evidenciar el proceso y las decisiones de diseño.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {(["Todos", "Texto", "Imagen", "Audio"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === type
                                    ? "bg-[#7b4a12] text-white shadow-md transform scale-105"
                                    : "bg-[#fbf5ea] text-[#7b4a12] hover:bg-[#7b4a12]/10"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex gap-6 pb-8 animate-marquee pl-4"
                    style={{
                        animationDuration: `${(displayPrompts.length / 2) * 15}s`
                    } as CSSProperties}
                >
                    {displayPrompts.map((prompt, index) => (
                        <div
                            key={`${prompt.id}-${index}`}
                            className="bg-[#fbf5ea] p-6 rounded-2xl border border-black/5 hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer flex flex-col w-[300px] md:w-[380px] h-[350px] flex-shrink-0"
                            onClick={() => setSelectedPrompt(prompt)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="inline-block px-3 py-1 rounded-full bg-[#7b4a12]/10 text-[#7b4a12] text-xs font-bold uppercase tracking-wider">
                                    {prompt.type}
                                </div>
                                <Maximize2 size={16} className="text-[#7b4a12] opacity-50" />
                            </div>

                            <div className="font-mono text-xs text-[#5e380e] mb-auto leading-relaxed line-clamp-6 overflow-hidden">
                                {prompt.content}
                            </div>

                            <div className="mt-4 flex justify-end">
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
        </section>
    );
}
