import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"


interface ExploreMoreButtonProps {
  buttonName: string;
  icon: LucideIcon; 
}


export const ExploreMoreButton = ({ buttonName, icon: Icon }: ExploreMoreButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Button className="h-20 w-20 shrink-0 rounded-full bg-black p-0 ">
        <Icon className="h-8 w-8 text-white" />
      </Button>

      <span className="text-sm font-medium text-white max-w-25 text-center">
        {buttonName}
      </span>
    </div>
  )
}