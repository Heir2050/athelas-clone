"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Header } from "./header";
import { Logo } from "./logo";

import { Plus } from 'lucide-react';

export function HomePage() {

    const [isSticky, setIsSticky] = useState(false);
    const heroSectionRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (!heroSectionRef.current || !headerRef.current) return;

        const heroSection = heroSectionRef.current;
        const header = headerRef.current;
        
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const headerHeight = header.offsetHeight;

        // Si le bas de la section est au-dessus du haut de la fenêtre + hauteur du header
        if (heroBottom <= headerHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    return(
        <>
            <section className="hero_section section_black relative"  ref={heroSectionRef}>
                <div className="upper_hero padding_main">
                    <div className="container_main">
                        <div className="uncement">
                            <p className="smaller">Lattimore Physical Therapy &amp; Sports Rehabilitation Network Rolls Out Athelas Air to 35 Locations</p>
                            <Link href="more" className="btn btn_home bg-var[var(--color-jaune)] border rounded-[10rem] ">Learn More</Link>
                        </div>
                        <div className="content_hero text-center">
                            <div className="hero_small text-white">
                                <div className="width-content">
                                    <h1 className="heading-font heading-style">The all-in-one RCM&nbsp;and EHR&nbsp;suite to scale your practice.</h1>
                                    <div className="pt-4 smaller_plus">A magical AI-powered practice &nbsp;platform for modern healthcare organizations.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="down_hero padding_main">
                    <div className="container_main bg-white h-[100vh]">
                        <h1>Video Space</h1>
                    </div>
                </div>
                {/* header component */}
                <header 
                    ref={headerRef} 
                    className={`bg-[var(--text-color-primary)] ${isSticky ? 'sticky' : ''}`}
                    style={{
                        position: isSticky ? 'fixed' : 'absolute',
                        bottom: isSticky ? 'auto' : '0',
                        top: isSticky ? '0' : 'auto',
                        width: '100%',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <div>
                        <div className="flex align-center justify-between">
                            <div className="padding_main">
                                <Logo />
                                <nav className="nav md:flex">
                                    <ul>
                                        <li>
                                            <Link href="#">Company</Link>
                                            <ul>
                                                <li>Sous menu 1</li>
                                                <li>Sous menu 2</li>
                                                <li>Sous menu 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#">Product Suite</Link>
                                            <ul>
                                                <li>Sous menu 1</li>
                                                <li>Sous menu 2</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Case Studies</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Insight</Link>
                                        </li>
                                    </ul>
                                    <div className="demo">
                                        <Link href="more" className="btn btn_demo bg-white border rounded-[10rem] ">Get a Demo</Link>
                                    </div>
                                </nav>
                                <div className="haburger_menu">
                                    <Plus className="text-white" height={34} width={34} size={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </section>
        </>
    )
}