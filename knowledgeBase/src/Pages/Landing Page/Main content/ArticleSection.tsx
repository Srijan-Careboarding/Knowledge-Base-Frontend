import ArticleCards from "../../../components/ArticleCards"
import { ArticlesData } from "../../../../src/Data.ts"



const ArticleSection = () => {
  return (
    <div className=" gap-5 h-166.75 max-w-screen-2xl w-[90%] mx-auto py-16 ">
      <div>
        <h2 className="text-2xl font-bold text-black">Article</h2>
        <div className = "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
       {ArticlesData.map((articles)=>(
        <ArticleCards
        key= {articles.id}
        imageSrc = {articles.imageSrc}
        tag = {articles.tag}
        title = {articles.title}
        description = {articles.description}
        />
       ))}</div>
      </div>
    </div>
  )
}

export default ArticleSection