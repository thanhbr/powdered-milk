import { API } from "@/constants";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetch(`${API.GET_PRODUCT_DETAIL}/${params.slug}`).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.message.name,
    keywords: product.message.attribute.meta_keyword,
    openGraph: {
      images: [...previousImages],
    },
  }
}

async function getData({ slug }) {
  const res = await fetch(`${API.GET_PRODUCT_DETAIL}/${slug}`)

  return res.json()
}


export default async function Page({ params }: Props) {

  const product = await getData({ slug: params.slug });

  return (
    <div className="container">
      <div>
        <p className="text-3xl font-bold">
          {product.message.name}
        </p>
      </div>
      <div>
        {product.message.attribute.images.map(image => (
          <div key={image.original}>
            <Image
              src={image.original}
              alt={image.originalAlt}
              height={0}
              width={78}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
      <div className="">
        <div>
          <h2 className="text-2xl font-bold">Mô tả sản phẩm</h2>
          <div className="content" dangerouslySetInnerHTML={{__html: product.message.attribute.description}} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Thông tin chi tiết</h2>
          <div className="content" dangerouslySetInnerHTML={{__html: product.message.attribute.description_shop}} />
        </div>
      </div>
    </div>
  );
}
