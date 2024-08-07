'use client'
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

export function ButtonsActions(id: any) {

  async function handleDeleteProduct(id: any) {
    const response = await fetch('/api/products', {
    method: "DELETE",
    body: JSON.stringify(id)
  })
  console.log("🚀 ~ handleDeleteProduct ~ response:", response)
  }

  return (
    <div className='flex gap-2'>
      <MdModeEditOutline className='w-[24px] h-[24px] cursor-pointer'/>
      <MdDeleteForever onClick={() => handleDeleteProduct(id)} className='w-[24px] h-[24px] cursor-pointer' />
    </div>
  )
}