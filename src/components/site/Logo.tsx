import logo from "@/assets/zaikah-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      <img
        src={logo}
        alt="Zaikah"
        width={56}
        height={56}
        className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-ember/30"
      />
      {!compact && (
        <div className="hidden sm:block leading-tight">
          <div className="font-display text-xl md:text-2xl font-bold tracking-wide text-cream">
            ZAIKAH
          </div>
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-brass">
            Flavor that feels like home
          </div>
        </div>
      )}
    </Link>
  );
}
