import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrdersDetails } from './orders-details'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function OrderTableRow({ product }: any) {
  const { id, name, description, price, active} = product;
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
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
        {id}
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="text-muted-foreground">{description}</TableCell>
      <TableCell className="text-center font-medium">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
          .format(price,)
        }
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Switch checked={active} id="status-product" />
          <Label htmlFor="status-product"></Label>
        </div>
      </TableCell>
    </TableRow>
  )
}
