import Image from "next/image"

export function Infinity() {
    return(
        <>
            <section className="bg-black text-white pt-8 pb-4">
                <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                    <div className="animate-slide-right group-hover:animation-pause inline-block w-max">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        <div className="relative mx-auto w-full max-w-[370px]">
                            <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg" alt="Transistor" />
                            <h1 className="absolute text-white top-0 left-4">The names</h1>
                            <p className="absolute text-white">The Work</p>
                        </div>
                        {/* <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/12105455/pexels-photo-12105455.jpeg" alt="Reform" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg" alt="Tuple" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/4183516/pexels-photo-4183516.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/29995591/pexels-photo-29995591.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/30289347/pexels-photo-30289347.jpeg" alt="Transistor" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/14639360/pexels-photo-14639360.jpeg" alt="Reform" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/32938136/pexels-photo-32938136.png" alt="Tuple" /> */}
                    </div>

                    {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
                    <div className="animate-slide-right group-hover:animation-pause inline-block w-max">
                        {/* Ensure that the images cover entire screen width for a smooth transition */}
                        {/* <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg" alt="Transistor" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/12105455/pexels-photo-12105455.jpeg" alt="Reform" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg" alt="Tuple" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/4183516/pexels-photo-4183516.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/29995591/pexels-photo-29995591.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg" alt="SavvyCal" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/30289347/pexels-photo-30289347.jpeg" alt="Transistor" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/14639360/pexels-photo-14639360.jpeg" alt="Reform" />
                        <Image width={200} height={600} className="mx-4 inline " src="https://images.pexels.com/photos/32938136/pexels-photo-32938136.png" alt="Tuple" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}