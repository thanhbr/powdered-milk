import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

export default function DetailsProduct({ params }: Props) {
  return <div>DetailsProduct: {params.productId}</div>;
}
