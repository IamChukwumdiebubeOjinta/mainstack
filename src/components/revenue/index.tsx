import { Stack } from "@chakra-ui/react";
import RevenueCard from "@/components/revenue/visuals/revenue-card";
import RevenueChart from "@/components/revenue/visuals/revenue-chart";

interface RevenueSectionProps {
  chartData: Array<{ date: string; value: number }>;
}

function RevenueSection({ chartData }: RevenueSectionProps) {
  return (
    <Stack maxWidth="765px">
      <RevenueCard />
      <RevenueChart data={chartData} />
    </Stack>
  );
}

export default RevenueSection;
