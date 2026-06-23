import { Product } from "@/lib/products";

const accentBorder: Record<Product["accent"], string> = {
  red: "border-t-brand-red",
  blue: "border-t-brand-blue",
  navy: "border-t-brand-navy",
};

const accentText: Record<Product["accent"], string> = {
  red: "text-brand-red",
  blue: "text-brand-blue",
  navy: "text-brand-navy",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border-t-4 ${accentBorder[product.accent]} bg-white p-6 shadow-sm`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${accentText[product.accent]}`}
      >
        {product.category}
      </p>
      <h3 className="mt-1 text-2xl font-extrabold">{product.name}</h3>
      <p className="mt-3 flex-1 text-sm text-black/70">{product.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold">{product.price}</span>
        <a
          href={product.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-ink px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Buy
        </a>
      </div>
    </article>
  );
}