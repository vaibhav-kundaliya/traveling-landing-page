import React from "react";
import Image from "next/image";

function services() {
    return (
        <div className="flex gap-5 relative h-[400px]">
            <div className="w-4/12 flex flex-col justify-center">
                <div className="text-lightpink font-bold">SERVICES</div>
                <div className="font-bold text-4xl text-wrap">Our top value categories for you</div>
            </div>
            <div className="flex absolute gap-4 right-[-200px]">
                <div className="flex flex-col w-[300px] h-[350px] items-center gap-8 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-xl font-extrabold">Best Tour Guide</div>
                        <div className="text-md font-regular">What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[350px] items-center gap-8 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-xl font-extrabold">Best Tour Guide</div>
                        <div className="text-md font-regular">What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[350px] items-center gap-8 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-xl font-extrabold">Best Tour Guide</div>
                        <div className="text-md font-regular">What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default services;
