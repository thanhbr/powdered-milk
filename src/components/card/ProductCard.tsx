import { formatVND } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProductCardProps {
  _id: string;
  name: string;
  thumbnail?: string;
  price: {
    discount: number;
    raw: number;
    import: number;
  };
  linksp: string;
  children?: ReactNode;
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <div className="bg-white product-card-wrapper flex h-full flex-col drop-shadow-lg rounded-xl transition">
      <article className="bg-white product-card shadow-product-card relative h-full overflow-hidden p-2 transition-all duration-200 md:p-3.5 rounded-xl">
        <div className="absolute right-0 top-0 z-[8] flex flex-col gap-2.5">
          <div className="flex flex-col space-y-1" />
        </div>
        <div className="relative">
          <header>
            <div className="min-h-[300px]">
              <Link href={props.linksp}>
                <Image
                  src={typeof props.thumbnail === "string" ? props.thumbnail : ""}
                  alt={props.name}
                  height={0}
                  width={600}
                  className="w-auto h-auto"
                  loading="lazy"
                />
                <p title={props.name} className="text-md">
                  {props.name}
                </p>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-xl md:text-2xl font-bold text-teal-500">{formatVND(props.price.import)}</p>
                {props.price.import < props.price.raw && (
                  <p className="text-sm font-bold text-red line-through">
                    {formatVND(props.price.discount)}
                  </p>
                )}
              </div>
            </div>
          </header>
        </div>
        {props.children}
      </article>
    </div>
  );
}
