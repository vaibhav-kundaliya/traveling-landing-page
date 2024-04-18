import React from "react";
import Image from "next/image";

function services() {
    return (
        <div className="flex">
            <div className="w-7/12">
                <div className="">SERVICES</div>
                <div className="">Our top value categories for you</div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col w-[250px] items-center gap-8 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-sm">Best Tour Guide</div>
                        <div>What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>
                <div className="flex flex-col w-[250px] items-center gap-10 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-sm">Best Tour Guide</div>
                        <div>What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>
                <div className="flex flex-col w-[250px] items-center gap-10 bg-red-600 py-12 rounded-2xl">
                    <Image src="/svgs/earth.svg" width={45} height={45}></Image>
                    <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
                        <div className="text-sm">Best Tour Guide</div>
                        <div>What looked like a small patch of purple grass, above five feet.</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default services;
