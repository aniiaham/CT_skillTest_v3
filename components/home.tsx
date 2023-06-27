import Image from "next/image";
import bgImage from "@/app/assets/homepage-img1.svg";

const HomePage = () => {
  return (
    <main className="w-full h-screen relative">
      <Image
        src={bgImage}
        alt="mountain range"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="-z-50"
      />
      <div className="w-full flex flex-col items-center justify-center font-mono font-semibold text-7xl py-20">
        <h1 className="text-[#4D4D4D]">LOSANGELES</h1>
        <h1 className="text-[#414F6B]">MOUNTAINS</h1>
      </div>
    </main>
  );
};

export default HomePage;
