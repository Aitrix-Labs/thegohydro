import BannerImageAndText from '../components/BannerImageAndText'
import Careers from '../components/Careers'
import Hero from '../components/Hero'
import InContentPromo from '../components/InContentPromo'
import Stories from '../components/Stories'
import WaterStorage from '../components/WaterStorage'
import { about, activities, energyFuture } from '../data/content'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BannerImageAndText {...about} />
      <InContentPromo {...activities} />
      <BannerImageAndText {...energyFuture} />
      <WaterStorage />
      <Stories />
      <Careers />
    </>
  )
}
