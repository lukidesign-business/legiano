import AngledImageSection from "@/components/angled-image-section"
import BonusSection from "@/components/bonus-section"
import RecommendationsSection from "@/components/recommendations-section"
import UsefulInstructions from "@/components/useful-instructions"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AngledImageSection />
      <BonusSection />
      <RecommendationsSection />
      <UsefulInstructions />
    </div>
  )
}
