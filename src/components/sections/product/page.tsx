"use client"

import { getProductFilter } from "@/service/api/product";

const ProductSection = (props) => {

  const abc = async() => {
    const [ products ] = await Promise.all([
      getProductFilter()
    ])
    return products;
  }
  abc()



  return (
    <div>
      dev
    </div>
  )
}

export default ProductSection;
