import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { getAuthToken } from "../services/get-token";
import qs from 'qs';

const baseUrl = getStrapiURL();

const query = qs.stringify({
  populate: {
    category: {
      populate: true
    }
  },
});

export async function getProductAll() {
  const authToken = await getAuthToken();

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