import './style.css'

export function CardProduct(props) {
  const { urlImg, title, brand, price, onClick } = props

  return (
    <article className="cardProduct" onClick={onClick}>
      <div className="img" style={{ backgroundImage: `url(${urlImg})` }}>
        <span>M</span>
        <span>G</span>
      </div>
      <p className="price">R$ {price}</p>
      <p className="title">{title}</p>
      <p className="brand">{brand}</p>
    </article>
  )
}
