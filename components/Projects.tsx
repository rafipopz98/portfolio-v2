import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/virtualstaff.png",
    title: "VirtualStaff Core Product",
    description:
      "An all-in-one platform that connects employers with Filipino talent, offering hiring, payroll, and compliance in one place.",
    skills: [
      "Backend Development",
      "Frontend Development",
      "CI/CD",
      "Stripe",
      "Figma",
    ],
    link: "https://app.virtualstaff.ph",
  },
  {
    imagePath: "/site-admin.png",
    title: "Marketing Dashboard",
    description:
      "A marketing dashboard and admin panel that lets the team publish content, manage job postings, and track performance with built-in analytics.",
    skills: [
      "Mongo Aggregation",
      "UI/UX Design",
      "Design System",
      "Full Stack Development",
      "Figma",
    ],
    link: "https://site-admin.virtualstaff.ph/",
  },
  {
    imagePath: "/staffadoo.png",
    title: "Staffadoo",
    description: `Team of 4 built a platform that connects talent with Employers. We Offer Talents to Employers, So 
    Employers can find the best talents for their company and Talents can find their dream job.`,
    skills: [
      "Next.js",
      "Admin Panel",
      "User Management",
      "Shadcn/ui",
      "Typescript",
      "Figma",
    ],
    link: "https://app.staffadoo.com/",
  },
  {
    imagePath: "/super-admin.png",
    title: "CSM Dashboard",
    description:
      "A full-featured admin dashboard built solo for the CSM team to manage users and view key analytics.",
    skills: [
      "React.js",
      "Typescript",
      "Node.js",
      "Express,js",
      "Tailwind CSS",
      "MongoDB Aggregate",
      "Figma",
    ],
    link: "https://super-admin.virtualstaff.ph/",
  },
  {
    imagePath: "/rentquicker.png",
    title: "RentQuicker",
    description:
      "A rental platform that connects tenants with landlords, making it easy to find sublets, apartments, and rooms for rent.",
    skills: [
      "Typescript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Paypal",
      "Stripe",
    ],
    link: "https://stage.rentquicker.com/",
  },
  {
    imagePath: "/ee.png",
    title: "Employee Engagement",
    description:
      "A rewards platform that engages employees through performance tracking, challenges, and recognition.",
    skills: [
      "Typescript",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "Hexagonal Architecture",
    ],
    link: "https://ee-staging.maximumaccountability.net/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
