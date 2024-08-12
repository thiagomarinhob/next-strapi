import { getAuthToken } from "./get-token";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

const query = qs.stringify({
  populate: {
    image: {
      fields: ["url", "alternativeText"]
    },
    establishment: {
      populate: true,
    }
  },
});

export async function getUserMeLoader() {
  const authToken = await getAuthToken();
  const baseUrl = getStrapiURL();

  const url = new URL("/api/users/me", baseUrl);
  url.search = query;

  console.log("🚀 ~ getUserMeLoader ~ authToken:", authToken)
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      // cache: "no-cache",
    });
    const data = await response.json();
    console.log("🚀 ~ getUserMeLoader ~ data:", data)
    if (data.error) {return { ok: false, data: null, error: data.error };}
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.error(error);
    return { ok: false, data: null, error: error };
  }
}