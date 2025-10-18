import type { TransactionItemProps } from "@/types/transactions"

export const revenueSeries = [
  { date: "2022-04-01", value: 20 },
  { date: "2022-04-05", value: 60 },
  { date: "2022-04-10", value: 30 },
  { date: "2022-04-15", value: 70 },
  { date: "2022-04-20", value: 40 },
  { date: "2022-04-25", value: 80 },
  { date: "2022-04-30", value: 20 },
]

export const availableBalance = "USD 120,500.00"

export const rightStats = [
  { label: "Ledger Balance", value: "USD 0.00" },
  { label: "Total Payout", value: "USD 55,080.00" },
  { label: "Total Revenue", value: "USD 175,580.00" },
  { label: "Pending Payout", value: "USD 0.00" },
]

export const transactions: TransactionItemProps[] = [
  {
    title: "Psychology of Money",
    description: "Roy Cash",
    status: "success",
    amount: "USD 600",
    date: "Apr 03, 2022",
  },
  {
    title: "Buy me a coffee",
    description: "Jonathan Smart",
    status: "success",
    amount: "USD 100",
    date: "Apr 02, 2022",
  },
  {
    title: "How to build an online brand",
    description: "Cehan Ludcris",
    status: "success",
    amount: "USD 100",
    date: "Apr 02, 2022",
  },
  {
    title: "Cash withdrawal",
    description: "",
    status: "success",
    amount: "USD 3000.33",
    date: "Apr 01, 2022",
  },
  {
    title: "Support my outreach",
    description: "Shawn Kane",
    status: "success",
    amount: "USD 400",
    date: "Apr 02, 2022",
  },
  {
    title: "Cash withdrawal",
    description: "",
    status: "pending",
    amount: "USD 1004.44",
    date: "Apr 01, 2022",
  },
  {
    title: "Learn how to pitch your idea",
    description: "Dujon Jericho",
    status: "success",
    amount: "USD 500",
    date: "Apr 02, 2022",
  },
]


