import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { Section } from "../../../types/template"
import { HeroProps } from "../../../types/widgets"

const Hero = ({ settings: {title, description, buttonText, buttonLink, imgUrl} }: Section<HeroProps>) => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          {title}
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          {description}
        </p>
        <UnderlineLink href={buttonLink}>{buttonText}</UnderlineLink>
      </div>
      <Image
        src={imgUrl}
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt={title}
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
