import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrdersDetails } from './orders-details'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { StrapiImage } from '@/components/custom/StrapiImage'
import { ButtonsActions } from '@/components/custom/buttons-actions'

export async function OrderTableRow({ product }: any) {
  const { id, image, category, name, description, price, active } = product;

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do produto</span>
            </Button>
          </DialogTrigger>

          <DialogContent>
            <OrdersDetails product={product} />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        <StrapiImage
          src={image.url}
          alt='prd'
          height={800}
          width={1024}
          className='w-14 h-14 rounded-xl'
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Switch checked={active} id="status-product" />
          <Label htmlFor="status-product"></Label>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">{category.name}</TableCell>
      <TableCell className="text-muted-foreground truncate max-w-[200px]">{description}</TableCell>
      <TableCell className="font-medium">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
          .format(price,)
        }
      </TableCell>
      <TableCell>
        <ButtonsActions id={id} />
      </TableCell>
      
    </TableRow>
  )
}
