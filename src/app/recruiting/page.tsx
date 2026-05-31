// src/app/recruiting/page.tsx

import { NotionEmbed } from "@/components/notion-embed";

export default function RecruitingPage() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <NotionEmbed src="https://embed.embednotion.com/36ae4ae236a380f2b776e5a0e853c1ce" />
    </main>
  );
}