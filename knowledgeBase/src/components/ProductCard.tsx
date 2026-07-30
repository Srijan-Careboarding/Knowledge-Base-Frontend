import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  link: string;
}




export const ProductCard = ({ title, description, imageSrc, bgColor, link = "#" }: ProductCardProps) => {
  return  (
    <a href={link} >
      <Card  className="w-[290.67px] h-57.5 overflow-hidden rounded-xl border border-gray-200 shadow-sm p-0 gap-0">
        
        {/* Top Section  */}
        <div className="flex justify-center items-center w-full h-35" style={{ backgroundColor: bgColor }}>
          <img
          src={imageSrc} 
          alt={title} 
          className="w-37.5 h-[92.52px] " 
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-[290.67px] h-22.5">
        <CardHeader className="p-4 ">
          <CardTitle className="text-[16px] font-semibold font-sans text-gray-950">{title}</CardTitle>
          <CardDescription className="text-[12px] text-gray-600 font-normal leading-relaxed">
            {description}   
          </CardDescription>
        </CardHeader>
      </div>

    </Card>
    </a>
  )
}