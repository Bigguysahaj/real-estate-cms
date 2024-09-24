"use client"

import React, { useState } from "react"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import EditDataDialog from "../edit-dialog/edit-dialog"

export interface BaseItem {
  id: number | string
  active: boolean
}

export interface ColumnDefinition<T extends BaseItem> {
  key: keyof T | string
  header: string
  render?: (item: T) => React.ReactNode
}

export interface CustomTableBodyProps<T extends BaseItem> {
  initialData: T[]
  columns: ColumnDefinition<T>[]
}

function CustomTableBody<T extends BaseItem>({
  initialData,
  columns,
}: CustomTableBodyProps<T>): React.ReactElement {
  const [data, setData] = useState<T[]>(initialData)

  const handleUpdateData = (updatedItem: T) => {
    setData(
      data.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    )
  }

  return (
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          {columns.map((column) => (
            <TableCell key={column.key as string}>
              {column.render
                ? column.render(item)
                : (item[column.key as keyof T] as React.ReactNode)}
            </TableCell>
          ))}
          <TableCell>
            <Badge
              className={item.active ? "bg-green-200" : "bg-red-200"}
              variant="outline"
            >
              {item.active ? "Active" : "Inactive"}
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <EditDataDialog item={item} onSave={handleUpdateData} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default CustomTableBody
