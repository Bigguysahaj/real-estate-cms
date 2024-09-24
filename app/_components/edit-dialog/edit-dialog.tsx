import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BaseItem } from "@/app/_components/table/custom-table-body"
import EditDataForm from "./edit-dialog-form"

interface EditDialogProps<T extends BaseItem> {
  item: T
  largeFields?: string[]
  onSave: (updatedItem: T) => void
}

function EditDataDialog<T extends BaseItem>({
  item,
  onSave,
  largeFields,
}: EditDialogProps<T>): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const handleSave = (updatedItem: T) => {
    onSave(updatedItem)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg"
        onPointerDownOutside={(e: any) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
        </DialogHeader>
        <EditDataForm
          item={item}
          onSave={handleSave}
          largeFields={largeFields}
        />
      </DialogContent>
    </Dialog>
  )
}

export default EditDataDialog
