"use client";

import ProjectStep from "../ui/ProjectStep";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Button from "../ui/Button";

const projectSteps = [
  {
    title: "ONBOARD",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
    <br />
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    title: "WIREFRAMES & CONCEPTS",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    title: "DESIGN & DEVELOPMENT",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
    <br />
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    title: "REVIEW & LAUNCH",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
];

export default function ProjectSteps() {
  return (
    <div className="pt-9 pb-12 lg:pt-24 lg:pb-16">
      <h2 className="text-secondary-white text-2xl uppercase lg:text-5xl">
        From vision to website
        <span className="text-light-violet"> — faster than you think.</span>
      </h2>
      <div className="mt-12">
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
          >
            {projectSteps.map((step) => (
              <SwiperSlide key={step.title}>
                <ProjectStep step={step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:flex gap-[114px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 w-2/3">
            {projectSteps.map((step) => (
              <ProjectStep key={step.title} step={step} />
            ))}
          </div>
          <div className="w-1/3">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
