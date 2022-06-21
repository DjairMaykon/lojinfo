import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import Arrow from '../../assets/selectForms.svg'
import { CartSummary } from '../../components/cartSummary'
import { CepForm } from '../../components/cepForm'
import { SectionItems } from '../../components/sectionItems'
import { useEffect, useState } from 'react'

import './style.css'
import { RecentView } from '../../components/recentView'
import { Link } from 'react-router-dom'

export function Cart() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([])
  }, [])

  return (
    <>
      <Header />
      <main id="mainCart">
        <h1 className="title">
          <img src={Arrow} alt="" />
          Carrinho
        </h1>
        {items.length > 0 ? (
          <section>
            <section>
              <CepForm />
              <SectionItems />
            </section>
            <CartSummary />
          </section>
        ) : (
          <section className="emptyCart">
            <h1>Seu carrinho está vazio :(</h1>
            <p>
              <Link to="/">Continue navegando</Link> pela Lojinha e encontre
              produtos incríveis!
            </p>
            <RecentView />
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
