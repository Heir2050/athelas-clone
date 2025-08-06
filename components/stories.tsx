"use client"

import React from "react"
import { Infinity } from "@/components/infinity-slider";
import { useEffect, useRef, useState } from 'react';

export function Stories() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate1, setAnimate1] = useState(false);
    const [animate2, setAnimate2] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Démarrer la première animation
                    setAnimate1(true);
                    
                    // Démarrer la deuxième animation après 800ms (80% de 1s)
                    setTimeout(() => {
                        setAnimate2(true);
                    }, 800);
                    
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <section className="stories"  ref={sectionRef}>
                <div className="padding_main">
                    <div className="container_main has-padding">
                        <div className="text-center paddind-bottom">
                            <h2 className="small_hidden section-sub-heading mb-[1.25rem]">Customer&nbsp;Stories</h2>
                            
                            {/* <h3 className="heading-style-h3 heading-style"> */}
                            <h3 className="heading-font heading-style">
                                <span>Earn </span>
                                <span className="text-highlight_wrap">
                                    <span>10% more revenue.</span>
                                    <span className={`text-highlight_bg is-1 ${animate1 ? 'visible' : ''}`}></span>
                                </span><br/>
                                <span>Save </span>
                                <span className="text-highlight_wrap">
                                    <span>2+ hours per provider.</span>
                                    <span className={`text-highlight_bg is-2 ${animate2 ? 'visible' : ''}`}></span>
                                </span>
                            </h3>
                        </div>
                        {/* infinity slide images */}
                        <Infinity />
                    </div>
                </div>
            </section>
        </>
    )
}