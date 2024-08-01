import { apiConfig } from "./config";
import fetcher from "./fetcher";

export async function getProductFilter({ data = {}, ...rest } = {}) {
  const response = await fetcher(apiConfig.product.getFilterAll, {
    params: data,
    ...rest,
  });

  return response?.data;
}
