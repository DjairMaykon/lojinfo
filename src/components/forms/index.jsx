export function Forms() {
  return (
    <form>
      <div className="titlesForms">
        <h1></h1> <h2></h2>
      </div>
      <div className="imgForms">
        <h3>Preview da imagem</h3> <img src="" alt="" />
      </div>
      <div className="inputUrlForms">
        <h4>Url da imagem</h4>
        <input type="text" />
      </div>
      <div className="inputTitleForms">
        <h4>Título</h4>
        <input type="text" />
      </div>
      <div className="inputDescriptionForms">
        <div>
          <h4>Descrição do produto</h4>
          <input type="text" />
        </div>
        <p>maximo de 300 caracteres</p>
      </div>
      <div className="inputMarcaForms">
        <h4>Marca</h4>
        <input type="text" />
      </div>
      <div className="inputColorForms">
        <h4>Cor</h4>
        <input type="text" />
      </div>
      <div className="inputCategoriesForms">
        <div>
          <h4>Categoria</h4>
          <input type="select" />
        </div>
        <div>
          <h4>Subtegoria</h4>
          <input type="select" />
        </div>
      </div>
      <div className="inputPriceForms">
        <h4>Preço</h4>
        <input type="text" />
      </div>
      <button></button>
    </form>
  )
}
