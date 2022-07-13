import { mockBooks } from "mocks"
import { useEffect, useState } from "react"
import { BookT } from "types"

export const useTrendingBooks = () => {
  const [data, setData] = useState<Array<BookT>>([])

  const getTrendingBooks = () => {
    setData(mockBooks)
  }

  useEffect(() => {
    getTrendingBooks()
  }, [])

  return { data, getTrendingBooks }
}