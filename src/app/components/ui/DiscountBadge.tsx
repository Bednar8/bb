import Image from "next/image";

export default function DiscountBadge() {
  return (
    <div className="flex items-center w-fit bg-[#1B1B1D] text-[#9A999E] rounded-md border border-[#302F36] border-l-0">
      <span className="bg-[#302F36]  flex items-center justify-center w-[28px] h-[28px] rounded-sm">
        <Image
          src="/assets/icons/percent.svg"
          alt="percent"
          width={16}
          height={15}
        />
      </span>

      <p className="px-4 rounded-sm rounded-l-none">
        <span className="text-[#DEDAEA]">5%</span> DISCOUNT FIRST PROJECT
      </p>
    </div>
  );
}
