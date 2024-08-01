import Link from "next/link";

type InternalProductCardProps = {};

export default function ProductCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="product-card-wrapper flex h-full flex-col rounded-[10px]">
      <article className="product-card shadow-product-card relative h-full overflow-hidden p-2 transition-all duration-200 md:p-3.5 rounded-[10px]">
        <div className="absolute right-0 top-0 z-[8] flex flex-col gap-2.5">
          <div className="flex flex-col space-y-1" />
        </div>
        <div>
          <Link href="/" />
        </div>
        {children}
      </article>
    </div>
  );
}
