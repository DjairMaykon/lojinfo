import './style.css'

export function CardProduct(props) {
  const { urlImg, title, category, price } = props

  return (
    <article className="cardProduct">
      <div className="img" style={{ backgroundImage: `url(${urlImg})` }}>
        <span>M</span>
        <span>G</span>
      </div>
      <p className="price">R$ {price}</p>
      <p className="title">{title}</p>
      <p className="category">{category}</p>
    </article>
  )
}
