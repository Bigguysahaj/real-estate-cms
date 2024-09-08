'use client'

import React, { useMemo, useState } from 'react'
import CustomTableBody, { BaseItem } from './custom-table-body'
import { CustomDataTableProps, generateColumns } from './table-type-systems'
import { Table, TableHeader, TableRow, TableHead } from '@/components/ui/table'

const CustomDataTable = <T extends BaseItem>({ initialData }: CustomDataTableProps<T>) => {
  const columns = useMemo(() => generateColumns(initialData), [initialData])
  const headerData = useMemo(() => columns.map(column => column.header), [columns])

  return (
    <div className='container mx-auto py-10'>
      <Table>
        <TableHeader>
          <TableRow className='font-semibold text-md'>
            <TableHead className='w-[100px]'>ID</TableHead>
            {headerData.map((headerContent) => <TableHead>{headerContent}</TableHead>)}
            <TableHead >Status</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <CustomTableBody
          initialData={initialData}
          columns={columns}
        />
      </Table>
    </div>
  )
}

export default CustomDataTable