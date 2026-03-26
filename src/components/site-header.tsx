"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/links", label: "Links" },
  { href: "/sauce", label: "Sauce" }, // ✅ added
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-white dark:bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-8">
            <div className="relative h-18 w-18 overflow-hidden rounded-md">
              <Image
                src="/Logo1.png"
                alt="Logo"
                fill
                priority
                className="object-contain invert dark:invert-0"
              />
            </div>

            <div className="text-3xl font-semibold tracking-tight text-black dark:text-white">
              Adam Krol
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "relative text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                      "pb-1",
                      active ? "text-black dark:text-white" : "",
                    ].join(" ")}
                  >
                    {item.label}
                    <span
                      className={[
                        "absolute left-0 -bottom-0.5 h-[2px] w-full",
                        active ? "bg-black dark:bg-white" : "bg-transparent",
                      ].join(" ")}
                    />
                  </Link>
                );
              })}
            </nav>

            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* This is the “strip below the header”. It matches theme. */}
      <div className="h-0 bg-white dark:bg-black" />
    </>
  );
}
