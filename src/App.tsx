import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "@/components/sidebar";
import TopNav from "@/components/navbar";
import RevenueSection from "@/components/revenue";
import StatsPanel from "@/components/revenue/stats/stats-panel";
import TransactionsList from "@/components/transactions/transactions-list";
import {
  availableBalance,
  revenueSeries,
  rightStats,
  transactions,
} from "@/data/mock";

function App() {
  return (
    <Box>
      <Sidebar />
      <Box ml="80px">
        <TopNav />
        <Container maxW="7xl" py={{ base: 6, md: 10 }} spaceY="82px">
          <Grid
            templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
            gap={{ base: 6, lg: "124px" }}
          >
            <GridItem>
              <RevenueSection
                amount={availableBalance}
                chartData={revenueSeries}
              />
            </GridItem>
            <GridItem>
              <StatsPanel stats={rightStats} />
            </GridItem>
          </Grid>

          <TransactionsList items={transactions} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
