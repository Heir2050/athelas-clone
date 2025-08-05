"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { LogoWhite } from "./logo-white";

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
        const baseClasses = "w-full z-50 transition-all duration-300 ease-in-out border-t-1 border-b-1 border-[var(--text-color-primary)] rounded-b-r-[0.8rem] rounded-b-l-[0.8rem] md:rounded-0";
        if (isHeaderFixed && headerPosition === 'top') {
            return `fixed top-0 bg-white text-[var(--text-color-primary)] ${baseClasses}`;
        } else if (isHeaderFixed && headerPosition === 'bottom') {
            return `fixed bottom-0 bg-[var(--text-color-primary)] text-white ${baseClasses}`;
        } else {
            return `absolute bottom-0 bg-white ${baseClasses}`;
        }
    };
    
    return(
        <>
            <section ref={sectionRef} className="hero_section section_black relative" style={{ minHeight: '110vh' }}>
                <div className="upper_hero padding_main">
                    <div className="container_main">
                        <div className="uncement">
                            <p className="smaller">Lattimore Physical Therapy &amp; Sports Rehabilitation Network Rolls Out Athelas Air to 35 Locations</p>
                            <Link href="placeholders" className="btn btn_home bg-var[var(--color-jaune)] border rounded-[10rem] ">Learn More</Link>
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
                    <div className="container_main bg-white h-[80vh]">
                        {/* <h1>Video Space</h1> */}
                        <svg  width="100%" viewBox="0 0 196 72" className="pill_svg-element is-1">
                            <rect className="paint0_linear_2141_34" x="10.5" y="10.5" width="185" height="61" rx="30.5" stroke="black" fill="url(#paint0_linear_2141_34)"></rect>
                            <rect x="0.5" y="0.5" width="185" height="61" rx="30.5" stroke="black" fill="#8DBEFF"></rect>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 196 72" className="pill_svg-element is-2" style={{zIndex:"10"}}>
                            <rect className="paint0_linear_378_569" x="10.5" y="10.5" width="185" height="61" rx="30.5" stroke="black" fill="url(#paint0_linear_378_569)"></rect>
                            <rect x="0.5" y="0.5" width="185" height="61" rx="30.5" stroke="black" fill="#E9FDA3"></rect>
                        </svg>
                    </div>
                </div>
                {/* header component */}
                <header ref={headerRef} className={getHeaderClasses()}>
                    <div>
                        <div>
                            <div className="padding_main">
                                <div className="container_main nav_container px-4" style={{padding: "1rem 1.25rem"}}>
                                    <div className="flex items-center justify-between ">
                                        {/* logo  */}
                                        <div className="flex-shrink-0 w-[40%] md:w-[13%]">
                                            {headerPosition === "bottom" ? <LogoWhite /> : <LogoWhite />}
                                        </div>

                                        {/* Navigation desktop */}
                                        <nav className="nav">
                                            <ul className="flex items-center justify-between">
                                                <li>
                                                    <Link className="nav_menu_link" href="#">Company</Link>
                                                    <ul>
                                                        <li>Sous menu 1</li>
                                                        <li>Sous menu 2</li>
                                                        <li>Sous menu 3</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="nav_menu_link" href="#">Product Suite</Link>
                                                    <ul>
                                                        <li>Sous menu 1</li>
                                                        <li>Sous menu 2</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="nav_menu_link" href="#">Contact</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav_menu_link" href="#">Case Studies</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav_menu_link" href="#">Insight</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                        {/* the demo button  */}
                                        <div className="demos demo">
                                            <Link href="placeholders" className={`btn btn_demo border rounded-[10rem] ${isHeaderFixed ? 'bg-white text-[var(--text-color-primary)]' : 'bg-black text-white'}`}>Get a Demo</Link>
                                        </div>

                                        {/* Menu hamburger mobile/tablette */}
                                        <button
                                            className="toggle_btn relative w-8 h-8 flex flex-col justify-center items-center"
                                            onClick={toggleMenu}
                                            aria-label="Toggle menu"
                                        >
                                            <span 
                                                className={`block w-6 h-0.5 ${isHeaderFixed && headerPosition === 'bottom' ? 'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out ${
                                                !isMenuOpen ? 'rotate-90 translate-y-0.5' : ''
                                                }`}
                                            ></span>
                                            <span 
                                                className={`block w-6 h-0.5 ${isHeaderFixed && headerPosition === 'bottom' ? 'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out mt-1 ${
                                                !isMenuOpen ? 'rotate-180 ' : ''
                                                }`}
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Menu mobile/tablette */}
                            <div className={`bg-white mobile_tablet overflow-hidden transition-all duration-300 ease-in-out ${
                                isMenuOpen ?  'max-h-96 opacity-100 block inline-block w-full' : 'max-h-0 opacity-0 hidden'
                            }`}>
                                <nav className="py-4 border-t border-gray-200">
                                    <ul className="space-y-4">
                                        <li style={{borderTop: "1px solid black"}}>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">
                                                Company
                                            </Link>
                                            <ul className="ml-4 mt-2 space-y-2">
                                                <li><Link href="#" className="nav_menu_link text-left block text-sm text-gray-600 hover:text-blue-600">Sous menu 1</Link></li>
                                                <li><Link href="#" className="nav_menu_link text-left block text-sm text-gray-600 hover:text-blue-600">Sous menu 2</Link></li>
                                                <li><Link href="#" className="nav_menu_link text-left block text-sm text-gray-600 hover:text-blue-600">Sous menu 3</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">
                                                Product Suite
                                            </Link>
                                            <ul className="ml-4 mt-2 space-y-2">
                                                <li><Link href="#" className="nav_menu_link text-left block text-sm text-gray-600 hover:text-blue-600">Sous menu 1</Link></li>
                                                <li><Link href="#" className="nav_menu_link text-left block text-sm text-gray-600 hover:text-blue-600">Sous menu 2</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">
                                                Case Studies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">
                                                Insight
                                            </Link>
                                        </li>
                                        <div style={{padding: ".3rem 1rem", paddingTop: "0.7rem"}}>
                                            <Link href="placeholders" className="btn btn_demo bg-black text-white border rounded-[10rem] text-[var(--text-color-primary)] w-full text-center justify-center">Get a Demo</Link>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}