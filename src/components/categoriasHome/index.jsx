import './style.css'
import botaoComprarCategorias from '../../assets/botaoComprarCategorias.svg'
export function CategoriasHome(props) {
  return (
    <section className="cardContainer">
      <img
        className="imgCategories"
        src={props.img}
        alt="Imagem referente a categoria do produto."
      />
      <div className="insideCardContainer">
        <p className="textCategories">{props.text}</p>
        <div className="butonSeeMore">
          <p className="textSeeMoreCategories">Ver mais</p>
          <img
            className="seeMoreCategories"
            src={botaoComprarCategorias}
            alt="Seta do botão."
          />
        </div>
      </div>
    </section>
  )
}
