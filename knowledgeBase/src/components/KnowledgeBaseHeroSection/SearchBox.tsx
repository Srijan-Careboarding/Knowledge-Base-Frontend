import { Search } from "lucide-react"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const SearchBox = () => {
  return (
      
      
      <Field className="h-15 w-full max-w-4xl  ">
        <InputGroup className="flex h-full items-center gap-3 rounded-[8px] bg-white px-4">

          <InputGroupAddon align="inline-start" className="flex items-center border-none">
            <Search className="h-7 w-7 text-gray-500" />
          </InputGroupAddon>
          
          <InputGroupInput 
            id="input-group-url" 
            placeholder="What do you wanna learn about today?" 
            className="h-full border-none p-0 text-[28px] placeholder:text-gray-400 " 
          /> 
          
        </InputGroup>
      </Field>
      
  )
}

export default SearchBox


