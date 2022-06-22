import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { CardProduct } from '../cardProduct'
import { Pagination } from '../pagination'

import './style.css'

export function SectionProducts(props) {
  const { search } = props
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/produtos').then(response => {
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
      <Pagination pagesQuantity={20} onPageChange={page => console.log(page)} />
    </section>
  )
}
