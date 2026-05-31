// src/app/leads/page.tsx

import { NotionEmbed } from "@/components/notion-embed";

export default function LeadsPage() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <NotionEmbed src="https://v2-embednotion.com/32fe4ae236a380979f01f3e50f3eddf5" />
    </main>
  );
}