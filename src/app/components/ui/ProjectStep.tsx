import { ProjectStepProps } from "../layout/ProjectSteps";

export default function ProjectStep({
  step,
  onHover,
}: {
  step: ProjectStepProps;
  onHover: (id: number) => void;
}) {
  return (
    <div
      className="bg-light-black py-4 px-6 rounded-xl relative"
      onMouseEnter={() => onHover(step.id)}
    >
      <p className="relative pl-2.5 text-light-gray  after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:bg-green-500 after:rounded-full">
        {step.time}
      </p>
      <h3 className="text-light-gray pt-4 pb-9 text-2xl">{step.title}</h3>
      <div
        className="lg:hidden"
        dangerouslySetInnerHTML={{ __html: step.description as string }}
      />
    </div>
  );
}
