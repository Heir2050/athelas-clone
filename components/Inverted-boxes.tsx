"use client"

import { Plus } from "lucide-react"
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export function InvertedBoxes() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <div className="inverted">
                <div className="home-featured-products_grid">
                    <div className="card one">
                        <div className="home-featured-products">
                            <Image className="smaller_img" src="/insights.png" alt="logo" width={800} height={600} style={{ width: '100%', height: '2.5rem' }}/>
                            <Image src="/products-1.png" alt="img" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '1rem'}} className="relative hug_img"/>
                            <p className="products_text relative leading-1.2">Boost payments faster with transparent, automated tools.</p>
                        </div>
                    </div>
                    <div className="card two">
                        <div className="outside-box"></div> 
                        <div className="relative">
                            <div className="home-featured-products">
                                <Image className="smaller_img" src="/ambient.png" alt="logo" width={800} height={600} style={{ width: '100%', height: '2.5rem' }}/>
                                <Image src="/products-2.png" alt="img" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '1rem'}} className="relative hug_img"/>
                                <p className="products_text relative leading-1.2">Boost payments faster with transparent, automated tools.</p>
                            </div>
                            <div className="hidden md:flex absolute items-center justify-center side_middle_btn">
                                <Plus className=" plus_btn" size={20}/>
                            </div>
                            <div className="hidden md:flex absolute items-center justify-center side_middle_btn_right">
                                <Plus className=" plus_btn" size={20}/>
                            </div>
                        </div>
                    </div>
                    <div className="card tree">
                        <div className="home-featured-products">
                            <Image className="smaller_img" src="/air.svg" alt="logo" width={800} height={600} style={{ width: '100%', height: '2.5rem' }}/>
                            <Image src="/products-3.png" alt="img" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '1rem'}} className="relative hug_img"/>
                            <p className="products_text relative leading-1.2">Boost payments faster with transparent, automated tools.</p>
                        </div>
                    </div>
                    <div
                        ref={cardRef}
                        className={`card four md:col-span-3 `}
                    >
                        <div className="ai-agent">
                            <div>
                                <Image className="h-[3rem]" src="/agents-logo.svg" alt="logo" width={800} height={600} style={{height: '3rem', marginBottom: '1rem' }}/>
                                <p>AI-powered extensions of your staff for scheduling, billing, sending appeals, and more.</p>
                            </div>
                            <Image src="/products-agents.png" alt="img" width={800} height={600} style={{ width: '100%', height: 'auto'}} className="relative hug_img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}