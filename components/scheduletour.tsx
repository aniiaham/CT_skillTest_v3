import Image from "next/image";
import ScheduleTourImg from "@/app/assets/scheduletour-img.svg";
import HText from "./shared/HText";

const ScheduleTour = () => {
  return (
    <section id="team" className="h-screen w-full">
      <div className="flex flex-col py-10 mx-auto container">
        <div className="flex flex-row w-full gap-6">
          <div className="flex">
            <span className="text-9xl text-gray-500 font-extrabold h-full">
              02
            </span>
            <div className="flex flex-col justify-end pb-4">
              <HText>CLIMB</HText>
              <div className="h-5 w-5 bg-slate-700/20" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900/90 w-full flex flex-col items-start p-4">
        <div className="flex flex-row gap-8 justify-start items-start ml-8 text-gray-300 text-xl font-bold">
          <p>MOUNTAIN 1</p>
          <p>MOUNTAIN 2</p>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <Image
          src={ScheduleTourImg}
          alt="tour mauntains"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="-z-50"
        />
        <div>
          <div className="h-60 w-80 bg-slate-700/20">
            <HText>SCHEDULE</HText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTour;
