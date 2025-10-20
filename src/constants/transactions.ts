// Transaction type constants
export const TRANSACTION_TYPES = [
  { label: "Store Transactions", value: "store-transactions" },
  { label: "Get Tipped", value: "get-tipped" },
  { label: "Withdrawals", value: "withdrawals" },
  { label: "Chargebacks", value: "chargebacks" },
  { label: "Cashbacks", value: "cashbacks" },
  { label: "Refer & Earn", value: "refer-earn" },
] as const;

// Transaction status constants
export const TRANSACTION_STATUSES = [
  { label: "Successful", value: "successful" },
  { label: "Pending", value: "pending" },
  { label: "Failed", value: "failed" },
] as const;

// Default filter values
export const DEFAULT_TRANSACTION_TYPE_VALUES = TRANSACTION_TYPES.map((t) => t.value);
export const DEFAULT_TRANSACTION_STATUS_VALUES = TRANSACTION_STATUSES.map((s) => s.value);

// Quick date filter labels
export const QUICK_DATE_FILTERS = [
  "Today",
  "Last 7 days",
  "This month",
  "Last 3 months",
] as const;

// CSV export settings
export const CSV_HEADERS = ["Date", "Type", "Title", "Description", "Amount", "Status"];
export const CSV_FILE_PREFIX = "transactions";

// Date format patterns
export const DATE_FORMAT = "MMM d, yyyy"; // e.g., "Apr 3, 2020"
export const DATE_FORMAT_INPUT = "dd MMM yyyy"; // e.g., "17 Jul 2023"