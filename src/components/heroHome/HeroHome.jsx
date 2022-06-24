import compras from '../../assets/compras.svg'
import chevronDown from '../../assets/chevronDown.svg'
import './style.css'

export function HeroHome() {
  return (
    <section id="heroHome">
      <div className="heroHomeContainer">
        <figure>
          <img src={compras} alt="Imagem de compras" />
        </figure>
        <article className="content">
          <div className="text">
            <h1>Explore nossa nova coleção</h1>
            <h2>
              Aproveite as ofertas e encontre o look ideal para aproveitar o seu
              São João na Lojinha.
            </h2>
          </div>
          <button>
            Ver descontos
            <img src={chevronDown} alt="" />
          </button>
        </article>
      </div>
    </section>
  )
}
