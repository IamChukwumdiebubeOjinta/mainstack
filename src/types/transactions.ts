export type TransactionStatus = "success" | "pending"

export interface TransactionItemProps {
  title: string
  description: string
  status: TransactionStatus
  amount: string
  date: string
}


