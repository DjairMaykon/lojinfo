import './style.css'

export function CartSummary(props) {
  const { itemsQuantity, subTotal, deliveryTax } = props
  return (
    <section id="sectionCartSummary">
      <h1 className="title">Resumo do pedido</h1>
      <div className="values">
        <hr />
        <div className="value">
          <h1>Subtotal ({itemsQuantity} item)</h1>
          <h2>R$ {subTotal.toFixed(2)}</h2>
        </div>
        <div className="value">
          <h1>Entrega</h1>
          <h2>R$ {deliveryTax.toFixed(2)}</h2>
        </div>
        <hr />
      </div>
      <div className="total">
        <h1>Total ({itemsQuantity} item)</h1>
        <h2>R$ {(subTotal + deliveryTax).toFixed(2)}</h2>
      </div>
    </section>
  )
}
