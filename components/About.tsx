export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          <span className="font-semibold text-foreground">
            Hi, I'm Muhammad Rafi, a Software Engineer from Bengaluru, India.
          </span>{" "}
          I started my journey freelancing, building products for clients, and
          later moved into early-stage startups where I worked closely with
          small engineering teams to ship products from scratch.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Currently, I work at{" "}
          <a
            href="https://virtualstaff.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            VirtualStaff.ph,
          </a>{" "}
          a hiring and payroll platform serving 1M+ users. I build core product
          features, backend systems, payment flows, and internal tools used
          across the company.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I enjoy working across the stack — designing APIs, improving
          performance, building scalable systems, and turning ideas into
          production-ready products.
        </p>
      </div>
    </section>
  );
}
