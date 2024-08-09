// import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pagination } from './pagination'
import { OrderTableFilters } from './order-table-filters';
import { OrderTableRow } from './order-table-row';

interface PageProps {
  page: number
  pageSize: number
  total: number
}

export async function getProducts() {
  const teste = await fetch('http://localhost:3000/api/products', {
      method: 'GET'
  })
  
  return teste
}

export default async function TableProducts() {
  // const [products, setProducts] = useState([]);
  // const [pagination, setPagination] = useState<PageProps>({
  //   page: 1,
  //   pageSize: 1,
  //   total: 0
  // });

   const teste = await fetch('http://localhost:3000/api/products', {
      method: "GET"
  })
  
  console.log("🚀 ~ getProducts ~ teste:", teste)

const a = await getProducts()
console.log("🚀 ~ TableProducts ~ a:", a)


  // useEffect(() => {
  //   getProducts()
  // }, []);

  return (
    <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[180px]">Nome</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w-[140px]">Categoria</TableHead>
                  <TableHead className="w-[200px]">Descrição</TableHead>
                  <TableHead className="w-[140px]">preço</TableHead>
                  <TableHead className="w-[64px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {products.length > 0 && products.map((product: any) => {
                  return <OrderTableRow key={product.id} product={product} />
                })} */}
              </TableBody>
            </Table>
          </div>

          {/* <Pagination pageIndex={pagination.page} totalCount={pagination.total} perPage={pagination.pageSize} /> */}
        </div>
  )
}