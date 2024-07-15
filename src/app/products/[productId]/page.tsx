export default function DetailsProduct({
  params,
}: {
  params: {
    productId: string
  }
}) {
  return <div>DetailsProduct: {params.productId}</div>
}
