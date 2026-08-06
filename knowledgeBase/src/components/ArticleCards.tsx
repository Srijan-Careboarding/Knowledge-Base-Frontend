import ArticleTags from "@/components/ArticleTags";
import ReadMoreButton from "@/components/ReadMoreButton";

// 1. Define the props the card needs to render dynamically
type ArticleCardProps = {
  imageSrc: string;
  tag: string;
  title: string;
  description: string;
};

const ArticleCard = ({ imageSrc, tag, title, description }: ArticleCardProps) => {
  return (

    <div className="flex flex-col items-start gap-3">
      <img 
        src={imageSrc} 
        alt={title} 
        className=" rounded-none object-cover"
      />
      <ArticleTags tagName={tag} />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-700">{description}</p>
      <ReadMoreButton />
    </div>
  );
};

export default ArticleCard;