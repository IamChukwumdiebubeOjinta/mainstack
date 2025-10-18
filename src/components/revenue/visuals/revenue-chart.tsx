import { Box, Text, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceDot,
} from "recharts";

interface RevenueChartProps {
  data: Array<{ date: string; value: number }>;
}

function RevenueChart({ data }: RevenueChartProps) {
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

  return (
    <Box>
      <Box h={{ base: 200, md: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 20, right: 20 }}>
            <XAxis
              dataKey="date"
              tick={false}
              tickLine={false}
              axisLine={{ stroke: "#DBDEE5", strokeWidth: 1 }}
            />
            <YAxis hide domain={[0, "auto"]} />
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
              strokeWidth={1}
              dot={false}
              activeDot={false}
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
