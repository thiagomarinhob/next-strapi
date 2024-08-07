import { deleteProductById } from "@/data/actions/product-actions";

export async function DELETE(request: Request, response: Response) {
  const {id} = await request.json();
  console.log("🚀 ~ DELETE ~ id:", id)

  try {
    await deleteProductById(id);
    return new Response('Success!', {
    status: 200,
  })
  } catch (error) {
    return new Response(`Erro ao deletar product ${error}`, {
      status: 400
    })
  }
}