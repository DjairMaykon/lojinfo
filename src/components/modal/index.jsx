import './style.css'
import ReactModal from 'react-modal'
import CloseModal from '../../assets/closeModal.svg'
import CirclePlusModal from '../../assets/circlePlusModal.svg'
import CircleLessModal from '../../assets/circleLessModal.svg'
import EditModal from '../../assets/editModal.svg'
import DelModal from '../../assets/delModal.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../utils/api'
import { useEffect } from 'react'

ReactModal.setAppElement('#root')

export function Modal(props) {
  const { modalIsOpen, closeModal, product, onDeleteProduct } = props
  const [howManyProducts, setHowManyProducts] = useState(1)
  useEffect(() => {
    if (product) setHowManyProducts(product.quantity)
  }, [product])
  function plusProducts() {
    setHowManyProducts(howManyProducts + 1)
  }
  function lessProducts() {
    if (howManyProducts > 1) {
      setHowManyProducts(howManyProducts - 1)
    }
  }
  function addCartItem() {
    if (product)
      api
        .post('/itens', {
          id_produtos: product.productId,
          quantidade: howManyProducts,
        })
        .then(() => {
          alert('Produto dicionado no carrinho com sucesso.')
        })
  }
  function editCartItem() {
    if (product)
      api
        .put(`/itens/${product.productId}`, {
          quantidade: howManyProducts,
        })
        .then(() => {
          alert('Produto editado no carrinho com sucesso.')
        })
  }
  return (
    <ReactModal className="reactModal" isOpen={modalIsOpen}>
      <section className="modalContainer">
        <div className="closeAndTitleContainerModal">
          <div className="closeModalContainer">
            <img
              className="closeModalImg"
              src={CloseModal}
              alt="Um (x), botão de fechar o modal."
              onClick={closeModal}
            />
          </div>
          <div className="productTitleModalContainer">
            <p className="productTitleModal">
              {product && product.productTitle}
            </p>
          </div>
        </div>
        <div className="innerContainerModal">
          <div className="imgHowManyModalContainer">
            <div className="imgContainerModal">
              <div
                className="productImg"
                alt="Imagem refrente ao produto selecionado."
                style={{
                  backgroundImage: `url(${product && product.productImg})`,
                }}
              >
                <p className="modalPImg">M</p>
                <p className="modalPImg">G</p>
              </div>
            </div>

            <div className="howManyProductsContainer">
              <img
                className="circleLessModal"
                src={CircleLessModal}
                alt="Botão menos unidades do produto."
                onClick={lessProducts}
              />
              <h3 className="howManyProductstext">{howManyProducts}</h3>
              <img
                className="circlePlusModal"
                src={CirclePlusModal}
                alt="Botão mais unidades do produto."
                onClick={plusProducts}
              />
            </div>
          </div>
          <div className="productSpec">
            <div className="descriptionContainerModal">
              <h2 className="titleModalH2">Descrição</h2>
              <p className="textPModal">
                {product && product.productDescription}
              </p>
            </div>
            <div className="sellerContainerModal">
              <h2 className="titleModalH2">Vendedor</h2>
              <p className="textPModal">Lorem Ipsum</p>
            </div>
            <div className="brandContainerModal">
              <h2 className="titleModalH2">Marca</h2>
              <p className="textPModal">{product && product.productBrand}</p>
            </div>
            <div className="colorContainerModal">
              <h2 className="titleModalH2">Cor</h2>
              <p className="textPModal">{product && product.productColor}</p>
            </div>
            <div className="productPriceContainerModal">
              <h1 className="productPriceModal">
                {product && product.productPrice}
              </h1>
            </div>
          </div>
        </div>
        <div className="buttonsModal">
          <div className="delEditModal">
            <Link to={`/product/${product && product.productId}`}>
              <div className="editModalContainer">
                <img
                  className="editModal"
                  src={EditModal}
                  alt="Lápis refrente ao botão editar produto."
                />
                <h5 className="editModalText">Editar</h5>
              </div>
            </Link>

            <div
              className="delModalContainer"
              onClick={() => product && onDeleteProduct(product.productId)}
            >
              <img
                className="delModal"
                src={DelModal}
                alt="Lixeira refrente ao botão deletar produto."
              />
              <h5 className="delModalText">Deletar</h5>
            </div>
          </div>
          <div className="addCartButtonModalContainer">
            <button
              className="addCartButtonModal"
              onClick={() => {
                if (product && product.isInCart) editCartItem()
                else addCartItem()
              }}
            >
              {product && product.isInCart
                ? 'Editar item do carrinho'
                : 'Adicionar ao carrinho'}
            </button>
          </div>
        </div>
      </section>
    </ReactModal>
  )
}
