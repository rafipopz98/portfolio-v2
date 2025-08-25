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
          I've worked with a wide range of technologies over the years. I began
          my journey as a freelancer, building projects for individuals and
          organizations, and later moved into full-time roles where I helped
          build products from scratch.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Right now, I'm a Software Engineer at{" "}
          <a
            href="https://virtualstaff.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            VirtualStaff.ph,
          </a>{" "}
          an all-in-one hiring, payroll, and compliance solution, a platform
          with over 1M users and 100K+ daily active users. I work on the core
          product, building and maintaining features that keep everything
          running smoothly for our users.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Previously, I have built entire backend from scratch when I was
          working at{" "}
          <a
            href="https://qs2500.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            Quantum Strategies,
          </a>{" "}
          helping them to build new products and features. I have experience in
          building scalable and maintainable backend systems, ensuring high
          availability and performance.
        </p>
      </div>
    </section>
  );
}
