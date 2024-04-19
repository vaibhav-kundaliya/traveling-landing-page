import React from "react";
import Image from "next/image";

const stats = [
    {
        count: "500+",
        name: "Holiday Package",
    },
    {
        count: "100",
        name: "Luxury Hotel",
    },
    {
        count: "7",
        name: "Premium Airlines",
    },
    {
        count: "2k+",
        name: "Happy Customer",
    },
];

function travelPoint() {
    return (
        <div>
            <div className="flex gap-5 flex-col sm:flex-row">
                <div className="relative sm:w-7/12 w-full">
                    <button class="absolute z-10 flex gap-2 self-center bg-white top-[70%] sm:top-[50%] lg:top-[20%] lg:right-[20%] right-0 text-lg lg:text-2xl font-semibold py-2 px-6 rounded-full content-center button-shadow">
                        <Image
                            src="/svgs/discount.svg"
                            width={30}
                            height={30}
                            className="object-cover"
                        ></Image>
                        <span>Discounted Price</span>
                    </button>
                    <Image
                        src="/svgs/rectangle.svg"
                        width={200}
                        height={100}
                        className="absolute w-9/12"
                    />
                    <Image
                        src="/images/traveller.png"
                        width={400}
                        height={300}
                        className="w-8/12 ml-14 -translate-y-16"
                    />
                    <Image
                        src="/svgs/orangedot.svg"
                        width={32}
                        height={32}
                        className="absolute  top-[70%] right-[30%]"
                    />
                    <Image
                        src="/svgs/orangedot.svg"
                        width={15}
                        height={15}
                        className="absolute  top-32 left-16 sm:top-[50%] sm:right-[40%]"
                    />
                    <Image
                        src="/svgs/yellowdot.svg"
                        width={40}
                        height={40}
                        className="absolute w-5 top-16 right-12 sm:right-[10%] sm:top-[40%]"
                    />
                    <Image
                        src="/svgs/purpledot.svg"
                        width={40}
                        height={40}
                        className="absolute w-5 top-10 left-14 sm:top-[5%] sm:left-[14%]"
                    />
                    <Image
                        src="/svgs/purpledot.svg"
                        width={96}
                        height={96}
                        className="absolute w-10 top-40 right-16 sm:top-[2%] sm:right-[20%]"
                    />
                </div>
                <div className="flex flex-col sm:w-3/12 gap-5 w-full sm:mt-0">
                    <div className="text-lightpink font-bold">TRAVEL POINT</div>
                    <div className="font-bold text-4xl text-wrap ">
                        We helping you find <br/>your dream location
                    </div>
                    <div className="text-lg font-regular text-lightgray font-bold">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </div>
                    <div className="hidden md:block">
                        <div class="grid grid-cols-2 gap-4 relative">
                            <div className="absolute bg-yellow-400 p-4 rounded-full right-[-10%] top-[-10%]">
                                <Image
                                    src="/svgs/ticket.svg"
                                    height={30}
                                    width={30}
                                ></Image>
                            </div>

                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    class="border-gray-300 border border-solid text-center p-5 rounded-3xl"
                                >
                                    <div className="text-4xl font-semibold mb-3 text-lightorange">
                                        {item.count}
                                    </div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden mt-5">
                <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            class="border-gray-300 border border-solid text-center p-5 rounded-3xl"
                        >
                            <div className="text-4xl font-semibold mb-3 text-lightorange">
                                {item.count}
                            </div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default travelPoint;
