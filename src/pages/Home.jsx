import './style.css'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { HeroHome } from '../components/heroHome/HeroHome'
import { CategoriasHome } from '../components/categoriasHome'
export function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <div className="categoriasContainer">
          <CategoriasHome />
          <CategoriasHome />
          <CategoriasHome />
        </div>
      </main>
      <Footer />
    </>
  )
}
