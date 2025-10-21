import Link from "next/link";
import Button from "../ui/Button";

const footerItems = [
  {
    title: "Our work",
    items: [
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "E-commerce stores",
        href: "/e-commerce-stores",
      },
      {
        label: "Business websites",
        href: "/business-websites",
      },
    ],
  },
];
const footerItems2 = [
  {
    title: "Let’s connect",
    items: [
      {
        label: "About us",
        href: "/about-us",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light-gray flex flex-col items-center justify-between pt-12 pb-9 text-sm lg:items-start">
      <div className="container">
        <div className="flex flex-col  justify-start w-full text-center px-5 lg:flex-row lg:text-left lg:px-0 lg:gap-[180px]">
          <div>
            <h3 className="text-2xl font-bold">BBAI</h3>
            <p className=" max-w-[340px] mx-auto text-dark-gray mt-2 mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>
            <Button>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div>
            <h4 className="text-base mb-4 mt-10 lg:mt-0">
              {footerItems[0].title}
            </h4>
            {footerItems[0].items.map((item) => (
              <p key={item.label} className="mb-2">
                <Link className="text-dark-gray" href={item.href}>
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
          <div>
            <h4 className="text-base mb-4 mt-10 lg:mt-0">
              {footerItems2[0].title}
            </h4>
            {footerItems2[0].items.map((item) => (
              <p key={item.label} className="mb-2">
                <Link className="text-dark-gray" href={item.href}>
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-4 w-full mt-12 justify-center lg:justify-start">
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Behance</Link>
          <Link href="/">Insights</Link>
        </div>
      </div>
    </footer>
  );
}
