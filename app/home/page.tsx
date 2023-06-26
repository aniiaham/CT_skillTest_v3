import Image from "next/image"
import bgImage from "@/app/assets/homepage-img.svg"


const HomePage = () => {
  return (
    <div>
        Home
        <Image 
          src={bgImage}
          alt="mountain range"
        />
    </div>
  )
}

export default HomePage