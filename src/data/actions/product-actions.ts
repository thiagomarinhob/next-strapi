import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { getAuthToken } from "../services/get-token";
import qs from 'qs';
import { getUserMeLoader } from "../services/get-user-me-loader";

const baseUrl = getStrapiURL();

export async function getProductAll(filters = {}, page = 1, pageSize = 10) {
  const authToken = await getAuthToken();
  const user = await getUserMeLoader()

  // erro ta aqui não vem o user
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
      page,
      pageSize,
      withCount: true,
    }
  });

  const url = new URL("/api/products", baseUrl);
  url.search = query
  
  const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
  };

  try {
    const response = await fetch(url.href, {
      method: 'GET',
      headers: headers
    });
    const data = await response.json();
    console.log("🚀 ~ getProductAll ~ data:", data)
    return flattenAttributes(data);
  } catch (error) {
    console.log("🚀 ~ getProductAll ~ error:", error)
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