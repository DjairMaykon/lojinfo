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
  const [productModal, setProductModal] = useState()

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

  function openModal(productId) {
    api.get('/produtos/' + productId).then(response => {
      if (response.data.response.length > 0) {
        const produto = response.data.response[0]
        setProductModal({
          productTitle: produto.titulo,
          productDescription: produto.descricao,
          productBrand: produto.marca,
          productColor: produto.cor,
          productPrice: produto.preco,
          productImg: produto.url,
        })
        setModalIsOpen(true)
      }
    })
  }

  return (
    <section id="productSection">
      <Modal
        modalIsOpen={modalIsOpen}
        product={productModal}
        closeModal={() => setModalIsOpen(false)}
      />
      {search ? <h1>Resultados de “{search}”</h1> : <h1>Produtos</h1>}
      <section>
        {products.map(product => (
          <CardProduct
            onClick={() => openModal(product.id)}
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
