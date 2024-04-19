import React from "react";
import Image from "next/image";

// ServiceCard component
function ServiceCard({ iconSrc, title, description }) {
  return (
    <div className="flex flex-col w-[300px] h-[350px] items-center gap-8 py-12 rounded-2xl card-shadow">
      <Image src={iconSrc} width={45} height={45}></Image>
      <div className="flex flex-col text-wrap w-[70%] text-center gap-4">
        <div className="text-xl font-extrabold">{title}</div>
        <div className="text-md font-regular">{description}</div>
      </div>
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      iconSrc: "/svgs/earth.svg",
      title: "Best Tour Guide",
      description: "What looked like a small patch of purple grass, above five feet."
    },
    {
        iconSrc: "/svgs/easybooking.svg",
        title: "Easy Bookin",
        description: "Square, was moving across the sand in their direction."
      },
      {
        iconSrc: "/svgs/cloudy.svg",
        title: "Weather Forecast",
        description: "What looked like a small patch of purple grass, above five feet."
      },
    // Add more service objects as needed
  ];

  return (
    <div className="flex  gap-5 relative h-[400px] overflow-scroll flex-row">
      <div className="w-[300px] flex flex-col mt-16">
        <div className="text-lightpink font-bold">SERVICES</div>
        <div className="font-bold text-4xl text-wrap">Our top value categories for you</div>
      </div>
      <div className="sticky flex gap-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
