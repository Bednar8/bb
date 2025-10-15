import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#0e0e0e_0%,#1b0f1f_60%,#2c2230_100%)] text-light-gray py-11 relative overflow-hidden lg:h-[500px]">
      <div className="lg:relative container">
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
          width={1200}
          height={600}
          className="hidden lg:block absolute top-[-50px] right-[-500px]"
        />
        <div className="mx-auto  mt-[150px] lg:mt-0 lg:mx-0 lg:w-1/2">
          <p className="text-xs">Lorem ipsum</p>
          <h1 className="text-2xl mt-1.5 mb-3">
            DESIGN THAT ELE
            <span className="text-light-violet">
              VATES YOUR DIGITAL PRESENCE
            </span>
          </h1>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s,
          </p>
          <div className="flex justify-center items-center mt-11 lg:justify-start">
            <Button type="light">Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
