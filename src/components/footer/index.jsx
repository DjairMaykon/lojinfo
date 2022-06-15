import './style.css'
import { Link } from 'react-router-dom'
import twitterLogo from '../../assets/twitterLogo.svg'
import facebookLogo from '../../assets/facebookLogo.svg'
import instagramLogo from '../../assets/instagramLogo.svg'
import Logo from '../../assets/Logo.svg'

export function Footer() {
  return (
    <footer>
      <section className="logoMenuSocialContainer">
        <ul className="navMenuFooter">
          <li>
            <Link to="/" className="colorNavMenuFooter">
              Início
            </Link>
          </li>
          <li>
            <Link to="/product" className="colorNavMenuFooter">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/product" className="colorNavMenuFooter">
              Anunciar
            </Link>
          </li>
          <li>
            <Link to="/cart" className="colorNavMenuFooter">
              Carrinho
            </Link>
          </li>
        </ul>
        <img className="logoLojinhaFooter" src={Logo} alt="Logo da Lojinha" />
        <div className="socicalMediaLogosFooter">
          <img src={facebookLogo} alt="Logo do Facebook" />
          <img src={twitterLogo} alt="Logo do Twitter" />
          <img src={instagramLogo} alt="logo do Instagram" />
        </div>
      </section>
      <p className="footerMessage">
        Feito pela Infojr UFBA com Figma, React e muito 💚
      </p>
    </footer>
  )
}
