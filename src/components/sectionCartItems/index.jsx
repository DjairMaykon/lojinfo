import { CardCartItem } from '../cardCartItem'
import './style.css'

export function SectionCartItems(props) {
  const { items } = props
  return (
    <section id="sectionCartItems">
      {items.map((item, index) => (
        <CardCartItem key={index} item={item} />
      ))}
    </section>
  )
}
