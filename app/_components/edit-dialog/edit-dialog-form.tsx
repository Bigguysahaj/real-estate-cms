import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

interface EditDataFormProps<T> {
  item: T
  largeFields?: string[]
  onSave: (updatedItem: T) => void
}

function EditDataForm<T extends Record<string, any>>({
  item,
  onSave,
  largeFields,
}: EditDataFormProps<T>): React.ReactElement {
  const [editingItem, setEditingItem] = useState<T>(item)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditingItem({
      ...editingItem,
      [e.target.name]: e.target.value,
    })
  }

  const handleSwitchChange = (name: string) => (checked: boolean) => {
    setEditingItem({
      ...editingItem,
      [name]: checked,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editingItem)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
      e.preventDefault()
    }
  }

  const renderField = (key: string, value: any) => {
    const label =
      key.charAt(0).toUpperCase() +
      key
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim()

    if (typeof value === "boolean") {
      return (
        <div key={key} className="grid grid-cols-2 items-center gap-4">
          <Label htmlFor={key} className="text-left">
            {label}
          </Label>
          <Switch
            id={key}
            checked={value}
            onCheckedChange={handleSwitchChange(key)}
          />
        </div>
      )
    }

    const isTextarea = largeFields?.includes(key)
    const InputComponent = isTextarea ? Textarea : Input

    return (
      <div key={key} className="w-full grid grid-cols-5 items-center gap-4">
        <Label htmlFor={key} className="col-span-2">
          {label}
        </Label>
        <InputComponent
          id={key}
          name={key}
          value={value}
          onChange={handleInputChange}
          className="col-span-3"
          type={typeof value === "number" ? "number" : "text"}
          onKeyDown={handleKeyDown}
          rows={isTextarea ? 3 : undefined}
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 py-8">
        {Object.entries(editingItem).map(([key, value]) =>
          key !== "id" ? renderField(key, value) : null
        )}
      </div>
      <Button type="button" onClick={handleSubmit}>
        Save changes
      </Button>
    </form>
  )
}

export default EditDataForm
