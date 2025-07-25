'use client'

import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

export function InvertedBoxes() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const cards = container?.querySelectorAll('.card') || [];

        const onScroll = () => {
            if (window.innerWidth < 768) return; // uniquement à partir de 768px

            const top = container?.getBoundingClientRect().top || 0;

            cards.forEach((card, index) => {
                if (top <= -index * 150) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="inverted sticky-parent" ref={containerRef}>
            <div className="home-featured-products_grid">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className={`card stacked`}>
                        <div className="home-featured-products">
                            <Image className="smaller_img" src={i === 0 ? "/insights.png" : i === 1 ? "/ambient.png" : i === 2 ? "/air.svg" : "/agents-logo.svg"} alt="logo" width={800} height={600} style={{ width: '100%', height: '2.5rem' }} />
                            <Image src={i === 0 ? "/products-1.png" : i === 1 ? "/products-2.png" : i === 2 ? "/products-3.png" : "/products-agents.png"} alt="img" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} className="relative" />
                            <p className="products_text relative leading-1.2">
                                {i < 3
                                    ? "Boost payments faster with transparent, automated tools."
                                    : "AI-powered extensions of your staff for scheduling, billing, sending appeals, and more."}
                            </p>
                        </div>
                        {i === 1 && (
                            <div className="hidden md:flex absolute items-center justify-center side_middle_btn">
                                <Plus className=" plus_btn" size={20} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
