interface ProjectStepProps {
  title: string;
  description: React.ReactNode;
  time: string;
}

export default function ProjectStep({ step }: { step: ProjectStepProps }) {
  return (
    <div className="bg-light-black py-4 px-6 rounded-xl relative">
      <p className="relative pl-2.5 text-light-gray  after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:bg-green-500 after:rounded-full">
        {step.time}
      </p>
      <h3 className="text-light-gray pt-4 pb-9 text-2xl">{step.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: step.description as string }} />
    </div>
  );
}
