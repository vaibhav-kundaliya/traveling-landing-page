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
            <div className="left-padding right-padding">
                <Header />
            </div>
            <div className="left-padding">
                <HeroSection />
            </div>
            <div className="my-10 relative">
                <Image src="/svgs/triangle.svg" width={50} height={130} className="absolute bottom-0 left-5" />
                <Brands />
            </div>
            {/* <div className="left-padding">
                <Services />
            </div> */}
            <div className="my-10">
                <TravelPoint />
            </div>
            <div className="py-20">
                <NewsLatter />
            </div>
            <div className="right-padding left-padding">
                <Footer />
            </div>
        </>
    );
}
