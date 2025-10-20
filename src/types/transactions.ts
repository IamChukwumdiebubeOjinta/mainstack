export type TransactionStatus = "successful" | "pending"
export type TransactionType = "deposit" | "withdrawal"

export interface TransactionItemProps {
  title: string
  description?: string
  status: TransactionStatus
  amount: string
  date: string
  type: TransactionType
}


