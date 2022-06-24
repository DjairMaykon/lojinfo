import './style.css'

export function CardCartItem(props) {
  const { item, onChangeItemQuantity, onDeleteItem } = props

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
            <a
              onClick={() =>
                item.quantity > 1 &&
                onChangeItemQuantity(item.id, item.quantity - 1)
              }
            >
              -
            </a>
            {item.quantity}
            <a onClick={() => onChangeItemQuantity(item.id, item.quantity + 1)}>
              +
            </a>
          </div>
          <h4>R$ {item.price.toFixed(2)}</h4>
          <a className="buttonDeleteItem" onClick={() => onDeleteItem(item.id)}>
            Deletar
          </a>
        </div>
      </section>
    </article>
  )
}
