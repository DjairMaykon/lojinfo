import { useEffect, useState } from 'react'
import { CardProduct } from '../cardProduct'
import { Pagination } from '../pagination'

import './style.css'

export function SectionProducts(props) {
  const { search } = props
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(
      [...Array(10)].map(id => ({
        id,
        urlImg:
          'https://images.unsplash.com/photo-1589310243389-96a5483213a8?,ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVnaW5uZXJ8ZW58MHx8MHx8&w=1000&q=80',
        title: 'camisa social polo original',
        category: 'polo',
        price: 54,
      }))
    )
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
            category={product.category}
            price={product.price}
          />
        ))}
      </section>
      <Pagination pagesQuantity={20} onPageChange={page => console.log(page)} />
    </section>
  )
}
