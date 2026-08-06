interface GuidesCardsProps {
  imageSrc: string;
  title: string;
  description: string;
}


const GuidesCards = ({ imageSrc, title, description }: GuidesCardsProps) => {
  return (
    <div className="relative w-full overflow-hidden min-h-148 ">
        <img src={imageSrc} alt="Guides Iamges"   className="absolute  h-full w-full inset-0 object-cover " />
        <div className="relative z-10 flex flex-col justify-end gap-3 p-4 h-full  bg-black/48 text-white">
            <div className="m-4">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="max-w-md text-[15px] leading-relaxed text-gray-300">
                {description}
                </p>
            </div>
          
        </div>
      </div>
  )
}

export default GuidesCards