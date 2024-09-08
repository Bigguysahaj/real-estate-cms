import { BaseItem } from "./custom-table-body"

export type ColumnDefinition<T> = {
  [K in keyof T] : {
    key: keyof T
    header: string
  }
}[keyof T]

export interface CustomDataTableProps<T extends BaseItem> {
  initialData: T[]
  ActionComponent?: React.FC<{ item: T; onAction: (item: T) => void }>
}

export const generateColumns = <T extends BaseItem>(
  data: T[],
): ColumnDefinition<T>[] => {
  if (data.length === 0) return []
  const sample = data[0]
  const excludeColumns = ["id", "active"]
  return (Object.keys(sample) as (keyof T)[])
    .filter(key => !excludeColumns.includes(key as string))
    .map(key => ({
      key,
      header: formatHeader(key as string)
    }))
}


const formatHeader = (key: string): string => {
  return key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}