import './style.css'

export function Footer(){
  return <footer>
    <ul className='navMenuFooter'>
      <li>Início</li>
      <li>Produtos</li>
      <li>Anunciar</li>
      <li>Carrinho</li>
    </ul>
    <img className='logoLojinhaFooter' src="./imgs/Logo" alt="Logo da Lojinha" />
    <div className='socicalMediaLogosFooter'>
      <img src="" alt="Logo do Facebook" />
      <img src="" alt="Logo do Twitter" />
      <img src="" alt="logo do Instagram" />
    </div>
    <p className='footerMessage'>Feito pela Infojr UFBA com Figma, React e muito 💚</p>
  </footer>
}