import './style.css'
import ReactModal from 'react-modal'
import CloseModal from '../../assets/closeModal.svg'
import CirclePlusModal from '../../assets/circlePlusModal.svg'
import CircleLessModal from '../../assets/circleLessModal.svg'
import EditModal from '../../assets/editModal.svg'
import DelModal from '../../assets/delModal.svg'

ReactModal.setAppElement('#root')

export function Modal(props) {
  const {
    modalIsOpen,
    closeModal,
    productTitle,
    productDescription,
    productBrand,
    productColor,
    productPrice,
    productImg,
  } = props
  let howManyProducts = 1
  function plusProducts() {
    howManyProducts += 1
  }
  function lessProducts() {
    if (howManyProducts >= 2) {
      howManyProducts -= 1
    }
  }
  return (
    <ReactModal isOpen={modalIsOpen}>
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
            <p className="productTitleModal">{productTitle}</p>
          </div>
        </div>
        <div className="innerContainerModal">
          <div className="imgHowManyModalContainer">
            <img
              className="productImg"
              src={productImg}
              alt="Imagem refrente ao produto selecionado."
            />
            <div className="howManyProductsContainer">
              <img
                className="circlePlusModal"
                src={CirclePlusModal}
                alt="Botão mais unidades do produto."
                onClick={plusProducts()}
              />
              <h3 className="howManyProductstext">{howManyProducts}</h3>
              <img
                className="circleLessModal"
                src={CircleLessModal}
                alt="Botão menos unidades do produto."
                onClick={lessProducts()}
              />
            </div>
          </div>

          <div className="descriptionContainerModal">
            <h2>Descrição</h2>
            <p>{productDescription}</p>
          </div>
          <div className="sellerContainerModal">
            <h2>Vendedor</h2>
            <p>Lorem Ipsum</p>
          </div>
          <div className="brandContainerModal">
            <h2>Marca</h2>
            <p>{productBrand}</p>
          </div>
          <div className="colorContainerModal">
            <h2>Cor</h2>
            <p className="productColor">{productColor}</p>
          </div>
          <div className="productPriceContainerModal">
            <h1 className="productPriceModal">{productPrice}</h1>
          </div>

          <div className="delEditModal">
            <div className="editModalContainer">
              <img
                className="editModal"
                src={EditModal}
                alt="Lápis refrente ao botão editar produto."
              />
              <h5 className="editModalText">Editar</h5>
            </div>
            <div className="delModalContainer">
              <img
                className="delModal"
                src={DelModal}
                alt="Lixeira refrente ao botão deletar produto."
              />
              <h5 className="delModalText">Deletar</h5>
            </div>
          </div>
          <div className="addCartButtonModalContainer">
            <button className="addCartButtonModal">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    </ReactModal>
  )
}
