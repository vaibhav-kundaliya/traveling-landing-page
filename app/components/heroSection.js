import React from "react";
import Image from "next/image";
function HeroSection() {
    return (
        <div className="flex">
            <div className="w-3/12">Hello</div>
            <div className="w-9/12 bg-heroSection bg-no-repeat">
                <div className="flex gap-7 py-24 px-24">
                    <div className="flex flex-col gap-7">
                        <div>
                            <div className="absolute bg-lightpink p-3 rounded-full bottom-[-5%]">
                                <Image
                                    src="/svgs/arrow.svg"
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                ></Image>
                            </div>
                            <Image
                                src="/images/img2.jpg"
                                width={272}
                                height={300}
                                className="rounded-3xl h-72 object-cover"
                            ></Image>
                        </div>
                        <div>
                            <Image
                                src="/images/img1.jpg"
                                width={272}
                                height={300}
                                className="rounded-3xl h-72 object-cover"
                            ></Image>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <Image
                                src="/images/img3.jpg"
                                width={272}
                                height={300}
                                className="rounded-3xl h-100 object-cover"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
