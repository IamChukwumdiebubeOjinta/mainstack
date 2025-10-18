import {
  Box,
  Container,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import TopNav from "./components/TopNav";
import RevenueCard from "./components/RevenueCard";
import RevenueChart from "./components/RevenueChart";
import StatItem from "./components/StatItem";
import TransactionsList from "./components/TransactionsList";
import {
  availableBalance,
  revenueSeries,
  rightStats,
  transactions,
} from "./data/mock";

function App() {
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
              <RevenueChart data={revenueSeries} />
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
