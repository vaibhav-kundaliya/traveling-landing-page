import React from "react";
import Image from "next/image";

function brands() {
    return (
        <div className="flex justify-evenly">
            <div className="self-center">
                <Image src="/svgs/tripadviser.svg" width={150} height={32} />
            </div>
            <div className="self-center">
                <Image src="/svgs/expedia.svg" width={150} height={32} />
            </div>
            <div className="self-center">
                <Image src="/svgs/bookingcom.svg" width={150} height={32} />
            </div>
            <div className="self-center">
                <Image src="/svgs/airbnb.svg" width={150} height={32} />
            </div>
            <div className="self-center">
                <Image src="/svgs/rbitz.svg" width={150} height={32} />
            </div>
        </div>
    );
}

export default brands;
