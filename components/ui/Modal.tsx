"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    if (!isOpen) return null;

    // Use createPortal if you want it at root, but for simplicity in this setup we can render inline 
    // if "portal" is too complex for now. However, generally portals are better.
    // We'll trust createPortal works in Next.js 14 separated. 
    // Since details are just standard React, let's use document.body if mounted.
    // Actually, simplest is just rendering it fixed z-50. No need for portal if structured well, but portal is safer for z-index.
    // Let's use standard fixed overlay without portal for simplicity unless specific req.
    // Re-reading conventions: Portal is best practice for Modals.

    // Safe portal implementation check for SSR
    if (typeof window === "undefined") return null;

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-[#fbf5ea] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                >
                    <X size={20} className="text-[#2c1810]" />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
