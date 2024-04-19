import React from "react";
import Image from "next/image";

function travelPoint() {
    return (
        <>
            <div className="flex gap-5 flex-col sm:flex-row">
                <div className="relative sm:w-7/12 w-full">
                    <Image src="/svgs/rectangle.svg" width={200} height={100} className="absolute w-9/12 mt-[7%]" />
                    <Image src="/images/traveller.png" width={400} height={300} className="w-8/12 ml-14 absolute" />
                    <Image src="/svgs/orangedot.svg" width={32} height={32} className="absolute  top-[70%] right-[30%]" />
                    <Image src="/svgs/orangedot.svg" width={15} height={15} className="absolute  top-32 left-16 sm:top-[50%] sm:right-[40%]" />
                    <Image src="/svgs/yellowdot.svg" width={40} height={40} className="absolute w-5 top-16 right-12 sm:right-[10%] sm:top-[40%]" />
                    <Image src="/svgs/purpledot.svg" width={40} height={40} className="absolute w-5 top-10 left-14 sm:top-[5%] sm:left-[14%]" />
                    <Image src="/svgs/purpledot.svg" width={96} height={96} className="absolute w-10 top-40 right-16 sm:top-[2%] sm:right-[20%]" />
                </div>
                <div className="flex flex-col sm:w-4/12 gap-5 w-full mt-[70%] sm:mt-0">
                    <div className="text-lightpink font-bold">TRAVEL POINT</div>
                    <div className="font-bold text-4xl text-wrap">We helping you find your dream location</div>
                    <div className="text-md font-regular">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
                    <div className="hidden md:block">
                        <div class="grid grid-cols-2 gap-4 relative">
                            <div className="absolute bg-yellow-400 p-4 rounded-full right-[-10%] top-[-10%]">
                                <Image src="/svgs/ticket.svg" height={30} width={30}></Image>
                            </div>
                            <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                                <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                                <div>Holiday Package</div>
                            </div>
                            <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                                <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                                <div>Holiday Package</div>
                            </div>
                            <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                                <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                                <div>Holiday Package</div>
                            </div>
                            <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                                <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                                <div>Holiday Package</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden mt-5">
                <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
                    <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                        <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                        <div>Holiday Package</div>
                    </div>
                    <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                        <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                        <div>Holiday Package</div>
                    </div>
                    <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                        <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                        <div>Holiday Package</div>
                    </div>
                    <div class="border-gray-300 border border-solid text-center p-5 rounded-3xl">
                        <div className="text-4xl font-semibold mb-3 text-lightorange">500+</div>
                        <div>Holiday Package</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default travelPoint;
