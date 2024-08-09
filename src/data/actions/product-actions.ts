import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { getAuthToken } from "../services/get-token";
import qs from 'qs';
import { getUserMeLoader } from "../services/get-user-me-loader";

const baseUrl = getStrapiURL();

export async function getProductAll() {
  const authToken = await getAuthToken();
  const user = await getUserMeLoader()

  const query = qs.stringify({
    filter: {
      establishment: {
        id: {
          $eq: user.data.establishment.id,
        },
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      category: {
        populate: true
      }
    },
    paginnation: {
      page: 1,
      pageSize: 10,
      withCount: true,
    }
  });

  const url = new URL("/api/products", baseUrl);
  url.search = query
  
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

export async function deleteProductById(id: number) {
  const authToken = await getAuthToken();
  const url = new URL(`/api/products/${id}`, baseUrl);

  const headers = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url.href, headers);
    console.log("🚀 ~ deleteProduct ~ response:", response)
    
  } catch (error) {
    console.error("🚀 ~ deleteProduct ~ error:", error)
    throw error;
  }

}