import { generatePath } from "@/utils/path";
import queryString from "query-string";
import axios from "axios";

const instanceConfig = {
  timeout: 1000,
  paramsSerializer: (params) => queryString.stringify(params, { arrayFormat: "comma" }),
};

const instance = axios.create(instanceConfig);

const fetcher = async (
  { method = "", url = "", headers = {} } = {},
  { data = {}, params = {}, pathParams = {}, ...rest } = {},
) => {
  try {
    return await instance.request({
      method,
      url: generatePath(url, pathParams),
      headers,
      data,
      params,
      ...rest,
    });
  } catch (error) {
    throw error;
  }
};

export default fetcher;
