import './style.css'
import BotaoComprarCategorias from '../../assets/botaoComprarCategorias.svg'
export function CategoriasHome(props) {
  return (
    <article className="cardContainer">
      <div className="imgcategoriesContainer">
        <img
          className="imgCategories"
          src={props.img}
          alt="Imagem referente a categoria do produto."
        />
      </div>

      <div className="insideCardContainer">
        <h1 className="textCategories">{props.text}</h1>
        <div className="butonSeeMore">
          <h2 className="textSeeMoreCategories">Ver mais</h2>
          <img
            className="seeMoreCategories"
            src={BotaoComprarCategorias}
            alt="Seta do botão."
          />
        </div>
      </div>
    </article>
  )
}
