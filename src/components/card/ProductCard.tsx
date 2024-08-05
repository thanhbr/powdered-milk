import { formatVND } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProductCardProps {
  _id: string;
  name: string;
  thumbnail?: string | undefined;
  price: {
    discount?: number;
    raw?: number;
  };
  children?: ReactNode;
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <div className="bg-white product-card-wrapper flex h-full flex-col drop-shadow-lg rounded-xl">
      <article className="bg-white product-card shadow-product-card relative h-full overflow-hidden p-2 transition-all duration-200 md:p-3.5 rounded-xl">
        <div className="absolute right-0 top-0 z-[8] flex flex-col gap-2.5">
          <div className="flex flex-col space-y-1" />
        </div>
        <div className="relative">
          <header>
            <Link href="/milk">
              <Image
                src={typeof props.thumbnail === "string" ? props.thumbnail : ""}
                alt={props.name}
                height={0}
                width={600}
                className="h-auto"
              />
              <h3 title={props.name} className="text-sm">
                {props.name}
              </h3>
            </Link>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-xl">
                  {typeof props.price.raw === "number"
                    ? formatVND(props.price.raw)
                    : props.price.raw}
                </p>
                <p className="text-sm line-through">
                  {typeof props.price.discount === "number"
                    ? formatVND(props.price.discount)
                    : props.price.discount}
                </p>
              </div>
            </div>
          </header>
        </div>
        {props.children}
      </article>
    </div>
  );
}
