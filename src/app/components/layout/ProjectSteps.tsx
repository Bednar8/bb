"use client";

import ProjectStep from "../ui/ProjectStep";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import DiscountBadge from "../ui/DiscountBadge";

export type ProjectStepProps = {
  id: number;
  title: string;
  description: string;
  time: string;
};

const projectSteps: ProjectStepProps[] = [
  {
    id: 1,
    title: "ONBOARD",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
    <br />
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    id: 2,
    title: "WIREFRAMES & CONCEPTS",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    id: 3,
    title: "DESIGN & DEVELOPMENT",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
    <br />
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
  {
    id: 4,
    title: "REVIEW & LAUNCH",
    description: `<p>We create initial layout structures and visual concepts to define the website’s style and navigation flow.</p>
      <p> The approved concept is turned into a functional website with responsive design and interactive elements.</p>`,
    time: "5 - 7 DAYS",
  },
];

export default function ProjectSteps() {
  const [currentStep, setCurrentStep] = useState<ProjectStepProps | null>(
    projectSteps[0]
  );

  const handleHover = (id: number) => {
    setCurrentStep(projectSteps.find((step) => step.id === id) || null);
  };

  return (
    <div className="pt-9 pb-12 lg:pt-24 lg:pb-16">
      <h2 className="text-secondary-white text-2xl uppercase lg:text-5xl">
        From vision to website
        <span className="text-light-violet"> — faster than you think.</span>
      </h2>
      <div className="mt-12 lg:mt-16">
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {projectSteps.map((step) => (
              <SwiperSlide key={step.title}>
                <ProjectStep step={step} onHover={handleHover} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:flex gap-[114px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 w-2/3">
            {projectSteps.map((step) => (
              <ProjectStep key={step.title} step={step} onHover={handleHover} />
            ))}
          </div>
          <div className="w-1/3">
            <DiscountBadge />
            <div className="h-[350px]">
              {currentStep && (
                <div key={currentStep.id} className="animate-fadeIn">
                  <h3 className="text-secondary-white uppercase lg:text-5xl pt-3 pb-4">
                    {currentStep.title}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: currentStep.description as string,
                    }}
                  />
                </div>
              )}
            </div>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
