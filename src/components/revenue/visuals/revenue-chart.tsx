import { Box, Text, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceDot,
  Tooltip,
} from "recharts";
import { useTransactions } from "@/hooks/useTransactions";
import { useMemo } from "react";

function RevenueChart() {
  const { data: transactions, isLoading } = useTransactions();

  // Transform transactions into chart data
  const data = useMemo(() => {
    if (!transactions) return [];

    // Group transactions by date and sum amounts
    const dataMap = new Map<string, number>();

    transactions.forEach((tx) => {
      const date = tx.date.split(' ')[0]; // Get just the date part (YYYY-MM-DD)
      const currentValue = dataMap.get(date) || 0;
      dataMap.set(date, currentValue + tx.amount);
    });

    // Convert to array and sort by date
    return Array.from(dataMap.entries())
      .map(([date, value]) => ({ date, value }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [transactions]);

  // Format date for display (e.g., "2022-04-01" -> "Apr 1, 2022")
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const startLabel = data[0] ? formatDate(data[0].date) : "";
  const endLabel = data[data.length - 1]
    ? formatDate(data[data.length - 1].date)
    : "";

  if (isLoading) {
    return (
      <Box width="100%" minHeight="200px" display="flex" alignItems="center" justifyContent="center">
        <Text color="app.textMuted">Loading chart data...</Text>
      </Box>
    );
  }

  return (
    <Box width="100%" minHeight="200px">
      <Box h={{ base: 200, md: 260 }} width="100%" minWidth="300px">
        <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200} aspect={undefined}>
          <LineChart data={data} margin={{ left: 20, right: 20 }}>
            <XAxis
              dataKey="date"
              tick={false}
              tickLine={false}
              axisLine={{ stroke: "#DBDEE5", strokeWidth: 1 }}
            />
            <YAxis hide domain={[0, "auto"]} />
            <Tooltip
              formatter={(value: number) => [`$${value}`, "Revenue"]}
              labelFormatter={(label) => formatDate(label)}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E5E5",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
            />
            {data.length > 0 ? (
              <>
                <ReferenceDot
                  x={data[0].date}
                  y={0}
                  r={4}
                  fill="#D6DCE5"
                  stroke="#D6DCE5"
                />
                <ReferenceDot
                  x={data[data.length - 1].date}
                  y={0}
                  r={4}
                  fill="#D6DCE5"
                  stroke="#D6DCE5"
                />
              </>
            ) : null}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF7A00"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 6, fill: "#FF7A00", stroke: "#FF7A00", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      {/* Date labels positioned at the ends of the axis */}
      <Flex justify="space-between" px={4} marginTop="-1rem">
        <Text
          fontSize="16px"
          color="#56616B"
          fontWeight="medium"
          lineHeight="24px"
          letterSpacing="-0.2px"
        >
          {startLabel}
        </Text>
        <Text
          fontSize="16px"
          color="#56616B"
          fontWeight="medium"
          lineHeight="24px"
          letterSpacing="-0.2px"
        >
          {endLabel}
        </Text>
      </Flex>
    </Box>
  );
}

export default RevenueChart;
