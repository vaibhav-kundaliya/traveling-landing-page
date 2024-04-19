import Image from "next/image";
import React from "react";

function newslatter() {
    return (
        <div className="">
            <div className="relative w-8/12 py-20 px-20 bg-lightyellow flex flex-col m-auto rounded-3xl gap-8">
                <Image src="/svgs/dottraingle.svg" width={20} height={20} className="w-2/12 absolute mt-[-12%] ml-[-12%]"></Image>
                <div className="text-lightpink font-bold text-center">SUBSCRIBE TO OUT NEWSLATTER</div>
                <div className="font-bold text-4xl text-center text-wrap">Prepare yourself & let’s explore the beauty of the world</div>
                <div className="flex gap-5 justify-center">
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image src="/svgs/email.svg" width={20} height={20} />
                        </span>
                        <input type="email" placeholder="Email" class="pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <button class="bg-lightpurple-500 hover:bg-lightpurple-700 text-white text-xs px-6 py-3 rounded-lg">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default newslatter;
