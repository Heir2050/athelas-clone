// composant/Team.tsx
import React from "react";
import { teamMembers } from "@/lib/team";

const Team = () => {
    return (
        <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="overflow-hidden w-full">
                    <div className="flex animate-slide-right">
                        {teamMembers.concat(teamMembers).map((member, index) => (
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
    );
};

export default Team;
