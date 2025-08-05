import Link from "next/link";
import Image from "next/image";
import { partnerInfos } from "@/lib/partner-info";


export function Partner() {
    return(
        <div className="partner text-black">
            <div className="padding_main">
                <div className="container_main has-padding inside_partner">
                    <div className="partner_inside">
                        <div className="text-center paddind-bottom">
                            <Link href="placeholders">
                                <Image className="smaller_img block mx-auto pt-[1.25rem]" src="/ambient.png" alt="logo" width={800} height={600} style={{ width: 'auto', height: '3rem', margin: '0 auto' }}/>
                            </Link>
                            
                            <h3 className="heading-style-h3 ai-head">
                                More than a scribe, Ambient AI is a true partner in clinical facilitation.
                            </h3>
                            <div className="text-center ai_btn_div">
                                <Link href="placeholders" className="btn bg-black text-white rounded-[10rem] ">Try Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="partner_blocs pt-16" style={{borderTop: "1px solid black"}}>
                        {/* <div className="partner_blocs_elements"> */}
                            <div className="huge_img_partner">
                                <div className="ambient_video">
                                    {/* <Image width={800} height={600} src="/partner-1.webp" alt="partner" /> */}
                                </div>
                            </div>
                        {/* </div> */}
                        <div className="partner_info">
                            {partnerInfos.map((info, index) => (
                            <div key={index} className="partner_info_bloc flex gap-[.75rem] items-start">
                                <Image width={200} height={200} src={info.icon} alt="deep" style={{width:"2rem", height:"2rem", objectFit:"contain"}} />
                                <div className="more_ifo">
                                    <h3 className="text-[1rem] font-semibold mb-[.8rem]">{info.title}</h3>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}