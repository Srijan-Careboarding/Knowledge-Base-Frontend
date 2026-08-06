import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface QuickLinksButtonsProps {
  buttonText: string;
}

const QuickLinksButtons = ({ buttonText }: QuickLinksButtonsProps) => {
  return (
    
      
      <Button 
        variant="default" 
        className="h-10 rounded-none bg-black px-6 text-[15px] font-medium text-gray-200 hover:bg-[#2a2a2a]"
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4 shrink-0 " />
      </Button>
    
  )
}

export default QuickLinksButtons