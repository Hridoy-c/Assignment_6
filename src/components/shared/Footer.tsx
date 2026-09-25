import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-20 border-zinc-800 bg-[#0b0d0f]">
      <div className="w-[94vw] m-auto flex flex-col items-center gap-3 px-4 py-9 sm:flex-row sm:justify-between sm:px-6 lg:px-10">
  
        <Link href="/" className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 12h2M20 12h2M6 12h12M6 8v8M18 8v8M4 9v6M20 9v6"
              stroke="#ccff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

       
        <p className="text-sm text-zinc-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;