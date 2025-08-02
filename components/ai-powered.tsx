import Link from "next/link";
import Image from "next/image";
import { Partner } from "./partner";
import { AiAutomations } from "./ai-automations";
import ScrollImageSync from "./scroll-image";


export function AiPowered() {
    return(
        <div className="ai-powered text-black">
            <div className="padding_main">
                <div className="container_main has-padding inside-ai">
                    <div className="ai_inside">
                        <div className="text-center paddind-bottom">
                            <Link href="#">
                                <Image className="smaller_img img_ai_c block mx-auto pt-[1.25rem]" src="/insights.png" alt="logo" width={800} height={600} style={{ width: 'auto', height: '3rem', margin: '0 auto' }}/>
                            </Link>
                            
                            <h3 className="heading-style-h3 ai-head">
                                Your AI-Powered financial edge.
                            </h3>
                            <p>
                                Transform claim management, accelerate payments, and discover growth opportunities with the power of Artificial Intelligence.
                            </p>
                            <div className="text-center ai_btn_div">
                                <Link href="more_stories" className="btn bg-white text-[var(--text-color-primary)] rounded-[10rem] text-[var(--text-color-primary)] ">Explore</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blocs">
                        <div className="blocs_elements border-right">
                            <div className="bloc">
                                <div className="bloc_element left">
                                    <h3 className="text-[1rem] font-semibold">AI Denial Defense</h3>
                                    <p style={{paddingRight: "3rem"}}>Athelas fights denials faster and reclaims more revenue by harnessing AI to pinpoint an approach for each claim as distinct as the claim itself.</p>
                                    <div className="boc_img relative" style={{position: "relative", width: '100%', height: '254'}}>
                                        <Image src="/ai1.webp" width={800} height={600} style={{position: "relative", width: '100%', height: '100%', objectFit:"cover", borderRadius:".75rem"}} alt="Ai" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="blocs_elements">
                            <div className="bloc">
                                <div className="bloc_element right">
                                    <h3 className="text-[1rem] font-semibold">Remittance Recon Agents</h3>
                                    <p>When payers fail to deliver a claim decision, Athelas deploys specialized AI Agents that can extract the decision from web, or even call the payer directly.</p>
                                    <div className="boc_img relative" style={{position: "relative", width: '100%', height: '254'}}>
                                        <Image src="/ai2.jpg" width={800} height={600} style={{position: "relative", width: '100%', height: '100%', objectFit:"cover", borderRadius:".75rem"}} alt="Ai" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blocs_elements border-right">                            
                            <div className="bloc">
                                <div className="bloc_element left">
                                    <h3 className="text-[1rem] font-semibold">AI browser agents for pulling information from portals</h3>
                                    <p>Helps medical practices automate access to insurance portals, lab systems, and databases. They securely retrieve patient data, saving time and improving accuracy.</p>
                                    <div className="boc_img relative" style={{position: "relative", width: '100%', height: '254'}}>
                                        <Image src="/ai3.jpg" width={800} height={600} style={{position: "relative", width: '100%', height: '100%', objectFit:"cover", borderRadius:".75rem"}} alt="Ai" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blocs_elements">                            
                            <div className="bloc">
                                <div className="bloc_element right">
                                    <h3 className="text-[1rem] font-semibold">Revenue AI</h3>
                                    <p>Athelas processes millions of data points to reveal powerful insights on your practice’s financial health, allowing you to make confident decisions that drive growth and stability.</p>
                                    <div className="boc_img relative" style={{position: "relative", width: '100%', height: '254'}}>
                                        <Image src="/ai4.png" width={800} height={600} style={{position: "relative", width: '100%', height: '100%', objectFit:"cover", borderRadius:".75rem"}} alt="Ai" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Partner />

            {/* <AiAutomations /> */}

            <ScrollImageSync />
        </div>
    )
}