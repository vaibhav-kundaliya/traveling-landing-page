import React from "react";
import Image from "next/image";

// SocialLinks component
function SocialLinks() {
  return (
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
  );
}

// FooterLinkList component
function FooterLinkList({ title, links }) {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="font-bold">{title}</div>
      {links.map((link, index) => (
        <div key={index} className="text-lightgray">{link}</div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col justify-between md:flex-row gap-10">
      <div className="w-8/12 md:w-3/12 flex flex-col gap-5">
        <div className="items-center flex gap-2">
          <Image className="h-8 w-auto" src="./svgs/logo.svg" width={100} height={100} alt="Your Company" />
          <div className="font-extrabold text-xl">Travlog</div>
        </div>
        <div className="text-lightgray font-extrabold">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
        </div>
        <SocialLinks />
      </div>

      <div className="md:w-8/12 custom_xs:flex-row flex flex-col justify-between gap-10">
        <FooterLinkList
          title="Company"
          links={["About", "Career", "Mobile"]}
        />
        <FooterLinkList
          title="Contact Us"
          links={["Why Travlog ?", "Partner with us", "FAQ's", "Blog"]}
        />
        <div className="flex flex-col gap-4">
          <div className="font-bold">Meet Us</div>
          <div className="text-lightgray">+00 92 1234 56789</div>
          <div className="text-lightgray">info@travlog.com</div>
          <div className="text-lightgray">
            205. R Street, New York <br />
            BD23200
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
