import getCategoryByEstablishment from "@/data/actions/category-actions"

import { StrapiImage } from "@/components/custom/StrapiImage"


export default async function Carapio({ params }: any) {
  const response = await getCategoryByEstablishment(params.username)

  if (response.data && response.data.length === 0) {
    return (
      <div>Restaurante não encontrado</div>
    )
  }

  const categories = response.data

  return (
    <main className="flex flex-col w-full p-5 items-center bg-gray-100">
      <h1 className="font-bold text-3xl">Categorias</h1>

      <div className="flex gap-3 flex-wrap items-start justify-center pt-5">
        {categories.map((category: any) => (
          <div
            key={category.id}
            className="flex justify-center rounded-xl shadow-xl items-center w-[164px] h-[144px] flex-col bg-white hover:bg-gray-100 hover:border cursor-pointer"
          >
            <StrapiImage
              src={category.image.url}
              alt={category.image.alternativeText}
              width={164}
              height={100}
              className="flex rounded-2xl h-[100px] w-[164px] px-2"
            />
            <h2 className="font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}