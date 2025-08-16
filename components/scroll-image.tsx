"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AIAutomations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionsRef = useRef([]);
    const scrollContainerRef = useRef(null);

    // Images correspondant à chaque section
    const sectionImages = [
      "/partner-1.webp", // Ambient AI Scribe
      "/partner-2.webp", // Ambient Copilot
      "/partner-3.webp", // Autonomous AI Receptionist
      "/partner-4.webp", // Custom Chart Note Validations
      "/partner-5.webp", // Beautiful Patient Portal
      "/partner-6.webp", // Self-Service Waitlist
      "/partner-7.webp"  // Effortless Pre-Visit Workflows
    ];

    // Données des sections
    const sections = [
        {
          title: "Ambient AI Scribe",
          description: "Listens in the background and drafts clinical notes in seconds, adapting to each clinician's unique style while keeping them focused on the patient.",
          image: "/partner-1.webp"
        },
        {
          title: "Ambient Copilot",
          description: "An embedded AI copilot that provides every staff member a virtual assistant for all their needs.",
          image: "/auto_2.svg"
        },
        {
          title: "Autonomous AI Receptionist",
          description: "Let a shockingly lifelike AI Agent answer inbound calls when your team can't get to the phone. Whether it's a busy afternoon or the middle of the night, your AI call center is always ready to assist patients.",
          image: "/auto_3.svg"
        },
        {
          title: "Custom Chart Note Validations",
          description: "Integrated AI reviews every note for completeness and compliance, holding clinicians to your ideal standard of excellence. Documentation is consistent and audit-proof.",
          image: "/auto_4.svg"
        },
        {
          title: "Beautiful Patient Portal",
          description: "Give patients 24/7 access to labs, vitals, and balances while allowing them to book appointments online, all from a streamlined app with no download required.",
          image: "/auto_5.webp"
        },
        {
          title: "Self-Service Waitlist",
          description: "Enable patients to grab last-minute openings in your schedule, keeping your calendar full and your practice profitable, all with minimal intervention from your staff.",
          image: "/auto_6.svg"
        },
        {
          title: "Effortless Pre-Visit Workflows",
          description: "Automated SMS reminders, payment collection, and insurance verifications simplify the check-in process for patients and front office staff alike.",
          image: "/auto_7.svg"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) return;

            const containerRect = scrollContainer.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const viewportCenter = window.innerHeight - 150 ; // Pour bien afficher la derneire partie de l'image 

            let newActiveIndex = 0;
            let minDistance = Infinity;

            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const sectionRect = section.getBoundingClientRect();
                    const sectionCenter = sectionRect.top + sectionRect.height ; // Avant il y avait / 2, je le enlever pour le deroulement du defilement des contenus
                    const distance = Math.abs(sectionCenter - viewportCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        newActiveIndex = index;
                    }
                }
            });

            if (newActiveIndex !== activeIndex) {
                setActiveIndex(newActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

      return () => window.removeEventListener('scroll', handleScroll);
    }, [activeIndex]);

    return (
        <div className="ai-automations text-black">
            <div className="padding_main">
                <div className="container_main has-padding inside_ai-automations max-w-7xl mx-auto px-4">
                  
                    {/* Header Section */}
                    <div className="partner_inside has-padding">
                        <div className="text-center paddind-bottom py-16">
                            <Link href="placeholders">
                                <Image className="smaller_img block mx-auto pt-[1.25rem]" src="/air.svg" alt="logo" width={800} height={600} style={{ width: 'auto', height: '3rem', margin: '0 auto' }}/>
                            </Link>
                            
                            <h3 className="heading-style-h3 ai-head mt-[.5rem]" style={{letterSpacing:"-.03em"}}>
                                An EHR with integrated AI automations and beautiful workflows.
                            </h3>
                            <p className="mt-[2rem] text-lg max-w-2xl mx-auto">Say goodbye to admin work. Enjoy practicing medicine again.</p>
                            <div className="text-center ai_btn_div mt-8">
                                <Link href="placeholders" className="btn bg-black text-white rounded-[10rem] px-8 py-3 inline-block hover:bg-gray-800 transition-colors">Explore</Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Automations Section */}
                    <div className="automations-blocs">
                        <div className='has-padding'>
                            <div className="line w-full h-[1px] bg-black"></div>
                        </div>
                        <div className="automations_contents home-product_tabs flex items-start">
                          
                            {/* Content Menu */}
                            <div className="automations_explains home-product_tabs-menu flex-1" ref={scrollContainerRef}>
                                {sections.map((section, index) => (
                                    <Link 
                                        key={index}
                                        href="/"
                                        ref={el => sectionsRef.current[index] = el}
                                        className={`auto_bloc p-6 block rounded-tr-[3.125rem] mb-6 rounded-r-t transition-all duration-300 ${
                                            activeIndex === index 
                                                ? 'bg-[#e5e5e5] is_active' 
                                                : ''
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveIndex(index);
                                        }}
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-[1.1rem] font-semibold mb-[.8rem] transition-colors">
                                                        {section.title}
                                                    </h3>
                                                    <p className=" text-black leading-relaxed">
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="automations_images home-product_tabs-content flex-1 sticky top-8">
                                <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
                                    {sections.map((section, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                                                activeIndex === index
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                            }`}
                                        >
                                            <Image
                                                width={400}
                                                height={200}
                                                src={section.image}
                                                className="auto_img w-full h-full object-contain"
                                                alt={`Image for ${section.title}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAutomations;