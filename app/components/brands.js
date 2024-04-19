import React from "react";
import Image from "next/image";

function Brands() {
  const brandImages = [
    "/svgs/tripadviser.svg",
    "/svgs/expedia.svg",
    "/svgs/bookingcom.svg",
    "/svgs/airbnb.svg",
    "/svgs/rbitz.svg"
  ];

  return (
    <div className="flex justify-evenly flex-wrap gap-y-5 gap-x-5">
      {brandImages.map((src, index) => (
        <div key={index} className="self-center">
          <Image src={src} width={150} height={32} />
        </div>
      ))}
    </div>
  );
}

export default Brands;
