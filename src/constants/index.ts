export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = {
  GET_PRODUCT: `${API_URL}/product/filter/all`,
  GET_PRODUCT_DETAIL: `${API_URL}/product`,
};
