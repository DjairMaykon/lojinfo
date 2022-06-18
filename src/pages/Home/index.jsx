import './style.css'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { HeroHome } from '../../components/heroHome/HeroHome'
export function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <div className="categoriasContainer"></div>
      </main>
      <Footer />
    </>
  )
}
