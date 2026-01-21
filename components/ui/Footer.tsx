import { Coffee } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#2c1810] text-[#fbf5ea] py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex items-center gap-2">
                        <Coffee size={24} />
                        <span className="font-serif text-xl font-bold">CoffeeLab</span>
                    </div>

                    <div className="text-xs space-y-1 opacity-70 border-l border-[#fbf5ea]/20 pl-6 hidden md:block">
                        <p className="font-bold uppercase tracking-widest text-[#7b4a12]/80 mb-2">Tecnologías</p>
                        <p><span className="opacity-60">Imágenes:</span> ChatGPT</p>
                        <p><span className="opacity-60">Audios:</span> ElevenLabs</p>
                        <p><span className="opacity-60">Prompts:</span> ChatGPT</p>
                    </div>
                </div>

                <div className="text-sm opacity-80 text-center md:text-right">
                    <div className="md:hidden mb-6 text-xs space-y-1 opacity-70">
                        <p className="font-bold uppercase tracking-widest text-[#7b4a12]/80 mb-2">Tecnologías</p>
                        <p>Imágenes: ChatGPT | Código: Antigravity</p>
                        <p>Audios: ElevenLabs | Prompts: ChatGPT</p>
                    </div>
                    © {new Date().getFullYear()} CoffeeLab. Diseñado para explorar la IA y el café.
                    <br />
                    Hecho con Next.js + Tailwind.
                </div>
            </div>
        </footer>
    );
}
