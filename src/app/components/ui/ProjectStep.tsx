interface ProjectStepProps {
  title: string;
  description: React.ReactNode;
  time: string;
}

export default function ProjectStep({ step }: { step: ProjectStepProps }) {
  return (
    <div className="bg-light-black">
      <p>{step.time}</p>
      <h3>{step.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: step.description as string }} />
    </div>
  );
}
