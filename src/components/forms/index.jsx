import './style.css'
import defaultImageProduct from '../../assets/defaultImageProduct.svg'
export function Forms(props) {
  return (
    <form>
      <div className="titlesForms">
        <h1 className="titleFormsH1">Venha vender com a gente!</h1>
        <p className="titleFormsP">Cadastre seu produto e venda na Lojinha</p>
      </div>
      <div className="imgForms">
        <h3 className="titleFormsH3">Preview da imagem</h3>
        <div className="innerConteinerImgForms">
          <img
            className="defaultImageProduct"
            src={defaultImageProduct}
            alt="Modelo para adicionar a imagem do produto."
          />
        </div>
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
        <div className="descriptionFormsWarningMessage">
          <h5 className="titleFormsH5">(max.300 caracteres)</h5>
        </div>
      </div>
      <div className="brandColorFormsContainer">
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
      </div>

      <div className="inputCategoriesForms">
        <div className="innerDivCategories">
          <h4 className="titleFormsH4">Categoria</h4>
          <select name="" className="inputSelectForms">
            <option value="">Vestuário</option>
            <option value="">Calçados</option>
            <option value="">Acessórios</option>
          </select>
        </div>
        <div className="innerDivCategories">
          <h4 className="titleFormsH4">Subtegoria</h4>
          <select name="" className="inputSelectForms">
            <option value="">Camisas</option>
            <option value="">Tênis</option>
            <option value="">Bolsas</option>
          </select>
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
