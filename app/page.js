import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection"

export default function Home() {
    return (
        <>
            <div className="left-padding right-padding">
                <Header />
            </div>
            <div className="left-padding">
                <HeroSection />
            </div>
            <div className="right-padding left-padding">
                <Footer />
            </div>
        </>
    );
}
