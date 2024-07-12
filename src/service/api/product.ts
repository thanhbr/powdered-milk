import { apiConfig } from './config';
import fetcher from './fetcher';

export async function getSubjectAutoComplete({ data = {}, ...rest } = {}) {
    const res = await fetcher(apiConfig.product.getFilterAll, {
        params: data,
        ...rest,
    });

    return res?.data;
}
