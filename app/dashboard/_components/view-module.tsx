"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Grid, List } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface Item {
  id: number
  title: string
  content: string
  image: string
  amenities: string[]
}

interface GenericListProps {
  items: Item[]
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
  title: string
}

interface ItemFormProps {
  currentItem: Omit<Item, "id">
  setCurrentItem: React.Dispatch<React.SetStateAction<Omit<Item, "id">>>
  newTag: string
  setNewTag: React.Dispatch<React.SetStateAction<string>>
  handleAddTag: () => void
}

interface ItemCardProps {
  item: Item
  onClick: () => void
  viewMode: "grid" | "list"
}

const ItemForm: React.FC<ItemFormProps> = ({
  currentItem,
  setCurrentItem,
  newTag,
  setNewTag,
  handleAddTag,
}) => (
  <div className='grid gap-4 py-4'>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='name' className='text-right'>
        Name
      </Label>
      <Input
        id='name'
        value={currentItem.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentItem({
            ...currentItem,
            title: e.target.value,
          })
        }
        className='col-span-3'
      />
    </div>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='content' className='text-right'>
        Content
      </Label>
      <Textarea
        id='content'
        value={currentItem.content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCurrentItem({
            ...currentItem,
            content: e.target.value,
          })
        }
        className='col-span-3'
      />
    </div>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='image' className='text-right'>
        Image URL
      </Label>
      <Input
        id='image'
        value={currentItem.image}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentItem({
            ...currentItem,
            image: e.target.value,
          })
        }
        className='col-span-3'
      />
    </div>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='tags' className='text-right'>
        Tags
      </Label>
      <div className='col-span-3 space-y-2'>
        <div className='flex space-x-2'>
          <Input
            id='tags'
            value={newTag}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTag(e.target.value)
            }
          />
          <Button onClick={handleAddTag} type='button'>
            Add
          </Button>
        </div>
        <div className='flex flex-wrap gap-2'>
          {currentItem.amenities.map((tag, index) => (
            <Badge key={index} variant='secondary'>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick, viewMode }) => (
  <Card
    className={`hover:bg-gray-50 cursor-pointer ${
      viewMode === "list" ? "flex" : ""
    }`}
    onClick={onClick}>
    <CardHeader
      className={`flex-row justify-between ${
        viewMode === "list" ? "w-1/4" : ""
      }`}>
      <CardTitle className='content-center'>{item.title}</CardTitle>
    </CardHeader>
    <CardContent className={viewMode === "list" ? "flex-1" : ""}>
      <img
        src={item.image}
        alt={item.title}
        className={`object-cover mb-2 ${
          viewMode === "list" ? "w-24 h-24 float-left mr-4" : "w-full h-40"
        }`}
      />
      <p className='text-sm text-muted-foreground my-3'>{item.content}</p>
      <div className='flex flex-wrap gap-2 mt-4'>
        {item.amenities.map((tag, index) => (
          <Badge key={index} variant='secondary'>
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function ViewModule({
  items: initialItems,
  setItems: setInitialItems,
  title,
}: GenericListProps) {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [currentItem, setCurrentItem] = useState<Omit<Item, "id">>({
    title: "",
    content: "",
    image: "",
    amenities: [],
  })
  const [newTag, setNewTag] = useState<string>("")
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handleAddOrUpdateItem = (): void => {
    if (currentItem.title.trim()) {
      if (isEditing && editingId !== null) {
        setItems(
          items.map((p) =>
            p.id === editingId ? { ...currentItem, id: editingId } : p
          )
        )
      } else {
        setItems([...items, { id: Date.now(), ...currentItem }])
      }
      setCurrentItem({ title: "", content: "", image: "", amenities: [] })
      setIsDialogOpen(false)
      setIsEditing(false)
      setEditingId(null)
    }
    setInitialItems(items)
  }

  const handleAddTag = (): void => {
    if (newTag.trim() && !currentItem.amenities.includes(newTag.trim())) {
      setCurrentItem({
        ...currentItem,
        amenities: [...currentItem.amenities, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const handleUpdateClick = (item: Item): void => {
    setCurrentItem({
      title: item.title,
      content: item.content,
      image: item.image,
      amenities: item.amenities,
    })
    setIsEditing(true)
    setEditingId(item.id)
    setIsDialogOpen(true)
  }

  return (
    <main className='flex flex-col gap-4 min-h-[90vh] w-full p-4'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold tracking-tight mb-4'>{title}</h1>
        <div className='flex gap-2'>
          <Button
            onClick={() => setViewMode("grid")}
            variant={viewMode === "grid" ? "default" : "outline"}>
            <Grid className='w-4 h-4 mr-1' />
            Grid
          </Button>
          <Button
            onClick={() => setViewMode("list")}
            variant={viewMode === "list" ? "default" : "outline"}>
            <List className='w-4 h-4 mr-1' />
            List
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setCurrentItem({
                    title: "",
                    content: "",
                    image: "",
                    amenities: [],
                  })
                  setIsEditing(false)
                  setEditingId(null)
                }}>
                <Plus className='w-4 h-4 mr-1' />
                Add {title.slice(0, -1)}
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>
                  {isEditing
                    ? `Update ${title.slice(0, -1)}`
                    : `Add New ${title.slice(0, -1)}`}
                </DialogTitle>
              </DialogHeader>
              <ItemForm
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                newTag={newTag}
                setNewTag={setNewTag}
                handleAddTag={handleAddTag}
              />
              <Button onClick={handleAddOrUpdateItem}>
                {isEditing
                  ? `Update ${title.slice(0, -1)}`
                  : `Add ${title.slice(0, -1)}`}
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div
        className={
          viewMode === "grid"
            ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4"
        }>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() => handleUpdateClick(item)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </main>
  )
}
