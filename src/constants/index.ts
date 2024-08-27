export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_GRAPHQL_URL = process.env.NEXT_PUBLIC_API_GRAPHQL_URL;
export const API_GRAPHQL_APP_ID = process.env.NEXT_PUBLIC_API_GRAPHQL_APP_ID;
export const API_GRAPHQL_KEY = process.env.NEXT_PUBLIC_API_GRAPHQL_KEY;

export const API = {
  GET_PRODUCT: `${API_URL}/product/filter/all`, // params: { min: 0, max: 10000000, per_page: 100, url_key_v2: "sua-cho-be", get_brand_info: true }
  GET_PRODUCT_DETAIL: `${API_URL}/product`,
  GET_MENU_CATEGORY: `${API_URL}/menu/category/v2`,
  GET_RELATED_PRODUCT: `${API_BASE_URL}/products_biboshop/Products/Api_BiboOffice_list_tuongtu_func?page_index=0&page_size=100&mahang=100023`,
};

export const HEADERS_API = {
  "Content-Type": "application/json",
  "X-Api-Key": `${API_GRAPHQL_KEY}`,
  "App-Cache-Id": `${API_GRAPHQL_APP_ID}`,
};

export const NAV_LINK = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export const MOBILE_SLIDES = [
  { id: 1, label: "1", src: "https://cdn1.concung.com/img/adds/2024/08/20237-mobi-10-1724394390.webp"},
  { id: 2, label: "2", src: "https://cdn1.concung.com/img/adds/2024/08/20369-yokogold-muatuutruongkv-mobile816x308-concung-1724721374.webp"},
  { id: 3, label: "3", src: "https://cdn1.concung.com/img/adds/2024/08/20242-mobi-11-1724394902.webp"},
  { id: 4, label: "4", src: "https://cdn1.concung.com/img/adds/2024/08/20238-816x308-app-1724394493.webp"},
  { id: 5, label: "5", src: "https://cdn1.concung.com/img/adds/2024/08/20199-mobi-cate-takato-1-1724321753.webp"},
  { id: 6, label: "6", src: "https://cdn1.concung.com/img/adds/2024/08/20196-yokogold-muatuutruong-kv-816x308-homepage-1-1724321000.webp"},
]

export const MOBILE_FOOTER_LINK = [
  { id: 1, label: "Trang chủ", href: "/", icon: "/icons/footer-home-active.png" },
  { id: 2, label: "Tìm kiếm", href: "/search", icon: "/icons/footer-search.png" },
  { id: 3, label: "Danh mục", href: "/category", icon: "/icons/footer-category.png" },
  { id: 4, label: "Giỏ hàng", href: "/cart", icon: "/icons/footer-cart.png" },
  { id: 5, label: "Tài khoản", href: "/user", icon: "/icons/footer-user.png" },
];
