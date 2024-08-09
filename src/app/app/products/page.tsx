import { getProductAll } from '@/data/actions/product-actions';
import TableProducts from './components/table-products';

export default async function Products() {  
  
  const response = await getProductAll()
  console.log("🚀 ~ Products ~ response:", response)
  
  const products = response.data;
  const pagination = response.meta.pagination
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <TableProducts />
      </div>
    </>
  )
}
