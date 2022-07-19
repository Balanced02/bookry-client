export type AlertTypeT = 'SUCCESS' | 'INFO' | 'ERROR'

export interface AlertT { type: AlertTypeT, title: String, description: string }

export interface  AlertCreatedT extends AlertT { key: string }

export interface AlertContextI {
  alerts: Array<AlertCreatedT>
  showInfo: (options: { title: string, description: string }) => void
  showError: (options: { title: string, description: string }) => void
  showSuccess: (options: { title: string, description: string }) => void
  dismiss: (key: string) => void
}