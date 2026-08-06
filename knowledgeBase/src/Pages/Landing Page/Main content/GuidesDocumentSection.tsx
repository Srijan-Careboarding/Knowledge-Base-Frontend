import GuidesCards from "@/components/GuidesCards"
import {GuidesCardsData} from "../../../../src/Data.ts"

const GuidesDocumentSection = () => {
  return (
    <div className=" gap-5  max-w-screen-2xl w-[90%] mx-auto py-16 ">
        <h4 className="text-2xl font-bold text-black mb-4">Guides & Documents</h4>

        <div className = " relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {GuidesCardsData.map((guide) => (
                <GuidesCards
                    key={guide.id}
                    imageSrc={guide.imageSrc}
                    title={guide.title}
                    description={guide.description}
                />
            ))}
        </div>
    </div>
  )
}

export default GuidesDocumentSection