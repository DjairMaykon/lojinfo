import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Forms } from '../components/forms'

export function Product() {
  return (
    <>
      <Header />
      <main>
        <Forms text={'Cadastrar produto'} />
      </main>

      <Footer />
    </>
  )
}
