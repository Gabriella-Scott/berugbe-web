import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            BE RUG BE
          </h1>
          <p className="mt-4 text-base italic text-white/70 sm:text-lg">
            Le jeu nous oppose, le ballon nous unit.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/80 sm:text-base">
            French-made rugby balls for amateurs and professionals — from
            training to the top level of competition.
          </p>
        </div>
      </section>

      {/* Product range */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold">The range</h2>
        <p className="mt-2 text-black/60">Three balls, three levels of play.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}