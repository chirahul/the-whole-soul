import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#FAF7F2] flex items-center justify-center">
      <div className="text-center px-4 reveal">
        <div className="bg-white border border-[#E8E3DA] rounded-2xl p-12 md:p-16 max-w-lg mx-auto">
          <p className="text-7xl md:text-8xl font-bold text-[#D4710A] mb-4">404</p>
          <h1 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
            This Page Went on a Snack Break
          </h1>
          <p className="text-sm text-[#555] mb-8">
            It happens to the best of us. Let&apos;s get you back to the good stuff.
          </p>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
