import { ArrowRight } from "lucide-react";

const ReadMoreButton = () => {
  return (
    <button className="bg-none text-primary  py-2 rounded-full text-sm font-semibold cursor-pointer flex justify-start items-center gap-4 ">
      <p>Read More</p>
      <ArrowRight className="h-6 w-6 " />
    </button>
  )
}

export default ReadMoreButton
