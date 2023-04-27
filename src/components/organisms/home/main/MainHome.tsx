import { BannerSection } from "@/components/molecules/banner/BannerSection"
import { FifthSection } from "@/components/molecules/fifthSection/FifthSection"
import { FourthSection } from "@/components/molecules/fourthSection/FourthSection"
import { SecondSection } from "@/components/molecules/secondSection/SecondSection"
import { SeventhSection } from "@/components/molecules/seventhSection/SeventhSection"
import { SixthSection } from "@/components/molecules/sixthSection/SixthSection"
import { ThirdSection } from "@/components/molecules/thirdSection/ThirdSection"
import { PropsPage } from "@/interfaces/IDataStrapi"

export const MainHome = ({ data }: PropsPage) => {
  return (
    <>
      <BannerSection  data={data[0]} />
      <SecondSection  data={data[1]} />
      <ThirdSection   data={data[2]} />
      <FourthSection  data={data[3]} />
      <FifthSection   data={data[4]} />
      <SixthSection   data={data[5]} /> 
      <SeventhSection data={data[6]} />  
    </>
  )
}
