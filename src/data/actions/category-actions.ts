import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { getAuthToken } from "../services/get-token";
import qs from 'qs';

const baseUrl = getStrapiURL();

export default async function getCategoryByEstablishment(name: string) {
  const authToken = await getAuthToken();

  const query = qs.stringify({
    filters: {
      establishment: {
        name: {
          $eq: name,
        },
      },
    },
    populate: {
      products: {
        image: {
            fields: ["url", "alternativeText"],
        },
      },
      image: {
            fields: ["url", "alternativeText"],
        },
    },
});

  const url = new URL(`/api/categories`, baseUrl);
  url.search = query;
  
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url.href, headers);
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("🚀 ~ getProductAll ~ error:", error)
    throw error;
  }
}