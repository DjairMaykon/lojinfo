import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { CardProduct } from '../cardProduct'
import { Pagination } from '../pagination'

import './style.css'

export function SectionProducts(props) {
  const { search } = props
  const [products, setProducts] = useState([])
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
  }, [search, page])

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  return (
    <section id="productSection">
      {search ? <h1>Resultados de “{search}”</h1> : <h1>Produtos</h1>}
      <section>
        {products.map(product => (
          <CardProduct
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
