import { useState, useMemo } from "react";
import { format } from "date-fns";
import type { Transaction } from "@/types";

export interface TransactionFilters {
  transactionTypes: string[];
  statuses: string[];
  dateRange: { start: Date | undefined; end: Date | undefined };
}

const DEFAULT_FILTERS: TransactionFilters = {
  transactionTypes: [
    "store-transactions",
    "get-tipped",
    "withdrawals",
    "chargebacks",
    "cashbacks",
    "refer-earn",
  ],
  statuses: ["successful", "pending", "failed"],
  dateRange: { start: undefined, end: undefined },
};

export function useTransactionFilters(transactions: Transaction[] | undefined) {
  const [filters, setFilters] = useState<TransactionFilters>(DEFAULT_FILTERS);

  // Filter transactions based on applied filters
  const filteredTransactions = useMemo(() => {
    if (!transactions) return [];

    return transactions.filter((tx) => {
      // Filter by status
      if (!filters.statuses.includes(tx.status)) {
        return false;
      }

      // Filter by transaction type
      // Map withdrawal type to "withdrawals" filter
      if (tx.type === "withdrawal") {
        if (!filters.transactionTypes.includes("withdrawals")) {
          return false;
        }
      } else {
        // All non-withdrawal transactions are deposits, map to other types
        const hasNonWithdrawalTypeSelected = filters.transactionTypes.some(
          (type) => type !== "withdrawals"
        );
        if (!hasNonWithdrawalTypeSelected) {
          return false;
        }
      }

      // Filter by date range
      if (filters.dateRange.start || filters.dateRange.end) {
        const txDate = new Date(tx.date);
        if (filters.dateRange.start && txDate < filters.dateRange.start) {
          return false;
        }
        if (filters.dateRange.end && txDate > filters.dateRange.end) {
          return false;
        }
      }

      return true;
    });
  }, [transactions, filters]);

  // Export filtered transactions to CSV
  const exportToCSV = () => {
    if (!filteredTransactions || filteredTransactions.length === 0) {
      alert("No transactions to export");
      return;
    }

    // CSV headers
    const headers = ["Date", "Type", "Title", "Description", "Amount", "Status"];

    // CSV rows
    const rows = filteredTransactions.map((tx) => {
      const isWithdrawal = tx.type === "withdrawal";
      const title = isWithdrawal ? "Cash withdrawal" : tx.metadata?.product_name || "Transaction";
      const description = isWithdrawal ? "" : tx.metadata?.name || "";

      return [
        tx.date,
        tx.type,
        `"${title}"`, // Wrap in quotes to handle commas
        `"${description}"`,
        tx.amount,
        tx.status,
      ];
    });

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `transactions_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Format transaction for display
  const formatTransaction = (tx: Transaction) => {
    const isWithdrawal = tx.type === "withdrawal";
    return {
      title: isWithdrawal ? "Cash withdrawal" : tx.metadata?.product_name || "Transaction",
      description: isWithdrawal ? undefined : tx.metadata?.name,
      amount: `USD ${tx.amount.toLocaleString()}`,
      date: format(new Date(tx.date), "MMM d, yyyy"),
      status: tx.status as "successful" | "pending",
      type: tx.type as "deposit" | "withdrawal",
    };
  };

  return {
    filters,
    setFilters,
    filteredTransactions,
    exportToCSV,
    formatTransaction,
    transactionCount: filteredTransactions?.length ?? 0,
  };
}