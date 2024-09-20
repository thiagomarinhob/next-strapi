import { getProductAll } from "@/data/actions/product-actions";

export async function GET() {
  try {
    const response = await getProductAll()
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.log(error);
    return new Response(`Error: ${error}` , {
      status: 400
    })
  }
}