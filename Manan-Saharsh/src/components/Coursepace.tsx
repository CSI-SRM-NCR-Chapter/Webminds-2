import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-2 rounded-none  h-10 text-[#0F3941]">
        <SelectValue placeholder="Select pace" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-[#0F3941]">Type</SelectLabel>
          <SelectItem value="apple">Self-paced</SelectItem>
          <SelectItem value="banana">Live</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
