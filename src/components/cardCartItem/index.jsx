import './style.css'

export function CardCartItem(props) {
  const { item } = props
  return (
    <article className="cardCartItem">
      <div className="img" style={{ backgroundImage: `url(${item.urlImg})` }} />
      <section className="content">
        <div className="productInfo">
          <div className="title">
            <h1>{item.title}</h1>
            <p>
              Vendido por <a>Joaninha</a>
            </p>
          </div>
          <div className="info">
            <p>Cor: {item.color}</p>
            <p>Tamanho: M</p>
            <p>Marca: {item.brand}</p>
          </div>
        </div>
        <div className="itemControlsContainer">
          <div className="buttonItemQuantity">
            <a>-</a> {item.quantity} <a>+</a>
          </div>
          <h4>R$ {item.price.toFixed(2)}</h4>
          <a className="buttonDeleteItem">Deletar</a>
        </div>
      </section>
    </article>
  )
}
