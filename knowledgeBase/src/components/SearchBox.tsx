import { Search } from "lucide-react"

import { Field} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,

} from "@/components/ui/input-group"


const SearchBox = () => {
  return (
    <div className="bg-teal-100 h-screen flex justify-center items-center">
    <Field className="w-xl  ">
      <InputGroup className="rounded-[8px] bg-white h-15 gap-2 px-4 ">
        <InputGroupAddon align="inline-start" className="h-7">
          <Search className="" />
        </InputGroupAddon>
        <InputGroupInput id="input-group-url" placeholder="What do you wanna learn about today?" className="h-7 " />
        
      </InputGroup>
    </Field>
    </div>
  )
}

export default SearchBox


