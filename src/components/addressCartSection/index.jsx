import './style.css'

export function AddressCartSection(props) {
  const { addressInfo, deliveryTax } = props
  return (
    deliveryTax &&
    addressInfo && (
      <section id="sectionCartSummary">
        <h1 className="title">Endereço</h1>
        <div className="values">
          <hr />
          {`${
            addressInfo.street && addressInfo.street.length
              ? addressInfo.street
              : 'Rua não encontrada'
          }, ${addressInfo.city} - ${addressInfo.uf}`}
          <hr />
        </div>
        <div className="total">
          <h1>Valor da entrega</h1>
          <h2>R$ {deliveryTax.toFixed(2)}</h2>
        </div>
      </section>
    )
  )
}
