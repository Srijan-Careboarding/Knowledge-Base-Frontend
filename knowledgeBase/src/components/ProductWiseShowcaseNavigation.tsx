import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard } from "./ProductCard"
import { X } from "lucide-react"
import { useState } from "react"


const ProductWiseShowcaseNavigation = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

 const ProductData = [
  {
    id: "clinical",
    title: "Clinical Module",
    description: "Manage help content for clinical workflows and patient care.",
    imageSrc: "src/assets/Image.svg",
    bgColor: "#FFF7ED",
    link: "",
  },
  {
    id: "agency",
    title: "Agency Management Module",
    description: "Manage articles for agency operations and administration workflows.",
    imageSrc: "src/assets/Image (1).svg",
    bgColor: "#F2FCFC",
    link: "",
  },
  {
    id: "revenue",
    title: "Revenue Cycle Management",
    description: "Manage documentation for billing, claim, and revenue cycle management.",
    imageSrc: "src/assets/Image (2).svg",
    bgColor: "#F0FDF4",
    link: "",
  },
  
  
];
  

  return (
    
    
    <div className="relative min-h-screen bg-gray-50">

      {/* Bg image just for testing purpose, will be removed later
      <img src="src/assets/4.svg" alt="" /> */}

      {isModalOpen && (
      <div className=" fixed inset-0 flex justify-center items-center z-50 bg-black/50 backdrop-blur-sm p-4">        
        <Card className="sm:w-fit w-full max-w-325  max-h-220 gap-0 p-0 rounded-lg shadow-2xl ">
          <CardHeader className="flex flex-row shrink-0 space-y-0 justify-between items-center p-4 border-b border-gray-300">
            <CardTitle className="p-0 font-['Inter'] font-bold text-[16px]">
              Where would you like to start?
            </CardTitle>
            <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-200 transition-colors">
              <X className="cursor-pointer w-6 h-6 text-gray-500 hover:text-black transition-colors" />
            </button>
          </CardHeader>
          
          <CardContent className="h-auto p-6 gap-6 w-fit overflow-y-auto">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {ProductData.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </CardContent>
        </Card> 

      </div>
      )}
    </div>
  )
}

export default ProductWiseShowcaseNavigation