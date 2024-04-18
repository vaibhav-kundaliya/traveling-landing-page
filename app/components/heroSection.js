import React from "react";
import Image from "next/image";
function HeroSection() {
    return (
        <div className="flex flex-col-reverse sm:flex-row">
            <div className="sm:w-4/12 lg:w-5/12 pt-20 flex flex-col gap-8">
                <button class="bg-white w-44 text-lightpink font-bold text-xs py-3 px-4 rounded-full flex gap-5">
                    Explore the world!
                    <Image src="/svgs/bag.svg" width={15} height={15}></Image>
                </button>
                <div class="text-wrap text-5xl font-bold leading-[70px] pr-5 sm:pr-0">
                    Travel <span className="text-lightpink">top destination</span> of the world
                </div>
                <div class="text-wrap text-xs font-bold">We always make our customer happy by providing as many choices as possible </div>
                <div class="flex justify-start gap-5  ">
                    <button class="bg-lightpurple-500 text-white text-xs py-2 px-4 rounded-full">Get started</button>
                    <button class="bg-white font-bold text-xs py-2 px-4 rounded-full flex gap-3">
                        <Image src="/svgs/playbutton.svg" width={15} height={15}></Image>
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="w-full bg-heroSection bg-no-repeat">
                <div className="flex gap-5 pt-20 pl-5 custom_xs:pl-20 lg:pl-28 flex-col custom_xs:flex-row">
                    <div className="flex flex-col gap-7">
                        <div className="relative">
                            <div className="absolute bg-lightpink p-2 rounded-full bottom-[-6%] left-[-5%]">
                                <Image src="/svgs/arrow.svg" width={20} height={20} className="object-cover"></Image>
                            </div>
                            <div className="w-44 h-64 lg:w-[200px]">
                                <Image src="/images/img2.jpg" width={250} height={300} className="rounded-3xl h-64 object-cover"></Image>
                            </div>
                        </div>
                        <div className="w-44 h-64 lg:w-[200px]">
                            <Image src="/images/img1.jpg" width={250} height={300} className="rounded-3xl h-64 object-cover"></Image>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly relative">
                        <div>
                            <div className="absolute bg-lightorange p-2 rounded-full bottom-0 left-[30%]">
                                <Image src="/svgs/adduser.svg" width={20} height={20} className="object-cover"></Image>
                            </div>
                            <button class="absolute flex gap-2 self-center bg-white lg:bottom-[30%] bottom-[40%] left-[0] sm:left-[50%] sm:right-[-30%] text-xs py-2 px-6 rounded-full content-center">
                                <Image src="/svgs/locationpin.svg" width={15} height={15} className="object-cover"></Image>
                                <span>Top Places</span>
                            </button>
                            <div className="w-44 h-64 lg:w-[200px]">
                                <Image src="/images/img3.jpg" width={250} height={300} className="rounded-3xl object-cover h-72"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
