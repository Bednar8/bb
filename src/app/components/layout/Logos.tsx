import LogoLoop from "@/app/components/external/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Logos() {
  return (
    <div
      className="mt-9 lg:mt-24"
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        // fadeOut
        // fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
