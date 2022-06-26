import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { CardProduct } from '../cardProduct'
import { Pagination } from '../pagination'
import { Modal } from '../modal'
import { toast } from 'react-hot-toast'

import './style.css'
import { useSearchParams } from 'react-router-dom'

export function SectionProducts() {
  const search = useSearchParams()[0].get('search')

  const [products, setProducts] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productModal, setProductModal] = useState()
  const [page, setPage] = useState(1)
  const itemsPerPage = 10
  const [pageQuantity, setPageQuantity] = useState(1)

  useEffect(() => {
    api.get('/produtos/total').then(response => {
      if (response.data.response.length) {
        setPageQuantity(
          Math.ceil(parseInt(response.data.response[0].total) / itemsPerPage)
        )
      }
    })
  }, [])

  useEffect(() => {
    console.log(search)
    getProducts()
  }, [search, page])

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function getProducts() {
    api
      .get('/produtos', {
        params: {
          pesquisa: search ?? '',
          limit: itemsPerPage,
          page: page,
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
  }

  function deleteProduct(productId) {
    api.delete(`/produtos/${productId}`).then(() => {
      toast.success('Produto deletado com sucesso')
      getProducts()
      setModalIsOpen(false)
    })
  }

  function openModal(productId) {
    api.get('/produtos/' + productId).then(response => {
      if (response.data.response.length > 0) {
        const produto = response.data.response[0]

        api.get(`/itens/${productId}`).then(itemData => {
          let isInCart = false
          let quantity = 1

          if (itemData.data.response.length) {
            isInCart = true
            quantity = itemData.data.response[0].quantidade
          }

          setProductModal({
            productId,
            productTitle: produto.titulo,
            productDescription: produto.descricao,
            productBrand: produto.marca,
            productColor: produto.cor,
            productPrice: produto.preco,
            productImg: produto.url,
            isInCart,
            quantity,
          })
          setModalIsOpen(true)
        })
      }
    })
  }

  return (
    <section id="productSection">
      <Modal
        modalIsOpen={modalIsOpen}
        product={productModal}
        closeModal={() => setModalIsOpen(false)}
        onDeleteProduct={deleteProduct}
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
      {pageQuantity && pageQuantity > 1 && (
        <Pagination
          pagesQuantity={pageQuantity}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  )
}
