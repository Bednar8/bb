import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={"/assets/baner.jpg"} alt="Baner" width={500} height={100} />
    </div>
  );
}
