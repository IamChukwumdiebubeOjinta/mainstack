import { Stack } from "@chakra-ui/react";
import RevenueCard from "@/components/revenue/visuals/revenue-card";
import RevenueChart from "@/components/revenue/visuals/revenue-chart";

interface RevenueSectionProps {
  amount: string;
  chartData: Array<{ date: string; value: number }>;
}

function RevenueSection({ amount, chartData }: RevenueSectionProps) {
  return (
    <Stack gap={6}>
      <RevenueCard amount={amount} />
      <RevenueChart data={chartData} />
    </Stack>
  );
}

export default RevenueSection;

