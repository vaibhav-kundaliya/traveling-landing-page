import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Brands from "./components/brands";
import Services from "./components/services";
import TravelPoint from "./components/travelPoint";
import NewsLatter from "./components/newslatter";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="gradiant-1"></div>
            <div className="gradiant-2"></div>
            <div className="gradiant-3"></div>
            
            <div className="">
                <Header />
            </div>
            <div className="left-padding">
                <HeroSection />
            </div>
            <div className="my-20 relative">
                <Image src="/svgs/triangle.svg" width={50} height={130} className="absolute right-5 lg:right-[90%] bottom-[100%] hidden sm:block" />
                <Brands />
            </div>
            <div className="left-padding ">
                <Services />
            </div>
            <div>
                <TravelPoint />
            </div>
            <div className="mt-10 md:mt-5 pb-10">
                <NewsLatter />
            </div>
            <div className="right-padding left-padding mt-10">
                <Footer />
            </div>
        </>
    );
}
