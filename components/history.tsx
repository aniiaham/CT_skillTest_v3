import Image from "next/image";
import bgHistoryImg from "@/app/assets/historypage-img.svg";
import HText from "@/components/shared/HText";
import HumanImg from "@/app/assets/human.svg";
import MountainsImg from "@/app/assets/mountains.svg";

const imageArray = [
  {
    src: HumanImg,
    alt: "human",
  },
  {
    src: MountainsImg,
    alt: "mountains",
  },
  {
    src: HumanImg,
    alt: "human",
  },
  {
    src: MountainsImg,
    alt: "mountains",
  },
];

const History = () => {
  return (
    <section
      id="history"
      className="w-full h-screen relative flex flex-col justify-between"
    >
      <Image
        src={bgHistoryImg}
        alt="mountains"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="-z-50"
      />
      <div className="flex flex-col w-full py-20  container mx-auto">
        <div className="flex flex-row w-full">
          <span className="text-9xl text-gray-500 font-extrabold h-full">
            01
          </span>
          <div className="flex flex-col justify-end pb-3">
            <HText>HISTORY</HText>
            <div className="h-5 w-5 bg-slate-700/20" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex. laculis sed erat sed. blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc.
            gravida quis hendrerit ac. tristique ut auam. Vivamus suscipit
            dignissim tortor nec congue
          </p>
        </div>
      </div>
      <div className="bg-blue-900/50 w-full mt-10 flex flex-col items-center justify-center p-10">
        <ul className="flex w-full gap-7 justify-center overflow-x-scroll">
          {imageArray.map((item) => (
            <Image
              src={item.src}
              alt={item.alt}
              className="w-[220px] h-[120px]"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default History;
