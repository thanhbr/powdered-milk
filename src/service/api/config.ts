import { API_BASE_URL, API_URL } from "@/constants";

export const METHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
};

export const HEADERS = {
  JSON: {
    "Content-Type": "application/json",
  },
  MULTIPART: {
    "Content-Type": "multipart/form-data",
  },
  FORM_URLENCODED: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const apiConfig = {
  product: {
    getFilterAll: {
      url: `${API_URL}/product/filter/all`,
      method: METHOD.GET,
      headers: HEADERS.JSON,
    },
  },
};
