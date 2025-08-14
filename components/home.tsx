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

    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef(null);

    const headerAnchorRef = useRef<HTMLDivElement>(null);

    // Pour savoir le positionnement du header
    const getSubMenuPosition = () => {
        return headerPosition === 'bottom' ? 'bottom-full' : 'top-full';
    };

    // << Add inside HomePage >>
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
    
            const section = sectionRef.current;
            const sectionRect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
    
            // 1. Si le bas de la section sort du haut du viewport
            if (sectionRect.bottom <= 0) {
                setIsHeaderFixed(true);
                setHeaderPosition('top');
            } 
            // 2. Si le bas de la section est visible dans le viewport
            else if (sectionRect.bottom > 0 && sectionRect.bottom <= viewportHeight) {
                setIsHeaderFixed(false);
                setHeaderPosition('bottom');
            }
            // 3. Si le bas de la section dépasse le bas du viewport
            else if (sectionRect.bottom > viewportHeight) {
                setIsHeaderFixed(true);
                setHeaderPosition('bottom');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Appel initial pour définir l'état correct au chargement
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Désactiver le défilement quand le menu est ouvert
    useEffect(() => {
        if (isMenuOpen) {
            // Attendre un peu pour permettre le scroll automatique vers le haut
            const timer = setTimeout(() => {
                // Sauvegarder la position actuelle du scroll
                const scrollY = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
                document.body.style.width = '100%';
            }, 600); // Délai suffisant pour permettre le scroll automatique

            return () => clearTimeout(timer);
        } else {
            // Restaurer le défilement
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        if (!isMobile) {
            // Si le menu n'est pas ouvert et que le header n'est pas en position 'top' fixe
            if (!isMenuOpen && !(isHeaderFixed && headerPosition === 'top')) {
                // Faire défiler jusqu'à la position où le header sera en 'top' (fin du header)
                headerAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Attendre que le scroll soit terminé avant d'ouvrir le menu
                setTimeout(() => {
                    setIsMenuOpen(true);
                }, 500);
            } else {
                setIsMenuOpen(!isMenuOpen);
            }
            return;
        }
      
        if (!isMenuOpen) {
            // 1. scroll so the anchor is at the very top
            headerAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
            // 2. after scroll (allow one frame), open the drawer
            requestAnimationFrame(() => {
                setIsHeaderFixed(true);
                setHeaderPosition('top');
                setIsMenuOpen(true);
            });
        } else {
          // closing – just hide the drawer
          setIsMenuOpen(false);
        }
    };

    const handleMouseEnter = (menuName: string) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHoveredMenu(menuName);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoveredMenu(null);
        }, 1000);
    };

    const getHeaderClasses = () => {
        const baseClasses = "w-full z-50 border-t-1 border-b-1 border-[var(--text-color-primary)]";
    
        if (isHeaderFixed && headerPosition === 'top') {
            return `${baseClasses} fixed top-0 bg-white text-[var(--text-color-primary)]`;
        } 
        else if (isHeaderFixed && headerPosition === 'bottom') {
            return `${baseClasses} fixed bottom-0 bg-[var(--text-color-primary)] text-white`;
        }
        else {
            return `${baseClasses} absolute bottom-0 bg-[var(--text-color-primary)] text-white`;
        }
    };

    return (
        <>
            <section ref={sectionRef} className="hero_section section_black relative" style={{ minHeight: '110vh' }}>
                <div className="upper_hero padding_main">
                    <div className="container_main">
                        <div className="uncement">
                            <p className="smaller">Lattimore Physical Therapy &amp; Sports Rehabilitation Network Rolls Out Athelas Air to 35 Locations</p>
                            <Link href="more" className="btn btn_home bg-var[var(--color-jaune)] border rounded-[10rem]">Learn More</Link>
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
                        <svg width="100%" viewBox="0 0 196 72" className="pill_svg-element is-1">
                            <rect className="paint0_linear_2141_34" x="10.5" y="10.5" width="185" height="61" rx="30.5" stroke="black" fill="url(#paint0_linear_2141_34)" />
                            <rect x="0.5" y="0.5" width="185" height="61" rx="30.5" stroke="black" fill="#8DBEFF" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 196 72" className="pill_svg-element is-2" style={{ zIndex: "10" }}>
                            <rect className="paint0_linear_378_569" x="10.5" y="10.5" width="185" height="61" rx="30.5" stroke="black" fill="url(#paint0_linear_378_569)" />
                            <rect x="0.5" y="0.5" width="185" height="61" rx="30.5" stroke="black" fill="#E9FDA3" />
                        </svg>
                    </div>
                </div>

                    <header ref={headerRef} className={`smalls-screens ${getHeaderClasses()}`}>
                        <div ref={headerAnchorRef} className="absolute top-0 left-0 w-0 h-0 pointer-events-none" />

                        <div className="padding_main">
                            <div className="container_main nav_container px-[1.25rem] py-[1rem]">
                                <div className="flex items-center justify-between">
                                    <div className="flex-shrink-0 w-[40%] md:w-[13%]">
                                        {headerPosition === "bottom" ? <LogoWhite /> : <LogoWhite />}
                                    </div>
                                    <nav className="nav">
                                        <ul className="flex items-center justify-between">
                                            <li onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
                                                <div className="nav_menu_link">Company</div>
                                                <ul className={`sub-menu rounded-br-[2.5rem] ${hoveredMenu === 'company' ? 'block' : 'hidden'} ${
                                                    headerPosition === 'bottom' ? 'sub-menu-bottom rounded-tr-[2.5rem] rounded-br-none' : 'sub-menu-top'
                                                }`}>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">About</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Taking Back Healthcare</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Partnerships</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Careers</Link>
                                                </ul>
                                            </li>
                                            <li onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
                                                <div className="nav_menu_link">Product Suite</div>
                                                <ul className={`sub-menu rounded-br-[2.5rem] ${hoveredMenu === 'product' ? 'block' : 'hidden'} ${
                                                    headerPosition === 'bottom' ? 'sub-menu-bottom rounded-tr-[2.5rem] rounded-br-none' : 'sub-menu-top'
                                                }`}>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Ambient AI</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Air EHR</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">RCM</Link>
                                                    <Link className="sub-menu-link text-[.775rem] text-left text-black -mb-px border-b-1 px-[1.75rem] py-[.75rem] block" href="placeholders">Agents</Link>
                                                </ul>
                                            </li>
                                            <li><div className="nav_menu_link">Contact</div></li>
                                            <li><div className="nav_menu_link">Case Studies</div></li>
                                            <li><div className="nav_menu_link">Insight</div></li>
                                        </ul>
                                    </nav>

                                    <div className="demos demo">
                                        <Link href="more" className={`btn btn_demo border rounded-[10rem] ${headerPosition === 'top' ? 'bg-[var(--text-color-primary)] text-white' : 'bg-white text-black'}`}>Get a Demo</Link>
                                    </div>

                                    <button
                                        className="toggle_btn relative w-8 h-8 flex flex-col justify-center items-center"
                                        onClick={toggleMenu}
                                        aria-label="Toggle menu"
                                    >
                                        <span className={`block w-6 h-0.5 ${isHeaderFixed && headerPosition === 'bottom' ? 'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out ${!isMenuOpen ? 'rotate-90 translate-y-0.5' : ''}`}></span>
                                        <span className={`block w-6 h-0.5 ${isHeaderFixed && headerPosition === 'bottom' ? 'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out mt-1 ${!isMenuOpen ? 'rotate-180 ' : ''}`}></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={`absolute bg-black/40 ${isMenuOpen ? 'h-screen opacity-100 block inline-block w-full ' : 'max-h-0 opacity-0 hidden'}`}>
                            <div className={`absolute bg-white mobile_tablet overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 block inline-block w-full' : 'max-h-0 opacity-0 hidden'}`}>
                                {/* <div className="h-screen w-full bg-red"></div> */}
                                <nav className="py-4 border-t border-gray-200">
                                    <ul className="space-y-4 -mt-px md:m-0">
                                        <li style={{ borderTop: "1px solid black" }}>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">Company</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">Product Suite</Link>
                                            <ul className="ml-4 mt-2 space-y-2">
                                            </ul>
                                        </li>
                                        <li><Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">Contact</Link></li>
                                        <li><Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">Case Studies</Link></li>
                                        <li><Link href="#" className="nav_menu_link text-left block text-gray-800 hover:text-blue-600 font-medium">Insight</Link></li>
                                        <div style={{ padding: ".3rem 1rem", paddingTop: "0.7rem" }}>
                                            <Link href="more" className="btn btn_demo bg-black text-white border rounded-[10rem] text-[var(--text-color-primary)] w-full text-center justify-center">Get a Demo</Link>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </header>
            </section>
        </>
    );
}