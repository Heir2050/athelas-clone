import Link from "next/link"
import Image from "next/image"

export function AiAutomations() {
    return(
        <div className="ai-automations text-black">
            <div className="padding_main">
                <div className="container_main has-padding inside_ai-automations">
                    <div className="partner_inside">
                        <div className="text-center paddind-bottom">
                            <Link href="#">
                                <Image className="smaller_img block mx-auto pt-[1.25rem]" src="/air.svg" alt="logo" width={800} height={600} style={{ width: 'auto', height: '3rem', margin: '0 auto' }}/>
                            </Link>
                            
                            <h3 className="heading-style-h3 ai-head" style={{letterSpacing:"-.03em"}}>
                                An EHR with integrated AI automations and beautiful workflows.
                            </h3>
                            <p className="mt-[2rem]">Say goodbye to admin work. Enjoy practicing medicine again.</p>
                            <div className="text-center ai_btn_div">
                                <Link href="more_stories" className="btn bg-black text-white rounded-[10rem] ">Explore</Link>
                            </div>
                        </div>
                    </div>

                    <div className="automations-blocs">
                        <div className="automations_contents home-product_tabs">
                            <div className="automations_explains home-product_tabs-menu ">
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Ambient AI Scribe</h3>
                                        <p>Listens in the background and drafts clinical notes in seconds, adapting to each clinician's unique style while keeping them focused on the patient.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Ambient Copilot</h3>
                                        <p>An embedded AI copilot that provides every staff member a virtual assistant for all their needs.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Autonomous AI Receptionist</h3>
                                        <p>Let a shockingly lifelike AI Agent answer inbound calls when your team can’t get to the phone. Whether it’s a busy afternoon or the middle of the night, your AI call center is always ready to assist patients.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Custom Chart Note Validations</h3>
                                        <p>Integrated AI reviews every note for completeness and compliance, holding clinicians to your ideal standard of excellence. Documentation is consistent and audit-proof.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Beautiful Patient Portal</h3>
                                        <p>Give patients 24/7 access to labs, vitals, and balances while allowing them to book appointments online, all from a streamlined app with no download required.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Self-Service Waitlist</h3>
                                        <p>Enable patients to grab last-minute openings in your schedule, keeping your calendar full and your practice profitable, all with minimal intervention from your staff.</p>
                                    </div>
                                </Link>
                                <Link href="/"className="auto_bloc p-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] font-semibold mb-[.8rem]">Effortless Pre-Visit Workflows</h3>
                                        <p>Automated SMS reminders, payment collection, and insurance verifications simplify the check-in process for patients and front office staff alike.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="automations_images home-product_tabs-content">
                                <Image width={300} height={400} src="/z" className="auto_img" alt="image"/>
                                {/* Beaucoup d'autre images correspondant aux contenu */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}