import Image from "next/image";
import React from "react";

function newslatter() {
    return (
        <div className="">
            <div className="relative w-9/12 lg:w-5/12 py-20 px-2 sm:px-10 bg-lightyellow flex flex-col m-auto rounded-3xl gap-8">
                <Image src="/svgs/dottraingle.svg" width={40} height={40} className="w-3/12 lg:w-2/12 absolute top-[-30px] left-[-30px] lg:top-[-20px] lg:left-[-20px] hidden sm:block"></Image>
                <div className="text-lightpink font-bold text-center">SUBSCRIBE TO OUT NEWSLATTER</div>
                <div className="font-bold text-4xl text-center text-wrap">Prepare yourself & let’s explore the beauty of the world</div>
                <div className="flex gap-5 justify-center flex-col w-full lg:flex-row">
                    <div class="relative w-10/12 m-auto">
                        <span class="absolute w-full inset-y-0 left-0 flex items-center pl-3">
                            <Image src="/svgs/email.svg" width={20} height={20} />
                        </span>
                        <input type="email" placeholder="Email" class="pl-10 pr-4 py-4 w-full rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <button class="bg-lightpurple-500 m-auto hover:bg-lightpurple-700 text-white text-md px-6 py-3 rounded-2xl w-5/12">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default newslatter;
