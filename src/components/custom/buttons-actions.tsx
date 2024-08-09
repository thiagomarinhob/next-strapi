'use client'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";

export function ButtonsActions(id: any) {
  const [open, setOpen] = useState(false);

  async function handleDeleteProduct(id: any) {
    const response = await fetch('/api/products', {
      method: "DELETE",
      body: JSON.stringify(id)
    })
  console.log("🚀 ~ handleDeleteProduct ~ response:", response)
  }

  return (
    <div className='flex gap-2'>
      <MdModeEditOutline className='w-[24px] h-[24px] cursor-pointer' />
     
      <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <MdDeleteForever className='w-[24px] h-[24px] cursor-pointer' />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Excluir produto</DialogTitle>
          <DialogDescription>
            Excluir produto definitivamente?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <div>
            <Button onClick={() => setOpen(false)} variant="outline">Cancelar</Button>
          </div>
          <Button variant="destructive" onClick={(() => handleDeleteProduct(id))}>Excluir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}