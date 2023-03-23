import { BannerSection } from "@/components/molecules/banner/BannerSection"
import { FifthSection } from "@/components/molecules/fifthSection/FifthSection"
import { FourthSection } from "@/components/molecules/fourthSection/FourthSection"
import { SecondSection } from "@/components/molecules/secondSection/SecondSection"
import { SeventhSection } from "@/components/molecules/seventhSection/SeventhSection"
import { SixthSection } from "@/components/molecules/sixthSection/SixthSection"
import { ThirdSection } from "@/components/molecules/thirdSection/ThirdSection"

export const MainHome = () => {
  return (
    <>
      <BannerSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </>
  )
}
