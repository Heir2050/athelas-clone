"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

// Composant Logo
const Logo = () => (
  <div className="text-2xl font-bold text-black">
    Logo
  </div>
);

// Composant Link personnalisé
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerPosition, setHeaderPosition] = useState('bottom');
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const sectionRef = useRef(null);
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
        const baseClasses = "w-full z-50 transition-all duration-300 ease-in-out bg-whites shadow-lg";
        if (isHeaderFixed && headerPosition === 'top') {
            return `fixed top-0 ${baseClasses}`;
        } else if (isHeaderFixed && headerPosition === 'bottom') {
            return `fixed bottom-0 ${baseClasses}`;
        } else {
            return `absolute bottom-0 ${baseClasses}`;
        }
    };

    return (
        <>
            <section ref={sectionRef} className="hero_section section_black relative" style={{ minHeight: '150vh' }}>
                <div className="upper_hero padding_main py-12">
                    <div className="container_main max-w-7xl mx-auto px-4">
                        <div className="uncement flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-800 rounded-lg">
                        <p className="smaller text-white text-sm mb-4 sm:mb-0">
                            Lattermore Physical Therapy &amp; Sports Rehabilitation Network Rolls Out Athelas Air to 35 Locations
                        </p>
                        <Link href="more" className="btn btn_home bg-yellow-400 text-black px-6 py-2 border rounded-full hover:bg-yellow-500 transition-colors">
                            Learn More
                        </Link>
                        </div>
                        <div className="content_hero text-center">
                            <div className="hero_small text-white">
                                <div className="width-content max-w-4xl mx-auto">
                                <h1 className="heading-font heading-style text-4xl md:text-6xl font-bold mb-6">
                                    The all-in-one RCM&nbsp;and EHR&nbsp;suite to scale your practice.
                                </h1>
                                <div className="pt-4 smaller_plus text-xl text-gray-300">
                                    A magical AI-powered practice &nbsp;platform for modern healthcare organizations.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider h-px bg-gray-600"></div>

                <div className="down_hero padding_main py-12">
                    <div className="container_main bg-white h-screen max-w-7xl mx-auto px-4 flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-gray-800">Video Space</h1>
                    </div>
                </div>
                
                {/* Header sticky avec debug */}
                <header ref={headerRef} className={getHeaderClasses()}>
                    {/* Debug info - à supprimer plus tard */}
                    <div className="bg-red-100 text-xs p-1 text-center">
                        Position: {headerPosition} | Fixed: {isHeaderFixed.toString()}
                    </div>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Logo />
                            </div>

                            {/* Navigation desktop */}
                            <nav className="hidden lg:flex flex-1 justify-center">
                                <ul className="flex space-x-8">
                                    <li className="relative group">
                                        <Link 
                                            href="#" 
                                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                                        >
                                            Company
                                            <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sous menu 1</Link></li>
                                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sous menu 2</Link></li>
                                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sous menu 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <Link 
                                            href="#" 
                                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                                        >
                                            Product Suite
                                            <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sous menu 1</Link></li>
                                            <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sous menu 2</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
                                            Insight
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            {/* Bouton Demo desktop */}
                            <div className="hidden lg:block">
                                <Link 
                                    href="more" 
                                    className="btn btn_demo bg-blue-600 text-white px-6 py-2 border rounded-full hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Get a Demo
                                </Link>
                            </div>

                            {/* Menu hamburger mobile/tablette */}
                            <button
                                className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
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
                </header>
            </section>

            <section>
                                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>

                {/* Sections additionnelles pour tester le scroll */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Section suivante</h2>
                    <p className="text-lg text-gray-600">Contenu de test pour voir le comportement du header sticky</p>
                    </div>
                </section>

                <section className="bg-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Autre section</h2>
                    <p className="text-lg text-gray-600">Plus de contenu pour tester le scroll</p>
                    </div>
                </section>
            </section>


            {/* Style pour la section noire */}
            <style jsx>{`
                .section_black {
                    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                }
            `}</style>
        </>
    );
}