export const FAKE_INTERESTED_PRODUCTS = `query InterestedProducts {
  interestedProducts {
      items {
          ... on ConfigurableProduct {
              ...ConfigurableProductBasic
              ...ConfigurableProductOptions
              ...ConfigurableProductVariants
              ...ConfigurableProductPrice
              ...ConfigurableProductImage
              ...ConfigurableProductSpecialPrice
              __typename
          }
          ... on SimpleProduct {
              ...SimpleProductPrice
              ...SimpleProductBasic
              ...SimpleProductImage
              ...SimpleProductSpecialPrice
              __typename
          }
          __typename
      }
      __typename
  }
}
fragment ConfigurableProductBasic on ConfigurableProduct {
  id
  sku
  name
  url_key
  url_suffix
  stock_status
  brand
  ratings_count
  ratings_summary
  has_gift
  new_product
  news_from_date
  news_to_date
  meta_title
  meta_description
  meta_keyword
  canonical_url
  __typename
}
fragment ConfigurableProductOptions on ConfigurableProduct {
  configurable_options {
      attribute_code
      attribute_id
      product_id
      id
      label
      position
      use_default
      values {
          default_label
          label
          store_label
          use_default_value
          value_index
          __typename
      }
      __typename
  }
  __typename
}
fragment ConfigurableProductVariants on ConfigurableProduct {
  variants {
      attributes {
          code
          label
          value_index
          __typename
      }
      product {
          id
          sku
          name
          url_key
          url_suffix
          stock_status
          brand
          ratings_count
          ratings_summary
          media_gallery {
              disabled
              label
              position
              url
              __typename
          }
          thumbnail {
              disabled
              label
              position
              url
              __typename
          }
          small_image {
              disabled
              label
              position
              url
              __typename
          }
          price_range {
              maximum_price {
                  discount {
                      amount_off
                      percent_off
                      __typename
                  }
                  final_price {
                      currency
                      value
                      __typename
                  }
                  fixed_product_taxes {
                      amount {
                          currency
                          value
                          __typename
                      }
                      label
                      __typename
                  }
                  regular_price {
                      currency
                      value
                      __typename
                  }
                  __typename
              }
              minimum_price {
                  discount {
                      amount_off
                      percent_off
                      __typename
                  }
                  final_price {
                      currency
                      value
                      __typename
                  }
                  fixed_product_taxes {
                      amount {
                          currency
                          value
                          __typename
                      }
                      label
                      __typename
                  }
                  regular_price {
                      currency
                      value
                      __typename
                  }
                  __typename
              }
              __typename
          }
          special_from_date
          special_price
          special_to_date
          __typename
      }
      __typename
  }
  __typename
}
fragment ConfigurableProductPrice on ConfigurableProduct {
  price_range {
      maximum_price {
          discount {
              amount_off
              percent_off
              __typename
          }
          final_price {
              currency
              value
              __typename
          }
          fixed_product_taxes {
              amount {
                  currency
                  value
                  __typename
              }
              label
              __typename
          }
          regular_price {
              currency
              value
              __typename
          }
          __typename
      }
      minimum_price {
          discount {
              amount_off
              percent_off
              __typename
          }
          final_price {
              currency
              value
              __typename
          }
          fixed_product_taxes {
              amount {
                  currency
                  value
                  __typename
              }
              label
              __typename
          }
          regular_price {
              currency
              value
              __typename
          }
          __typename
      }
      __typename
  }
  __typename
}
fragment ConfigurableProductImage on ConfigurableProduct {
  thumbnail {
      label
      position
      url
      __typename
  }
  small_image {
      label
      position
      url
      __typename
  }
  __typename
}
fragment ConfigurableProductSpecialPrice on ConfigurableProduct {
  special_from_date
  special_price
  special_to_date
  __typename
}
fragment SimpleProductPrice on SimpleProduct {
  price_range {
      maximum_price {
          discount {
              amount_off
              percent_off
              __typename
          }
          final_price {
              currency
              value
              __typename
          }
          fixed_product_taxes {
              amount {
                  currency
                  value
                  __typename
              }
              label
              __typename
          }
          regular_price {
              currency
              value
              __typename
          }
          __typename
      }
      minimum_price {
          discount {
              amount_off
              percent_off
              __typename
          }
          final_price {
              currency
              value
              __typename
          }
          fixed_product_taxes {
              amount {
                  currency
                  value
                  __typename
              }
              label
              __typename
          }
          regular_price {
              currency
              value
              __typename
          }
          __typename
      }
      __typename
  }
  __typename
}
fragment SimpleProductBasic on SimpleProduct {
  id
  sku
  name
  url_key
  url_suffix
  stock_status
  brand
  ratings_count
  ratings_summary
  has_gift
  new_product
  news_from_date
  news_to_date
  meta_title
  meta_description
  meta_keyword
  canonical_url
  __typename
}
fragment SimpleProductImage on SimpleProduct {
  thumbnail {
      label
      position
      url
      __typename
  }
  small_image {
      label
      position
      url
      __typename
  }
  __typename
}
fragment SimpleProductSpecialPrice on SimpleProduct {
  special_from_date
  special_price
  special_to_date
  __typename
}
`;
