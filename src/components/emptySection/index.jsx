import { Link } from 'react-router-dom'

import './style.css'

export function EmptySection(props) {
  return (
    <section className="emptySection">
      <h1>{props.text} :</h1>
      <p>
        <Link to="/">Continue navegando</Link> pela Lojinha e encontre produtos
        incríveis!
      </p>
    </section>
  )
}
