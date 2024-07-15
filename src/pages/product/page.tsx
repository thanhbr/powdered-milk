"use server"

import ProductSection from "@/components/sections/product/page";
import createGetServerSideProps from "@/utils/get-sever-side-props";

const ProductPage = () => {
  return (
    <div>
      <ProductSection />
    </div>
  )
};

export default ProductPage;

