import './style.css'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Forms } from '../../components/forms'

export function Product() {
  return (
    <>
      <Header />
      <main>
        <div className="titlesForms">
          <h1 className="titleFormsH1">Venha vender com a gente!</h1>
          <p className="titleFormsP">Cadastre seu produto e venda na Lojinha</p>
        </div>
        <Forms text={'Cadastrar produto'} />
      </main>

      <Footer />
    </>
  )
}
