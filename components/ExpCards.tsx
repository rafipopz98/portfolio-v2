import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "June, 2024 — Present",
    currentPosition: "Senior Software Engineer",
    place: "VirtualStaff.ph",
    previousPositions: ["Software Engineer"],
    description: [
      "At VirtualStaff.ph, I've been building and maintaining the core product and its features.",
      "My role mainly involves developing scalable APIs, integrating with the frontend, and building interactive user interfaces.",
      "I also played a key role in our payment systems, helping launch a new product that now processes 350+ transactions every month and generates over $35K in monthly profits.",
      "I introduced a new algorithm for talent salary recommendations.",
      "Cross-collaborated with the marketing team to build a custom Google Analytics page and implemented 50+ internal features to boost SEO, publish blog posts, and track user engagement.",
      "Worked closely with the customer support team to build an admin panel with hundreds of features for managing users and their data.",
    ],
    skills: [
      "MERN Stack",
      "Next.js",
      "Go Lang",
      "Docker",
      "Kafka",
      "Stripe",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    timeline: "Jan, 2024 - May, 2024",
    currentPosition: "Unity Developer",
    place: "Indian Space Research Organisation (ISRO)",
    previousPositions: [""],
    description: [
      "Worked with Unity to build simulations for space missions. Connected a 6DOF engine written in C++ to the simulations in Unity through shared memory access.",
      "Reduced the latency in communication between Unity gameplay and the 6DOF engine by shifting from UDP mode of communication to shared memory access.",
    ],
    skills: ["C#", "C++", "Unity", "Computer Networks"],
  },
  {
    timeline: "June 2023 - June 2024",
    currentPosition: "Software Engineer",
    place: "Quantum Strategies",
    previousPositions: [""],
    description: [
      "Early-stage startup with a team of 3.",
      "Engineered and built a comprehensive backend system from scratch, utilizing TDD principles to ensure robust and maintainable code.",
      "Developed a user-friendly frontend interface, integrating seamlessly with the backend services.",
      "Built real-time notifications, events, points system, and an admin panel to manage users and many additional features.",
      "Implemented CI/CD pipelines to automate testing and deployment processes, enhancing development efficiency and product reliability.",
      "Collaborated with QA engineers and product managers to successfully launch the product before the deadline.",
    ],
    skills: [
      "MERN Stack",
      "TypeScript",
      "Websockets",
      "PostgreSQL",
      "Redis",
      "Testing & QA",
    ],
  },
  {
    timeline: "Jan, 2021 — June 2023",
    currentPosition: "Full Stack Developer",
    place: "Freelancer",
    previousPositions: [
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
    ],
    description: [
      "Worked as a freelancer, building various projects for organizations and individuals.",
      "Developed a wide range of applications, including e-commerce platforms, content management systems, and 3D interior and exterior showcasing applications.",
      "Designed UI/UX for multiple clients and assisted sophomore students with their final year projects.",
    ],
    skills: [
      "MERN Stack",
      "Next.js",
      "Go Lang",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Figma",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description.map((paragraph, idx) => (
                  <p className="text-xs py-3" key={idx}>
                    {paragraph.trim()}
                  </p>
                ))}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12 flex gap-8">
        <a
          href="https://drive.google.com/file/d/19eiZJqZPshH74sJVB6knH90_p81t1uvG/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
        <a
          href="/Muhammad Rafi.pdf"
          download
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Download Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
