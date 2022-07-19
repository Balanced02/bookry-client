import { mockBooks } from "mocks"
import { useEffect, useRef, useState } from "react"
import { BookT } from "types"

export const useBooks = (bookId: string) => {
  const [book, setBook] = useState<BookT>()
  const [loading, setLoading] = useState(false)
  let timeout = useRef<ReturnType<typeof setTimeout>>()

  const fetchBook = () => {
    setLoading(true)
    // TODO: Replace with api call
    timeout.current = setTimeout(() => {
      setLoading(false)
      setBook(mockBooks[0])
    }, 2000)
  }

  useEffect(() => {
    fetchBook()
    return clearTimeout(timeout.current)
  })

  return { book, fetchBook, loading }
}