import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { CardProduct } from '../cardProduct'
import { Pagination } from '../pagination'
import { Modal } from '../modal'

import './style.css'

export function SectionProducts(props) {
  const { search } = props
  const [products, setProducts] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  useEffect(() => {
    api
      .get('/produtos', {
        params: {
          pesquisa: search ?? '',
        },
      })
      .then(response => {
        setProducts(
          response.data.response.map(produto => {
            return {
              id: produto.id,
              urlImg: produto.url,
              title: produto.titulo,
              brand: produto.marca,
              price: produto.preco,
            }
          })
        )
      })
  }, [search])

  return (
    <section id="productSection">
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
      {search ? <h1>Resultados de “{search}”</h1> : <h1>Produtos</h1>}
      <section>
        {products.map(product => (
          <CardProduct
            onClick={() => setModalIsOpen(true)}
            key={product.id}
            urlImg={product.urlImg}
            title={product.title}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </section>
      <Pagination pagesQuantity={20} onPageChange={page => console.log(page)} />
    </section>
  )
}
