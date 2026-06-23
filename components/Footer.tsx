export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-brand-light">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-lg font-bold">BE RUG BE</p>
        <p className="mt-2 max-w-md text-sm italic text-black/60">
          &ldquo;Le jeu nous oppose, le ballon nous unit.&rdquo;
        </p>
        <p className="mt-6 text-xs text-black/50">
          © {new Date().getFullYear()} BE RUG BE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}