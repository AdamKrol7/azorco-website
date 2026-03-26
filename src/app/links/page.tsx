// src/app/links/page.tsx

type LinkItem = {
  name: string;
  url: string;
  desc: string;
};

const links: LinkItem[] = [
  {
    name: "MakerCase",
    url: "https://www.makercase.com/",
    desc: "Quick and dirty box generator. Great for laser cutting.",
  },
  {
    name: "ProtoLabs Injection Molding Guide",
    url: "https://www.protolabs.com/resources/design-tips/",
    desc: "Super clear and actually useful when you’re trying to make something real. Also, they give you a free cube.",
  },
  {
    name: "Thingiverse",
    url: "https://www.thingiverse.com/",
    desc: "Still a go-to for quick inspiration or parts you don’t feel like modeling from scratch.",
  },
  {
    name: "JLCPCB CNC Service",
    url: "https://jlcpcb.com/cnc-machining",
    desc: "Surprisingly cheap with decent quality. Good for fast prototypes.",
  },
  {
    name: "Tinkercad",
    url: "https://www.tinkercad.com/",
    desc: "Sounds silly, but it’s amazing for explaining ideas or doing rough CAD quickly without getting stuck in a serious program.",
  },
  {
    name: "Convert3D.org",
    url: "https://convert3d.org/",
    desc: "A lifesaver when you’re stuck with a cursed file format.",
  },
  {
    name: "Phosphor Icons",
    url: "https://phosphoricons.com/",
    desc: "Clean, flexible icon set. I use these everywhere.",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/",
    desc: "There’s a lot of AI noise out there, but this is where the actually useful stuff lives.",
  },
];

export default function LinksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground sm:mb-8 sm:text-4xl">
        Links
      </h1>

      <p className="mb-10 text-base leading-relaxed text-foreground sm:text-lg">
        Here are some links to things that I find useful. I hope you will too :)
      </p>

      <div className="space-y-8">
        {links.map((item) => (
          <div key={item.url} className="space-y-2">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold text-red-600 underline underline-offset-4 hover:text-red-700 sm:text-2xl"
            >
              {item.name}
            </a>

            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
