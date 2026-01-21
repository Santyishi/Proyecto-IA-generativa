import { ArrowRight } from "lucide-react";

export function ModelSection() {
    return (
        <section id="model" className="py-20 bg-[#fbf5ea]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-4xl font-bold text-[#2c1810] mb-6">
                            El Modelo Fundacional
                        </h2>
                        <p className="text-[#5e380e] mb-6 leading-relaxed">
                            Nuestro modelo &quot;Arabica-LLM&quot; ha sido entrenado con más de 50,000 recetas de baristas campeones, tratados de botánica y reseñas sensoriales.
                            <br /><br />
                            A diferencia de otros modelos genéricos, Arabica-LLM entiende la química de la extracción y puede predecir perfiles de sabor basándose en variables como la altitud de cultivo y la curva de tueste.
                        </p>
                        <div className="p-4 bg-white rounded-lg border-l-4 border-[#7b4a12]">
                            <p className="text-sm font-bold text-[#7b4a12] mb-1">Architecture Note</p>
                            <p className="text-sm opacity-70">Based on Transformer architecture with custom attention heads optimized for olfactory data patterns.</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-black/5">
                        <h3 className="font-bold text-center mb-8 text-[#2c1810]">Flujo de Procesamiento</h3>

                        <div className="flex flex-col gap-4">
                            {/* Input Layer */}
                            <div className="flex items-center gap-4">
                                <div className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center text-xs font-mono">Input Data</div>
                                <ArrowRight className="text-[#7b4a12]" />
                                <div className="text-sm text-[#5e380e]">Variables de Grano (Altitud, Proceso)</div>
                            </div>

                            {/* Hidden Layers */}
                            <div className="flex items-center gap-4 pl-8 opacity-50">
                                <div className="w-24 h-24 bg-[#7b4a12]/10 rounded border border-[#7b4a12] flex items-center justify-center text-center text-xs p-2">
                                    Hidden Layers<br />(Sensory Mapping)
                                </div>
                            </div>

                            {/* Output Layer */}
                            <div className="flex items-center gap-4">
                                <div className="w-24 h-12 bg-[#7b4a12] text-white rounded flex items-center justify-center text-xs font-mono">Output</div>
                                <ArrowRight className="text-[#7b4a12]" />
                                <div className="text-sm font-bold text-[#2c1810]">Perfil de Tueste Óptimo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
