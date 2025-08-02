"use client"

import React, { useState, useEffect, useRef } from 'react';

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
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Ambient Copilot",
          description: "An embedded AI copilot that provides every staff member a virtual assistant for all their needs.",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Autonomous AI Receptionist",
          description: "Let a shockingly lifelike AI Agent answer inbound calls when your team can't get to the phone. Whether it's a busy afternoon or the middle of the night, your AI call center is always ready to assist patients.",
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Custom Chart Note Validations",
          description: "Integrated AI reviews every note for completeness and compliance, holding clinicians to your ideal standard of excellence. Documentation is consistent and audit-proof.",
          image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Beautiful Patient Portal",
          description: "Give patients 24/7 access to labs, vitals, and balances while allowing them to book appointments online, all from a streamlined app with no download required.",
          image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Self-Service Waitlist",
          description: "Enable patients to grab last-minute openings in your schedule, keeping your calendar full and your practice profitable, all with minimal intervention from your staff.",
          image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop&crop=center"
        },
        {
          title: "Effortless Pre-Visit Workflows",
          description: "Automated SMS reminders, payment collection, and insurance verifications simplify the check-in process for patients and front office staff alike.",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) return;

            const containerRect = scrollContainer.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const viewportCenter = window.innerHeight / 2;

            let newActiveIndex = 0;
            let minDistance = Infinity;

            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const sectionRect = section.getBoundingClientRect();
                    const sectionCenter = sectionRect.top + sectionRect.height / 2;
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
                    <div className="partner_inside">
                      <div className="text-center paddind-bottom py-16">
                        <a href="#" className="inline-block">
                          <div className="smaller_img block mx-auto pt-[1.25rem] mb-8">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                              </svg>
                            </div>
                          </div>
                        </a>
                        
                        <h3 className="heading-style-h3 ai-head text-4xl lg:text-5xl font-bold mb-6" style={{letterSpacing:"-.03em"}}>
                          An EHR with integrated AI automations and beautiful workflows.
                        </h3>
                        <p className="mt-[2rem] text-lg text-gray-600 max-w-2xl mx-auto">Say goodbye to admin work. Enjoy practicing medicine again.</p>
                        <div className="text-center ai_btn_div mt-8">
                          <a href="more_stories" className="btn bg-black text-white rounded-[10rem] px-8 py-3 inline-block hover:bg-gray-800 transition-colors">Explore</a>
                        </div>
                      </div>
                    </div>

                    {/* Main Automations Section */}
                    <div className="automations-blocs">
                        <div className="automations_contents home-product_tabs flex gap-12 items-start">
                          
                            {/* Content Menu */}
                            <div className="automations_explains home-product_tabs-menu flex-1" ref={scrollContainerRef}>
                                {sections.map((section, index) => (
                                    <a 
                                        key={index}
                                        href="/"
                                        ref={el => sectionsRef.current[index] = el}
                                        className={`auto_bloc p-6 block mb-6 rounded-xl transition-all duration-300 ${
                                            activeIndex === index 
                                                ? 'bg-white shadow-xl border-2 border-blue-200 transform scale-[1.02]' 
                                                : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveIndex(index);
                                        }}
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 transition-colors ${
                                                    activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                                                }`} />
                                                <div className="flex-1">
                                                    <h3 className={`text-[1.1rem] font-semibold mb-[.8rem] transition-colors ${
                                                        activeIndex === index ? 'text-blue-900' : 'text-gray-800'
                                                    }`}>
                                                        {section.title}
                                                    </h3>
                                                    <p className={`text-gray-600 leading-relaxed ${
                                                        activeIndex === index ? 'text-gray-700' : ''
                                                    }`}>
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                          
                            {/* Images Section */}
                            <div className="automations_images home-product_tabs-content flex-1 sticky top-8">
                                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
                                    {sections.map((section, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ${
                                              activeIndex === index
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-110'
                                            }`}
                                        >
                                            <img
                                                width={600}
                                                height={400}
                                                src={section.image}
                                                className="auto_img w-full h-full object-cover"
                                                alt={`Image for ${section.title}`}
                                            />
                                          
                                            {/* Overlay avec titre */}
                                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-6 left-6 text-white">
                                                    <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
                                                <div className="w-12 h-1 bg-white/70 rounded-full" />
                                            </div> */}
                                        </div>
                                    ))}
                                  
                                    {/* Indicateurs de progression */}
                                    {/* <div className="absolute top-6 right-6 flex flex-col gap-2">
                                        {sections.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                                                    activeIndex === index
                                                      ? 'bg-white shadow-lg'
                                                      : 'bg-white/40 hover:bg-white/60'
                                                }`}
                                                aria-label={`Go to section ${index + 1}`}
                                            />
                                        ))}
                                    </div> */}
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