import React from "react";
import Image from "next/image";
function footer() {
    return (
        <div className="flex flex-col justify-between md:flex-row gap-10">
            <div className="w-8/12 flex flex-col gap-5 md:w-3/12">
                <div className="items-center flex gap-2">
                    <Image className="h-8 w-auto" src="./svgs/logo.svg" width={100} height={100} alt="Your Company" />
                    <div className="font-extrabold text-xl">Travlog</div>
                </div>
                <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
                <div className="flex items-center space-x-7">
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <Image src="./svgs/facebook.svg" height={32} width={32}></Image>
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <Image src="./svgs/twitter.svg" height={32} width={32}></Image>
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <Image src="./svgs/instagram.svg" height={32} width={32}></Image>
                    </a>
                </div>
            </div>

            <div className="flex flex-col justify-between md:w-8/12 custom_xs:flex-row gap-10">
                <div className="flex flex-col gap-4">
                    <div className="font-bold">Company</div>
                    <div>About</div>
                    <div>Career</div>
                    <div>Mobile</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold">Contact Us</div>
                    <div>Why Travlog ?</div>
                    <div>Partner with us</div>
                    <div>FAQ's</div>
                    <div>Blog</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold">Meet Us</div>
                    <div>+00 92 1234 56789</div>
                    <div>info@travlog.com</div>
                    <div>
                        205. R Street, New York <br />
                        BD23200
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;
