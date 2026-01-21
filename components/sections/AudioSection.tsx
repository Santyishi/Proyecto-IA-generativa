"use client";

import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export function AudioSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section id="audio" className="py-20 bg-[#2c1810] text-[#fbf5ea]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl font-bold mb-8">
                    Inmersión Sonora
                </h2>

                <div className="bg-[#fbf5ea]/10 backdrop-blur-sm p-10 rounded-3xl border border-[#fbf5ea]/20 mb-10">
                    <p className="font-serif text-lg italic opacity-80 mb-8 max-w-2xl mx-auto">
                        &quot;Escucha cómo la inteligencia artificial interpreta el sonido del proceso de tostado perfecto, una sinfonía de datos convertida en ondas sonoras.&quot;
                    </p>

                    <button
                        onClick={togglePlay}
                        className="w-20 h-20 bg-[#fbf5ea] rounded-full flex items-center justify-center text-[#2c1810] hover:scale-110 transition-transform mx-auto"
                    >
                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                    </button>

                    {/* Audio element pointing to public folder as requested */}
                    <audio
                        ref={audioRef}
                        src="/audio/coffeelab.mp3"
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />
                </div>

                <div className="text-left bg-black/20 p-6 rounded-xl font-mono text-sm opacity-70">
                    <p className="mb-2 text-[#7b4a12] font-bold uppercase tracking-widest">Guion del Audio (Snippet)</p>
                    <p>
                        [00:00] (Sonido ambiente suave) <br />
                        [00:05] Voz IA: &quot;Bienvenido a CoffeeLab. Ajustando parámetros de tueste...&quot; <br />
                        [00:12] (Crepitar de granos en aumento) <br />
                        [00:20] Voz IA: &quot;Perfil de acidez optimizado. Temperatura: 205 grados.&quot; ...
                    </p>
                </div>
            </div>
        </section>
    );
}
