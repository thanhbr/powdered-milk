import { API } from "@/constants";
import { Metadata } from "next";

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const product = await fetch(`${API.GET_PRODUCT_DETAIL}/${params.slug}`).then((res) => res.json());
  return {
    title: product.message.name,
    keywords: product.message.attribute.meta_keyword,
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
