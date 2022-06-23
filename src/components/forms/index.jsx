import './style.css'
import { useState } from 'react'

export function Forms(props) {
  const categories = ['Vestuário', 'Calçados', 'Acessórios']
  const subcategories = ['Camisas', 'Tênis', 'Bolsas']
  const [productUrl, setProductUrl] = useState(
    props.product ? props.product.url : null
  )
  const [productTitle, setProductTitle] = useState(
    props.product ? props.product.title : null
  )
  const [productDescription, setProductDescription] = useState(
    props.product ? props.product.description : null
  )
  const [productBrand, setProductBrand] = useState(
    props.product ? props.product.brand : null
  )
  const [productColor, setProductColor] = useState(
    props.product ? props.product.color : null
  )
  const [productCategory, setProductCategory] = useState(
    props.product ? props.product.category : categories[0]
  )
  const [productSubcategory, setProductSubcategory] = useState(
    props.product ? props.product.subcategory : subcategories[0]
  )
  const [productPrice, setProductPrice] = useState(
    props.product ? props.product.price : null
  )
  const [formInvalid, setFormInvalid] = useState({
    url: false,
    title: false,
    description: false,
    brand: false,
    color: false,
    category: false,
    subcategory: false,
    price: false,
  })

  function handleSendForm() {
    setFormInvalid({
      url: !productUrl || productUrl == '',
      title: !productTitle || productTitle == '',
      description:
        !productDescription ||
        productDescription == '' ||
        productDescription.length > 300,
      brand: !productBrand || productBrand == '',
      color: !productColor || productColor == '',
      category: !productCategory || productCategory == '',
      subcategory: !productSubcategory || productSubcategory == '',
      price: !productPrice || productPrice == '' || isNaN(productPrice),
    })
    if (Object.entries(formInvalid).some(e => e[1])) return

    props.onSendForm({
      url: productUrl,
      title: productTitle,
      description: productDescription,
      brand: productBrand,
      color: productColor,
      category: productCategory,
      subcategory: productSubcategory,
      price: productPrice,
    })
  }

  return (
    <form onSubmit={e => e.preventDefault()} id="formProduto">
      <div className="imgForms">
        <h3 className="titleFormsH3">Preview da imagem</h3>
        <div className="innerConteinerImgForms">
          <div
            className="defaultImageProduct"
            style={{
              backgroundImage: productUrl
                ? `url(${productUrl})`
                : 'url(/src/assets/defaultImageProduct.svg)',
              width: productUrl ? '100%' : '120px',
              height: productUrl ? '100%' : '110px',
            }}
            alt="Modelo para adicionar a imagem do produto."
          />
        </div>
      </div>

      <div className="formsContainerLessImg">
        <div className="inputUrlForms">
          <h4 className="titleFormsH4">Url da imagem</h4>
          <input
            className={`inputTextForms ${formInvalid['url'] ? 'invalid' : ''}`}
            type="text"
            onChange={e => setProductUrl(e.target.value)}
            value={productUrl ?? ''}
          />
        </div>
        <div className="inputTitleForms">
          <h4 className="titleFormsH4">Título</h4>
          <input
            className={`inputTextForms ${
              formInvalid['title'] ? 'invalid' : ''
            }`}
            type="text"
            onChange={e => setProductTitle(e.target.value)}
            value={productTitle ?? ''}
          />
        </div>
        <div className="inputDescriptionForms">
          <div>
            <h4 className="titleFormsH4">Descrição do produto</h4>
            <input
              className={`inputTextForms ${
                formInvalid['description'] ? 'invalid' : ''
              }`}
              type="text"
              onChange={e => setProductDescription(e.target.value)}
              value={productDescription ?? ''}
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
              className={`inputTextForms ${
                formInvalid['brand'] ? 'invalid' : ''
              }`}
              type="text"
              onChange={e => setProductBrand(e.target.value)}
              value={productBrand ?? ''}
            />
          </div>
          <div className="inputColorForms">
            <h4 className="titleFormsH4">Cor</h4>
            <input
              className={`inputTextForms ${
                formInvalid['color'] ? 'invalid' : ''
              }`}
              type="text"
              onChange={e => setProductColor(e.target.value)}
              value={productColor ?? ''}
            />
          </div>
        </div>

        <div className="inputCategoriesForms">
          <div className="innerDivCategories">
            <h4 className="titleFormsH4">Categoria</h4>
            <select
              onChange={e => setProductCategory(e.target.value)}
              value={productCategory ?? ''}
              name=""
              className="inputSelectForms"
            >
              {categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="innerDivCategories">
            <h4 className="titleFormsH4">Subcategoria</h4>
            <select
              value={productSubcategory ?? ''}
              onChange={e => setProductSubcategory(e.target.value)}
              name=""
              className="inputSelectForms"
            >
              {subcategories.map((subcategory, i) => (
                <option key={i} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="inputPriceForms">
          <h4 className="titleFormsH4">Preço</h4>
          <input
            className={`inputTextForms ${
              formInvalid['price'] ? 'invalid' : ''
            }`}
            type="text"
            onChange={e => setProductPrice(e.target.value)}
            value={productPrice ?? ''}
          />
        </div>
        <div className="alignButtonContainer">
          <button onClick={() => handleSendForm()} className="buttonForms">
            {(props.product ? 'Editar' : 'Cadastrar') + ' produto'}
          </button>
        </div>
      </div>
    </form>
  )
}
