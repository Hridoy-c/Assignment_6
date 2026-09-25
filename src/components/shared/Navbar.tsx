"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

const navLinks = [
  { label: "Workout", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { addPlan , savePlan} = useContext(WorkoutContext);


  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/workout")
      : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `rounded-full px-5 py-2 text-sm transition ${
      isActive(href)
        ? "bg-[#17220d] font-semibold text-[#ccff00]"
        : "font-medium text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="border-b border-zinc-800 bg-[#0b0d0f]">
      <nav className="m-auto flex h-20 w-[94vw] items-center justify-between px-4 sm:px-6 lg:px-10">
   
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Logo" width={50} height={50} className="h-auto w-8" />
          <span className="text-lg font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

    
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

  
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/my-plan" className="flex items-center gap-2 text-sm text-zinc-300">
            <span className="hidden sm:inline">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
              {addPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="hidden sm:inline">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 px-1.5 text-xs text-zinc-300">
             {savePlan.length}
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-300 hover:bg-zinc-900 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;