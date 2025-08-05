import Image from "next/image"
import { teamMembers } from "@/lib/team";
// import { Button } from "./button";
import Link from "next/link";

export function Infinity() {
    return(
        <>
            <section className="infinity text-white pt-8 pb-4 mb-[2rem]">
                <div className="logos group relative overflow-hidden whitespace-nowrap py-10 ">
                    <div className="animate-slide-right group-hover:animation-pause inline-block mr-slide w-max mr-4">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        <div className="overflow-hidden w-full">
                            <div className="flex justify-center animate-slide-infinite gap-4">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
                                        {/* <div className="mx-auto mb-10 w-full"> */}
                                            <div className="relative cont_slider overflow-hidden rounded-xl ima">
                                                <img src={member.imageSrc} alt={member.name} className="w-full object-cover" />
                                                <div className="absolute top-[1.75rem] z-20 left-[1.75rem]">
                                                    <div className="text-[13px]">
                                                        {member.name}
                                                    </div>
                                                    <div className="text-[13px]">{member.profession}</div>
                                                </div>
                                                <div className="absolute bottom-[1.75rem] z-20 left-[1.75rem] ">
                                                    <div className="text-body-color text-white text-4xl">
                                                        {member.number}
                                                    </div>
                                                    <div className="text-[13px]">
                                                        {member.explain}
                                                    </div>
                                                </div>
                                                <div className="box-team"></div>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
                    <div className="animate-slide-right group-hover:animation-pause inline-block w-max ">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        <div className="overflow-hidden w-full">
                            <div className="flex justify-center animate-slide-infinite gap-4">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
                                        {/* <div className="mx-auto mb-10 w-full"> */}
                                            <div className="relative cont_slider overflow-hidden rounded-xl">
                                                <img src={member.imageSrc} alt={member.name} className="w-full" />
                                                <div className="absolute top-[1.75rem] z-20 left-[1.75rem]">
                                                    <div className="text-[13px]">
                                                        {member.name}
                                                    </div>
                                                    <div className="text-[13px]">{member.profession}</div>
                                                </div>
                                                <div className="absolute bottom-[1.75rem] z-20 left-[1.75rem] ">
                                                    <div className="text-body-color text-white text-4xl">
                                                        {member.number}
                                                    </div>
                                                    <div className="text-[13px]">
                                                        {member.explain}
                                                    </div>
                                                </div>
                                                <div className="box-team"></div>
                                            </div>
                                        </div>
                                    // </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center infinity_btn mt-[3rem]">
                    <Link href="placeholders" className="btn btn_center bg-black border rounded-[10rem] text-[var(--text-color-primary)];">Read Customer Stories</Link>
                </div>
            </section>
        </>
    )
}