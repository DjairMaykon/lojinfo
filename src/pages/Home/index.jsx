import './style.css'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { HeroHome } from '../../components/heroHome/HeroHome'
import { CategoriasHome } from '../../components/categoriasHome'
import { BolsaCategorias } from '../../assets/bolsaCategorias.svg'
import { TenisCategorias } from '../../assets/tenisCategorias.svg'
import { CamisaCategorias } from '../../assets/camisaCategorias.svg'
export function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <div className="categoriasContainer">
          <CategoriasHome text="Camisas" img={CamisaCategorias} />
          <CategoriasHome text="Tênis" img={TenisCategorias} />
          <CategoriasHome text="Bolsas" img={BolsaCategorias} />
        </div>
      </main>
      <Footer />
    </>
  )
}
