export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_GRAPHQL_URL = process.env.NEXT_PUBLIC_API_GRAPHQL_URL;
export const API_GRAPHQL_APP_ID = process.env.NEXT_PUBLIC_API_GRAPHQL_APP_ID;
export const API_GRAPHQL_KEY = process.env.NEXT_PUBLIC_API_GRAPHQL_KEY;

export const API = {
  GET_PRODUCT: `${API_URL}/product/filter/all`,
  GET_PRODUCT_DETAIL: `${API_URL}/product`,
};

export const HEADERS_API = {
  "Content-Type": "application/json",
  "X-Api-Key": `${API_GRAPHQL_APP_ID}`,
  "App-Cache-Id": `${API_GRAPHQL_APP_ID}`
}

export const NAV_LINK = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];
