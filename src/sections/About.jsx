import MotionReveal from "../components/MotionReveal";
import { Eye, ListChecks, Workflow } from "lucide-react";

function Principle({ icon, title, text }) {
  const PrincipleIcon = icon;

  return (
    <div className="border-t border-slate-200 pt-5">
      <div className="flex items-center gap-2 text-sky-600">
        <PrincipleIcon className="h-4 w-4" />
        <p className="text-sm font-medium text-slate-950">{title}</p>
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function About() {
  const principles = [
    {
      title: "Clarity before complexity",
      text: "The right answer is usually a cleaner workflow, clearer ownership, and a reporting view people can maintain.",
      icon: Eye,
    },
    {
      title: "Built for real work",
      text: "Systems should reflect how teams sell, deliver, follow up, reconcile data, and make decisions day to day.",
      icon: Workflow,
    },
    {
      title: "Practical next steps",
      text: "Every engagement is designed to leave behind decisions, priorities, and operating artifacts that move the business forward.",
      icon: ListChecks,
    },
  ];

  return (
    <section id="about" className="border-t border-slate-200 bg-transparent py-24 md:py-32">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              About Visible Gap
            </p>

            <h2 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Boutique systems consulting for operators who need to see the work clearly
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08} className="space-y-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Visible Gap focuses on the problems that sit between systems,
              workflows, reporting, and execution. The work is especially useful
              for staffing and workforce teams with complex handoffs, and for SMB
              operators whose tools have grown faster than their processes.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The goal is to reduce operational noise, clarify what is happening,
              and build practical systems that make leadership, sales, service,
              operations, and ownership decisions easier.
            </p>

            <div className="grid gap-8 pt-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <Principle key={principle.title} {...principle} />
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
