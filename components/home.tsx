import Image from "next/image";
import bgImage from "@/app/assets/homepage-img1.svg";
import Navbar from "@/components/navBar";

const HomePage = () => {
  return (
    <main>
      <Image
        src={bgImage}
        alt="mountain range"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="-z-50"
      />
      <div className="w-full h-full flex flex-col items-center justify-center font-mono font-semibold text-7xl py-20">
        <h1 className="text-gray-700">LOSANGELES</h1>
        <h1 className="text-blue-900">MOUNTAINS</h1>
      </div>
    </main>
  );
};

export default HomePage;
