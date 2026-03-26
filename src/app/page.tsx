// src/app/page.tsx
import { NotionEmbed } from "@/components/notion-embed";

export default function Page() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <NotionEmbed src="https://v2-embednotion.com/2f5e4ae236a380bda86dd9296a5f96ab" />
    </main>
  );
}
