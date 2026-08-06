import HeroSection from "./KnowledgeBaseHeroSection/HeroSection"
import Section from "./Main content/Section"
import VideoSection from "./Main content/VideoSection"
import ArticleSection from "./Main content/ArticleSection"
import GuidesDocumentSection from "./Main content/GuidesDocumentSection"


const KnowledgeBasePage = () => {
  return (
    <div>
      <HeroSection />
      <Section />
      <VideoSection />
      <ArticleSection />
      <GuidesDocumentSection />
    </div>
  )
}

export default KnowledgeBasePage