
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CardsCarousel = () => {
  return (
    <div className="flex w-full flex-row gap-4 overflow-x-auto p-4"> 
    <Card className="mx-auto w-full h-fit max-w-sm p-4 rounded-none bg-black/40 backdrop-blur-sm shadow-lg flex-col gap-4 ">
      <img
        src="src/assets/Upload Cover Image.svg"
        alt="Event cover"
        className=" rounded-none h-full w-full pt-4"
      />
      <CardHeader className="p-0 rounded-none">
        <p className="text-white/80 text-[13px]">
          Jul 22nd , 2026
        </p>
        <CardTitle className="text-white">Design systems meetup</CardTitle>
        <CardDescription className="text-white/80 p-0">
          Learn how to accurately record and document a patient's vital signs during a visit to ensure complete and reliable clinical records.
        </CardDescription>
      </CardHeader>
      <button className=" h-10 w-fit px-4  bg-bg-primary rounded-[8px] text-white">
        watch video
      </button>
    </Card></div>
  )
}

export default CardsCarousel