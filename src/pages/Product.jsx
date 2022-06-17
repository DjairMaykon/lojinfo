import { useParams } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export function Product() {
  const { id } = useParams()
  return (
    <>
      <Header />
      <main>Product: {id}</main>
      <Footer />
    </>
  )
}
