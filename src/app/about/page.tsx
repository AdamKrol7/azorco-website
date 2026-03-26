// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-8 text-foreground tracking-tight">
        About Me...
      </h1>

      {/* Make <p> match <h1>: use text-foreground (NOT text-muted-foreground) */}
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground">
        <p>Hi, I'm Adam Krol. I am an engineer who enjoys solving complex problems, leveraging experience that spans from hands-on manufacturing execution to precision modeling in Creo.</p>

        <p>I have built a range of technical solutions, including redesigning axle assemblies to eliminate critical service issues, developing FEA models and validation fixtures for vacuum interrupters, and designing manufacturing fixtures and original CAD components for electric vehicles.</p>

        <p>I studied Mechanical Engineering at the University of Illinois at Chicago. I currently work as an Applications Engineer at SKF, and previously interned at Tesla, CNH Industrial, Hydro Inc, and S&C Electric.</p>

        <p>I live in Chicago and spend my time learning, building, and exploring new ideas. I care about thoughtful design, clear engineering, and making things that feel personal and meaningful.</p>
      </div>

      <h2 className="mt-14 text-2xl font-medium text-foreground tracking-tight">
        Connect
      </h2>

      <div className="mt-4 space-y-2 text-base sm:text-lg text-foreground">
        <p>
  <span className="font-medium">Email:</span>{" "}
  <a
    href="adamkrol.rmeo@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="font-medium text-red-600 hover:text-red-700 underline underline-offset-4"
  >
    adamkrol.rmeo@gmail.com
  </a>
</p>
        <p>
  <span className="font-medium">Linkedin:</span>{" "}
  <a
    href="https://www.linkedin.com/in/adamkrol7/"
    target="_blank"
    rel="noreferrer"
    className="font-medium text-red-600 hover:text-red-700 underline underline-offset-4"
  >
    @adamkrol7
  </a>
</p>
        <p>
  <span className="font-medium">Instagram:</span>{" "}
  <a
    href="https://www.instagram.com/adamkrol7/"
    target="_blank"
    rel="noreferrer"
    className="font-medium text-red-600 hover:text-red-700 underline underline-offset-4"
  >
    @adamkrol7
  </a>
</p>
      </div>
    </main>
  );
}
