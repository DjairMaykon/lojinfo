import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import Arrow from '../../assets/selectForms.svg'
import { CartSummary } from '../../components/cartSummary'
import { CepForm } from '../../components/cepForm'
import { useEffect, useState } from 'react'

import './style.css'
import { RecentView } from '../../components/recentView'
import { EmptySection } from '../../components/emptySection'
import api from '../../utils/api'
import { CardCartItem } from '../../components/cardCartItem'

export function Cart() {
  const [items, setItems] = useState([])
  const [deliveryTax, setDeliveryTax] = useState()
  const [subtotal, setSubtotal] = useState()

  useEffect(() => {
    refreshCart()
  }, [])

  function refreshCart() {
    api.get('/itens').then(response => {
      setItems(
        response.data.response.map(item => {
          return {
            id: item.id,
            urlImg: item.url,
            title: item.titulo,
            brand: item.marca,
            color: item.cor,
            price: item.preco,
            quantity: item.quantidade,
          }
        })
      )
    })
    api.get('/pedidos/1').then(response => {
      if (response.data.response.length) {
        const pedido = response.data.response[0]
        setDeliveryTax(pedido.entrega)
        setSubtotal(pedido.subtotal)
      }
    })
  }

  function handleChangeItemQuantity(id, newQuantity) {
    api
      .put(`/itens/${id}`, {
        quantidade: newQuantity,
      })
      .then(() => refreshCart())
  }

  function handleDeleteItem(id) {
    api.delete(`itens/${id}`).then(() => refreshCart())
  }

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
                <section id="sectionCartItems">
                  {items.map((item, index) => (
                    <CardCartItem
                      key={index}
                      item={item}
                      onChangeItemQuantity={handleChangeItemQuantity}
                      onDeleteItem={handleDeleteItem}
                    />
                  ))}
                </section>
              </section>
              <section className="cartSummaryButtonContainer">
                {subtotal && deliveryTax && (
                  <CartSummary
                    itemsQuantity={items.length}
                    subTotal={subtotal}
                    deliveryTax={deliveryTax}
                  />
                )}
                <button>Finalizar Compra</button>
              </section>
            </>
          ) : (
            <>
              <EmptySection text="Seu carrinho está vazio" />
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
