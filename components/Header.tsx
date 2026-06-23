import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          BE RUG BE
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brand-blue">
            Home
          </Link>
          <Link href="/#products" className="hover:text-brand-blue">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}