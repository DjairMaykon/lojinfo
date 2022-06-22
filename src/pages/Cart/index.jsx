import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import Arrow from '../../assets/selectForms.svg'
import { CartSummary } from '../../components/cartSummary'
import { CepForm } from '../../components/cepForm'
import { SectionCartItems } from '../../components/sectionCartItems'
import { useEffect, useState } from 'react'

import './style.css'
import { RecentView } from '../../components/recentView'
import { Link } from 'react-router-dom'

export function Cart() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(
      [...Array(3)].map(id => ({
        id,
        urlImg:
          'https://images.unsplash.com/photo-1589310243389-96a5483213a8?,ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVnaW5uZXJ8ZW58MHx8MHx8&w=1000&q=80',
        title: 'camisa social polo original',
        brand: 'polo',
        color: 'Azul',
        price: 54,
        quantity: 3,
      }))
    )
  }, [])

  return (
    <>
      <Header />
      <main id="mainCart">
        <h1 className="title">
          <img src={Arrow} alt="" />
          Carrinho
        </h1>
        <section id="cartContent">
          {items.length > 0 ? (
            <>
              <section className="itemsCepContainer">
                <CepForm />
                <SectionCartItems items={items} />
              </section>
              <section className="cartSummaryButtonContainer">
                <CartSummary
                  itemsQuantity={items.length}
                  subTotal={items.reduce(
                    (previous, current) =>
                      (previous += current.quantity * current.price),
                    0
                  )}
                  deliveryTax={14.9}
                />
              </section>
            </>
          ) : (
            <>
              <section className="emptyCart">
                <h1>Seu carrinho está vazio :(</h1>
                <p>
                  <Link to="/">Continue navegando</Link> pela Lojinha e encontre
                  produtos incríveis!
                </p>
              </section>
              <RecentView
                product={{
                  id: 0,
                  urlImg:
                    'https://images.unsplash.com/photo-1589310243389-96a5483213a8?,ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVnaW5uZXJ8ZW58MHx8MHx8&w=1000&q=80',
                  title: 'camisa social polo original',
                  category: 'polo',
                  price: 54,
                }}
              />
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
