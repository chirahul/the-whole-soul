import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] mesh-bg-hero flex items-center justify-center overflow-hidden">
      {/* Floating orbs */}
      <div className="orb orb-1 top-[20%] left-[10%]" />
      <div className="orb orb-2 bottom-[20%] right-[10%]" />

      <div className="relative z-10 text-center px-4 reveal">
        <div className="liquid-glass-card iridescent-border rounded-3xl p-12 md:p-16 max-w-lg mx-auto">
          <p className="text-7xl md:text-8xl font-bold gradient-text-warm mb-4">404</p>
          <h1 className="font-[var(--font-besley)] text-2xl md:text-3xl font-semibold text-[#232743] mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-[#090A11]/50 mb-8">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <Link href="/" className="btn-accent">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
