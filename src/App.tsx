import {
  Box,
  Container,
  Grid,
  GridItem,
  Stack,
  useToken,
} from "@chakra-ui/react";
import TopNav from "./components/TopNav";
import RevenueCard from "./components/RevenueCard";
import StatItem from "./components/StatItem";
import TransactionsList from "./components/TransactionsList";
import {
  availableBalance,
  revenueSeries,
  rightStats,
  transactions,
} from "./data/mock";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {
  const [lineColor] = useToken("colors", ["chart.line"]); // semantic token resolve
  return (
    <Box>
      <TopNav />
      <Container maxW="7xl" py={{ base: 6, md: 10 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={{ base: 6, md: 8 }}
        >
          <GridItem>
            <Stack gap={6}>
              <RevenueCard amount={availableBalance} />
              <Box
                bg="bg"
                borderWidth="1px"
                rounded="xl"
                p={{ base: 2, md: 4 }}
                shadow="xs"
              >
                <Box h={{ base: 200, md: 260 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={revenueSeries}
                      margin={{ left: 8, right: 8, top: 8, bottom: 8 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="date"
                        hide
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip
                        formatter={(v: number) => [`$${v}`, "Revenue"]}
                        labelFormatter={() => ""}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={lineColor}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Stack>
          </GridItem>
          <GridItem>
            <Box
              bg="bg"
              borderWidth="1px"
              rounded="xl"
              p={{ base: 4, md: 6 }}
              shadow="xs"
            >
              <Stack>
                {rightStats.map((s) => (
                  <StatItem key={s.label} label={s.label} value={s.value} />
                ))}
              </Stack>
            </Box>
          </GridItem>
        </Grid>

        <Box mt={{ base: 6, md: 10 }}>
          <TransactionsList items={transactions} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
