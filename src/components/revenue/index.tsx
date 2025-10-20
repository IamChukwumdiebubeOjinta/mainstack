import { Stack } from "@chakra-ui/react";
import RevenueCard from "@/components/revenue/visuals/revenue-card";
import RevenueChart from "@/components/revenue/visuals/revenue-chart";

function RevenueSection() {
  return (
    <Stack maxWidth="765px">
      <RevenueCard />
      <RevenueChart />
    </Stack>
  );
}

export default RevenueSection;
