import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { HeroHome } from '../../components/heroHome/HeroHome'
import { SectionProducts } from '../../components/sectionProducts'

import './style.css'

export function Home() {
  return (
    <>
      <Header />
      <main id="mainHome">
        <HeroHome />
        <SectionProducts />
      </main>
      <Footer />
    </>
  )
}
