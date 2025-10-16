import Image from "next/image";
import Button from "../ui/Button";
import DiscountBadge from "../ui/DiscountBadge";
import HeroStatistics from "../ui/HeroStatistics";

export default function Hero() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#0e0e0e_0%,#1b0f1f_60%,#2c2230_100%)] text-light-gray py-11 relative overflow-hidden lg:pb-0 lg:h-[600px]">
      <div className="lg:relative container h-full">
        <Image
          src="/assets/shapes/baner_shape_mobile.png"
          alt=""
          width={450}
          height={300}
          className="absolute top-0 left-1/2 -translate-x-1/2 max-w-[unset] lg:hidden"
        />
        <Image
          src="/assets/shapes/baner_shape_desktop.png"
          alt=""
          width={1250}
          height={600}
          quality={100}
          className="hidden lg:block absolute bottom-0 right-[-500px]"
        />
        <div className="mx-auto  mt-[150px] lg:mt-0 lg:mx-0 lg:w-1/2">
          <DiscountBadge />
          <h1 className="text-2xl mt-1.5 mb-3 lg:text-5xl">
            DESIGN THAT TRA
            <span className="text-light-violet">
              NSFORMS YOUR DIGITAL PRESENCE
            </span>
          </h1>
          <p className="text-xs lg:text-base max-w-[470px] mb-4 lg:mb-9">
            We craft modern, high-performing websites that help businesses grow
            and stand out online.
          </p>
          <HeroStatistics />
          <div className="flex justify-center items-center mt-11 lg:justify-start">
            <Button type="light">Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
