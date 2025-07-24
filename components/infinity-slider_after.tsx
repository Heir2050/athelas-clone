import Image from "next/image"
import Team from "./card"
import { teamMembers } from "@/lib/team";

export function Infinity() {
    return(
        <>
            <section className="bg-black text-white pt-8 pb-4">
                <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                    <div className="animate-slide-right group-hover:animation-pause inline-block w-max">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        <div className="-mx-4 flex justify-center gap-4">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
                                    <div className="mx-auto mb-10 w-full max-w-[370px]">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img src={member.imageSrc} alt={member.name} className="w-full" />
                                            <h3 className="absolute top-0 text-base mb-auto font-semibold text-dark dark:text-white">
                                                {member.name}
                                            </h3>
                                            <p className="absolute bottom-0 text-xs text-body-color text-white">
                                                {member.profession}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
                    <div className="animate-slide-right group-hover:animation-pause inline-block w-max">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        <div className="-mx-4 flex justify-center gap-4">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
                                    <div className="mx-auto mb-10 w-full max-w-[370px]">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img src={member.imageSrc} alt={member.name} className="w-full" />
                                            <h3 className="absolute top-0 text-base mb-auto font-semibold text-dark dark:text-white">
                                                {member.name}
                                            </h3>
                                            <p className="absolute bottom-0 text-xs text-body-color text-white">
                                                {member.profession}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <Team /> */}
        </>
    )
}