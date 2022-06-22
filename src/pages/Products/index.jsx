import { useState } from 'react'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { SectionProducts } from '../../components/sectionProducts'

export function Products() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Header onSearch={text => setSearch(text)} />
      <main>
        <SectionProducts search={search} />
      </main>
      <Footer />
    </>
  )
}
