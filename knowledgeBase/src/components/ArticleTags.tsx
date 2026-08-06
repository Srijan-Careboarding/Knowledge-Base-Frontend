type ArticleTagsProps = {
  tagName?: string;
};

const ArticleTags = ({ tagName= "Article" }: ArticleTagsProps) => {
  return (
    <button className="bg-secondary text-tag-text px-4 py-1 rounded-full text-sm font-medium w-fit ">
      {tagName}
    </button>   
  )
}

export default ArticleTags;