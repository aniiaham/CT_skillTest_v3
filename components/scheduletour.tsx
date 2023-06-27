import Image from "next/image";
import ScheduleTourImg from "@/app/assets/scheduletour-img.svg";
import HText from "./shared/HText";

const ScheduleTour = () => {
  return (
    <section id="team" className="h-screen w-full">
      <div className="flex flex-col py-10 mx-auto container">
        <div className="flex flex-row w-full gap-6">
          <div className="flex">
            <span className="text-9xl text-[#B0B4BE] font-extrabold h-full">
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
      <div className="bg-[#414F6B] w-full flex flex-col items-start p-4">
        <div className="flex flex-row gap-8 justify-start items-start ml-10 text-[#B0B4BE] text-xl font-bold">
          <p className="underline underline-offset-2">MOUNTAIN 1</p>
          <p>MOUNTAIN 2</p>
        </div>
      </div>
      <div className="w-full h-[75vh] relative">
        <Image
          src={ScheduleTourImg}
          alt="tour mauntains"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="-z-50"
        />
        <div className="flex items-center max-w-3xl justify-center pt-40 ">
          <div className="bg-slate-100/80 flex flex-col items-start justify-center w-full max-w-sm p-6">
            <HText>SCHEDULE</HText>
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="grid">
                <div className="grid grid-cols-2">
                  <p className="col-span-1 col-start-1 col-end-1">
                    25 Nov 2016
                  </p>
                  <p className="col-span-1 col-start-2 col-end-2">
                    Vactibulum sivorre
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="col-span-1 col-start-1 col-end-1">
                    28 Nov 2016
                  </p>
                  <p className="col-span-1 col-start-2 col-end-2">
                    Vactibulum sivorre
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <p className="col-span-1 col-start-1 col-end-1">18 Dec 016</p>
                <p className="col-span-1 col-start-2 col-end-2">
                  Vactibulum sivorre
                </p>
              </div>

              <div className="grid grid-cols-2">
                <p className="col-span-1 col-start-1 col-end-1">7 Jan 2017</p>
                <p className="col-span-1 col-start-2 col-end-2">
                  Vactibulum sivorre
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#414F6B] bottom-0 w-full p-10">
        <p className="text-[#5D6F94] flex justify-end">
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </section>
  );
};

export default ScheduleTour;
