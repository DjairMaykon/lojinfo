import { CardProduct } from '../cardProduct'

import './style.css'

export function RecentView(props) {
  const { product } = props
  return (
    <section id="recentViewContainer">
      <h1>Visto recentemente</h1>
      <section>
        <CardProduct
          key={product.id}
          urlImg={product.urlImg}
          title={product.title}
          category={product.category}
          price={product.price}
        />
        <CardProduct
          key={product.id}
          urlImg={product.urlImg}
          title={product.title}
          category={product.category}
          price={product.price}
        />
      </section>
    </section>
  )
}
