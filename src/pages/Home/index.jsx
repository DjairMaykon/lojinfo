import { CategoriasHome } from '../../components/categoriasHome'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { HeroHome } from '../../components/heroHome/HeroHome'
import { SectionProducts } from '../../components/sectionProducts'
import BolsaCategorias from '../../assets/bolsaCategorias.svg'
import CamisaCategorias from '../../assets/camisaCategorias.svg'
import TenisCategorias from '../../assets/tenisCategorias.svg'
import './style.css'
import { useState } from 'react'

export function Home() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Header onSearch={text => setSearch(text)} />
      <main id="mainHome">
        <HeroHome />
        <section className="categotiasContainerHome">
          <CategoriasHome text="Camisas" img={CamisaCategorias} />
          <CategoriasHome text="Tênis" img={TenisCategorias} />
          <CategoriasHome text="Bolsas" img={BolsaCategorias} />
        </section>
        <SectionProducts search={search} />
      </main>
      <Footer />
    </>
  )
}
