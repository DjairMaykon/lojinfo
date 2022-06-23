import { EmptySection } from '../../components/emptySection'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export function NotFound() {
  return (
    <>
      <Header />
      <main id="mainNotFound">
        <EmptySection text="Parece que você está perdido" />
      </main>
      <Footer />
    </>
  )
}
