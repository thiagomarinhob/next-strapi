import { getProductAll } from "@/data/actions/product-actions";


export async function GET() {
  try {
    const response = await getProductAll()
    return Response.json(response)
  } catch (error) {
    console.log(error);
    return new Response(`Error: ${error}` , {
      status: 400
    })
  }
}