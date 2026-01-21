"use client";

import { Play, Pause, Volume2, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AudioTrack {
    id: string;
    title: string;
    description?: string;
    src: string;
}

interface AudioCategory {
    title: string;
    tracks: AudioTrack[];
}

const audioCategories: AudioCategory[] = [
    {
        title: "Ambientes de cafetería",
        tracks: [
            { id: "env-1", title: "Mañana Ajetreada", description: "Murullo constante y tazas chocando", src: "/audio/Mañana-aljetreada.mp3" },
            { id: "env-2", title: "Tarde de Lluvia", description: "Jazz suave y lluvia en la ventana", src: "/audio/Tarde-de-lluvia.mp3" },
        ]
    },
    {
        title: "Molinillo en acción",
        tracks: [
            { id: "grind-1", title: "Molienda Gruesa", description: "Para prensa francesa", src: "/audio/Molienda-gruesa.mp3" },
            { id: "grind-2", title: "Molienda Fina", description: "Polvo suave para espresso", src: "/audio/Molienda-fina.mp3" },
        ]
    },
    {
        title: "Extracción de espresso",
        tracks: [
            { id: "brew-1", title: "El Primer Goteo", description: "La pre-infusión comenzando", src: "/audio/El-primer-goteo.mp3" },
            { id: "brew-2", title: "Flujo Constante", description: "El cuerpo del espresso cayendo", src: "/audio/Flujo-constante.mp3" },
        ]
    },
    {
        title: "Vaporizado de leche",
        tracks: [
            { id: "steam-1", title: "El 'Chirp' Inicial", description: "Introduciendo aire a la leche", src: "/audio/El-chirp-inicial.mp3" },
            { id: "steam-2", title: "Vórtice Silencioso", description: "Texturizado de microespuma", src: "/audio/Vortice-silencioso.mp3" },
        ]
    },
    {
        title: "Servido final",
        tracks: [
            { id: "serve-1", title: "Latte Art Pour", description: "El vertido rítmico", src: "/audio/Latte-art-pour.mp3" },
            { id: "serve-2", title: "Plato y Cuchara", description: "El toque final al servir", src: "/audio/plato-y-cuchara.mp3" },
        ]
    }
];

const MAIN_TRACK_ID = "main-mix";
const MAIN_TRACKS = [
    "/audio/Muestra-1.mp3",
    "/audio/Muestra-2.mp3",
    "/audio/Muestra-3.mp3",
    "/audio/Muestra-4.mp3"
];

export function AudioSection() {
    const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
    const [currentMainSrc, setCurrentMainSrc] = useState<string>(MAIN_TRACKS[0]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Effect to handle audio source changes and playback
    useEffect(() => {
        if (playingTrackId && audioRef.current) {
            let trackSrc = "";

            if (playingTrackId === MAIN_TRACK_ID) {
                trackSrc = currentMainSrc;
            } else {
                // Find the track src from the ID in categories
                for (const cat of audioCategories) {
                    const track = cat.tracks.find(t => t.id === playingTrackId);
                    if (track) {
                        trackSrc = track.src;
                        break;
                    }
                }
            }

            if (trackSrc) {
                // If source changed or we are restarting, update src
                // Note: simple check to avoid reloading if same src (though resetting is fine for replay)
                const currentSrcPath = audioRef.current.getAttribute("src");
                if (currentSrcPath !== trackSrc) {
                    audioRef.current.src = trackSrc;
                }
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [playingTrackId, currentMainSrc]);

    const handlePlayToggle = (trackId: string) => {
        if (playingTrackId === trackId) {
            setPlayingTrackId(null);
        } else {
            if (trackId === MAIN_TRACK_ID) {
                // Pick a random track from MAIN_TRACKS
                const randomIndex = Math.floor(Math.random() * MAIN_TRACKS.length);
                setCurrentMainSrc(MAIN_TRACKS[randomIndex]);
            }
            setPlayingTrackId(trackId);
        }
    };

    return (
        <section id="audio" className="py-24 bg-[#2c1810] text-[#fbf5ea]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hidden global audio player */}
                <audio
                    ref={audioRef}
                    onEnded={() => setPlayingTrackId(null)}
                    className="hidden"
                />

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Main Experience */}
                    <div className="lg:sticky top-24">
                        <h2 className="font-serif text-5xl font-bold mb-8 leading-tight">
                            Inmersión <br />Sonora
                        </h2>

                        <div className="bg-[#fbf5ea]/10 backdrop-blur-md p-10 rounded-3xl border border-[#fbf5ea]/20 mb-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6 text-[#fbf5ea]/60 uppercase tracking-widest text-xs font-bold">
                                <Sparkles size={16} />
                                <span>Experiencia Completa</span>
                            </div>

                            <p className="font-serif text-xl italic leading-relaxed mb-10 text-[#fbf5ea]">
                                "Escucha cómo la inteligencia artificial interpreta el sonido del proceso de tostado perfecto, una sinfonía de datos convertida en ondas sonoras."
                            </p>

                            <button
                                onClick={() => handlePlayToggle(MAIN_TRACK_ID)}
                                className={`group w-full py-6 rounded-2xl flex items-center justify-center gap-4 transition-all text-lg font-bold tracking-wide ${playingTrackId === MAIN_TRACK_ID
                                    ? "bg-[#fbf5ea] text-[#2c1810] shadow-glow" // Custom shadow class can be added or standard shadow
                                    : "bg-[#7b4a12] text-white hover:bg-[#8c5615] hover:scale-[1.02]"
                                    }`}
                            >
                                {playingTrackId === MAIN_TRACK_ID ? (
                                    <>
                                        <Pause size={28} fill="currentColor" />
                                        <span>Pausar Experiencia</span>
                                    </>
                                ) : (
                                    <>
                                        <Play size={28} fill="currentColor" />
                                        <span>Reproducir Mezcla</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Detailed Sections */}
                    <div className="space-y-6">
                        <div className="mb-4">
                            <h3 className="font-mono text-sm uppercase tracking-widest text-[#fbf5ea]/50">
                                Desglose por Etapas
                            </h3>
                        </div>

                        {audioCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-[#fbf5ea]/5 border border-[#fbf5ea]/10 rounded-2xl p-6 hover:bg-[#fbf5ea]/10 transition-colors"
                            >
                                <h4 className="font-serif text-xl font-bold mb-4 text-[#fbf5ea] flex items-center gap-3">
                                    <Volume2 size={20} className="opacity-60" />
                                    {category.title}
                                </h4>

                                <div className="space-y-3">
                                    {category.tracks.map((track) => (
                                        <div
                                            key={track.id}
                                            className={`flex items-center justify-between p-3 rounded-xl transition-all ${playingTrackId === track.id
                                                ? "bg-[#7b4a12] text-white shadow-lg translate-x-1"
                                                : "bg-black/20 hover:bg-black/30"
                                                }`}
                                        >
                                            <div className="flex-1 min-w-0 mr-4">
                                                <div className="font-bold text-sm truncate">{track.title}</div>
                                                {track.description && (
                                                    <div className={`text-xs truncate ${playingTrackId === track.id ? "opacity-90" : "opacity-50"}`}>
                                                        {track.description}
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => handlePlayToggle(track.id)}
                                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingTrackId === track.id
                                                    ? "bg-[#fbf5ea] text-[#7b4a12]"
                                                    : "bg-[#fbf5ea]/10 text-[#fbf5ea] hover:bg-[#fbf5ea]/20"
                                                    }`}
                                            >
                                                {playingTrackId === track.id ? (
                                                    <Pause size={14} fill="currentColor" />
                                                ) : (
                                                    <Play size={14} fill="currentColor" className="ml-0.5" />
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
