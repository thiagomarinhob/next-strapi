import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { getAuthToken } from "../services/get-token";
import qs from 'qs';
import { getUserMeLoader } from "../services/get-user-me-loader";

const baseUrl = getStrapiURL();

export default async function getAllCategory(name?: string) {
  const authToken = await getAuthToken();
  const user = await getUserMeLoader()

  const query = qs.stringify({
    filters: {
      establishment: {
        id: {
          $eq: name ? name : user.data.establishment.id,
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
    console.log("🚀 ~ getAllCategory ~ response:", response)
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("🚀 ~ getProductAll ~ error:", error)
    throw error;
  }
}