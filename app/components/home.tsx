"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Header } from "./header";
import { Logo } from "./logo";

import { Plus } from 'lucide-react';

export function HomePage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerPosition, setHeaderPosition] = useState('bottom');
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    // const sectionRef = useRef(null);
    // cette ligne a etait ajouter pour eviter l'erreur du typescript avec le souignement en rouge de la fonction getBoundingClientRect()
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef(null);

    
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionRect = section.getBoundingClientRect();

            if (sectionRect.bottom <= 0) {
                // Le bas de la section est au-dessus du viewport
                setIsHeaderFixed(true);
                setHeaderPosition('top');
            } else if (sectionRect.bottom >= window.innerHeight) {
                // Le bas de la section dépasse le bas du viewport
                setIsHeaderFixed(true);
                setHeaderPosition('bottom');
            } else {
                // Le bas de la section est visible dans le viewport
                setIsHeaderFixed(false);
                setHeaderPosition('bottom');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getHeaderClasses = () => {
        const baseClasses = "w-full z-50 transition-all duration-300 ease-in-out bg-white border border-[var(--text-color-primary)]";
        if (isHeaderFixed && headerPosition === 'top') {
            return `fixed top-0 ${baseClasses}`;
        } else if (isHeaderFixed && headerPosition === 'bottom') {
            return `fixed bottom-0 ${baseClasses}`;
        } else {
            return `absolute bottom-0 ${baseClasses}`;
        }
    };
    
    return(
        <>
            <section ref={sectionRef} className="hero_section section_black relative" style={{ minHeight: '150vh' }}>
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
                <header ref={headerRef} className={getHeaderClasses()}>
                    <div>
                        <div>
                            <div className="padding_main">
                                <div className="container_main nav_container">
                                    <div className="flex items-center justify-between ">
                                        {/* logo  */}
                                        <div className="flex-shrink-0">
                                            <Logo />
                                        </div>

                                        {/* Navigation desktop */}
                                        <nav className="nav">
                                            <ul className="flex items-center justify-between text-white">
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
                                        </nav>

                                        {/* the demo button  */}
                                        <div className="demo">
                                            <Link href="more" className="btn btn_demo bg-white border rounded-[10rem] text-[var(--text-color-primary)];">Get a Demo</Link>
                                        </div>

                                        {/* Menu hamburger mobile/tablette */}
                                        <button
                                            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
                                            onClick={toggleMenu}
                                            aria-label="Toggle menu"
                                        >
                                            <span 
                                                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                                                isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                                                }`}
                                            ></span>
                                            <span 
                                                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out mt-1 ${
                                                isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                                                }`}
                                            ></span>
                                        </button>
                                    </div>

                                    {/* Menu mobile/tablette */}
                                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <nav className="py-4 border-t border-gray-200">
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link href="#" className="block text-gray-800 hover:text-blue-600 font-medium">
                                                        Company
                                                    </Link>
                                                    <ul className="ml-4 mt-2 space-y-2">
                                                        <li><Link href="#" className="block text-sm text-gray-600 hover:text-blue-600">Sous menu 1</Link></li>
                                                        <li><Link href="#" className="block text-sm text-gray-600 hover:text-blue-600">Sous menu 2</Link></li>
                                                        <li><Link href="#" className="block text-sm text-gray-600 hover:text-blue-600">Sous menu 3</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block text-gray-800 hover:text-blue-600 font-medium">
                                                        Product Suite
                                                    </Link>
                                                    <ul className="ml-4 mt-2 space-y-2">
                                                        <li><Link href="#" className="block text-sm text-gray-600 hover:text-blue-600">Sous menu 1</Link></li>
                                                        <li><Link href="#" className="block text-sm text-gray-600 hover:text-blue-600">Sous menu 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block text-gray-800 hover:text-blue-600 font-medium">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block text-gray-800 hover:text-blue-600 font-medium">
                                                        Case Studies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block text-gray-800 hover:text-blue-600 font-medium">
                                                        Insight
                                                    </Link>
                                                </li>
                                                <li className="pt-4">
                                                    <Link 
                                                        href="more" className="inline-blockbtn btn_demo bg-white border rounded-[10rem] text-[var(--text-color-primary)];">
                                                        Get a Demo
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}