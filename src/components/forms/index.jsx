import './style.css'
export function Forms(props) {
  return (
    <form>
      <div className="titlesForms">
        <h1 className="titleFormsH1">Venha vender com a gente!</h1>
        <p className="titleFormsP">Cadastre seu produto e venda na Lojinha</p>
      </div>
      <div className="imgForms">
        <h3 className="titleFormsH3">Preview da imagem</h3>
        <img src="" alt="" />
      </div>
      <div className="inputUrlForms">
        <h4 className="titleFormsH4">Url da imagem</h4>
        <input
          className="inputTextForms"
          type="text"
          placeholder={props.urlImg}
        />
      </div>
      <div className="inputTitleForms">
        <h4 className="titleFormsH4">Título</h4>
        <input
          className="inputTextForms"
          type="text"
          placeholder={props.title}
        />
      </div>
      <div className="inputDescriptionForms">
        <div>
          <h4 className="titleFormsH4">Descrição do produto</h4>
          <input
            className="inputTextForms"
            type="text"
            placeholder={props.description}
          />
        </div>
        <h5 className="descriptionFormsWarningMessage">(max.300 caracteres)</h5>
      </div>
      <div className="inputBrandForms">
        <h4 className="titleFormsH4">Marca</h4>
        <input
          className="inputTextForms"
          type="text"
          placeholder={props.brand}
        />
      </div>
      <div className="inputColorForms">
        <h4 className="titleFormsH4">Cor</h4>
        <input
          className="inputTextForms"
          type="text"
          placeholder={props.color}
        />
      </div>
      <div className="inputCategoriesForms">
        <div className="innerDivCategories">
          <h4 className="titleFormsH4">Categoria</h4>
          <input className="inputSelectForms" type="select" />
        </div>
        <div className="innerDivCategories">
          <h4 className="titleFormsH4">Subtegoria</h4>
          <input className="inputSelectForms" type="select" />
        </div>
      </div>
      <div className="inputPriceForms">
        <h4 className="titleFormsH4">Preço</h4>
        <input
          className="inputTextForms"
          type="text"
          placeholder={props.price}
        />
      </div>
      <div className="alignButtonContainer">
        <button className="buttonForms"> {props.text}</button>
      </div>
    </form>
  )
}
