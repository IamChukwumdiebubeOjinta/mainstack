// Wallet interface
export interface Wallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

// User interface
export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

// Transaction types
export type TransactionStatus = "successful" | "pending" | "failed";
export type TransactionType = "deposit" | "withdrawal";

export interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export interface Transaction {
  amount: number;
  metadata?: TransactionMetadata;
  payment_reference?: string;
  status: TransactionStatus;
  type: TransactionType;
  date: string;
}

// Filter types
export interface TransactionFilters {
  transactionTypes: string[];
  statuses: string[];
  dateRange: { start: Date | undefined; end: Date | undefined };
}

// Display types
export interface TransactionItemProps {
  title: string;
  description?: string;
  status: TransactionStatus;
  amount: string;
  date: string;
  type: TransactionType;
}

// Select option type
export interface SelectOption {
  label: string;
  value: string;
}
