import { AlertContext } from "context/AlertContext"
import { useContext } from "react"

export const useAlert = () => {
  const { showError, showInfo, showSuccess, dismiss } = useContext(AlertContext)
  return { showError, showInfo, showSuccess, dismiss }
}