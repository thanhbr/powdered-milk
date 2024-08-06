import { API } from "@/constants";
import { Metadata, ResolvingMetadata } from "next";

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
      images: [product.message.attribute.images.thumbnail, ...previousImages],
    },
  }
}

export default async function Page({ params }: Props) {

  async function getData() {
    const res = await fetch(`${API.GET_PRODUCT_DETAIL}/${params.slug}`)

    return res.json()
  }

  const product = await getData();

  return (
    <div>
      <div>
        <p>{product.message.name}</p>
      </div>
    </div>
  );
}
