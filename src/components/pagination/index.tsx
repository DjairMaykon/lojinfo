import { useEffect } from 'react'
import { useState } from 'react'
import PaginationArrowLeft from '../../assets/paginationArrowLeft.svg'
import PaginationArrowRight from '../../assets/paginationArrowRight.svg'

import './style.css'

export function Pagination(props) {
  const { pagesQuantity, onPageChange } = props
  const [currentPage, setCurrentPage] = useState(7)

  useEffect(() => {
    onPageChange(currentPage)
  }, [currentPage])

  const pagesBetween = initial =>
    [...Array(3)].map((n, i) => (
      <h3 className={initial + i == currentPage ? 'active' : ''}>
        {initial + i}
      </h3>
    ))

  return (
    <div className="paginationContainer">
      <img
        src={PaginationArrowLeft}
        alt=""
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      />
      {currentPage <= pagesQuantity / 2 ? (
        <>
          {pagesBetween(
            currentPage + 3 > pagesQuantity / 2
              ? pagesQuantity / 2 - 2
              : currentPage
          )}
          <h3>...</h3>
          <h3>{pagesQuantity}</h3>
        </>
      ) : (
        <>
          <h3>{1}</h3>
          <h3>...</h3>
          {pagesBetween(
            currentPage + 3 > pagesQuantity ? pagesQuantity - 2 : currentPage
          )}
        </>
      )}
      <img
        src={PaginationArrowRight}
        alt=""
        onClick={() =>
          currentPage < pagesQuantity && setCurrentPage(currentPage + 1)
        }
      />
    </div>
  )
}
