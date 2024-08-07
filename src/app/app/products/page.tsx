import { Pagination } from './components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableRow } from './components/order-table-row'
import { getProductAll } from '@/data/actions/product-actions'

export default async function Products() {
  const response = await getProductAll()

  const products = response.data;

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
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
                {products && products.map((product: any) => {
                  return <OrderTableRow key={product.id} product={product} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
