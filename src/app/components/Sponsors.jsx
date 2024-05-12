import React from "react";
import { sponsors } from "./sponsorsList";
import Image from "next/image";
export default function Sponsors() {
  return (
    <section className="bg-blue-100 text-black pt-5 pb-5">
      <h3 className=" flex justify-center text-xl">Check out our Sponsors</h3>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-80 text-center mt-2"
          >
            <Image
              width={180}
              height={150}
              src={`/sponsors/${sponsor.src}.png`}
              alt={sponsor.name + " Logo"}
              className="rounded-sm"
            />
            <h3 className="text-md w-70">{sponsor.name}</h3>
            <p className="text-sm text-wrap w-70">{sponsor.description}</p>
            <p className="text-sm w-70">{sponsor.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
