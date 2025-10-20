import {
    Box,
    Button,
    Drawer,
    HStack,
    Portal,
    VStack,
    Text,
} from "@chakra-ui/react";
import TransactionType from "./transaction-type";
import TransactionStatus from "./transaction-status";
import DateRangeSelector from "./date-range";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export interface TransactionFilters {
    transactionTypes: string[];
    statuses: string[];
    dateRange: { start: Date | undefined; end: Date | undefined };
}

interface FilterDrawerProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onApplyFilters: (filters: TransactionFilters) => void;
}

export default function FilterDrawer({
    isOpen,
    onOpenChange,
    onApplyFilters,
}: FilterDrawerProps) {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([
        "store-transactions",
        "get-tipped",
        "withdrawals",
        "chargebacks",
        "cashbacks",
        "refer-earn",
    ]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
        "successful",
        "pending",
        "failed",
    ]);
    const [dateRange, setDateRange] = useState<{
        start: Date | undefined;
        end: Date | undefined;
    }>({ start: undefined, end: undefined });
    const [selectedQuickFilter, setSelectedQuickFilter] = useState<string | null>(null);

    // Quick filter handler
    const handleQuickFilter = (label: string) => {
        setSelectedQuickFilter(label);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let start: Date | undefined;
        const end: Date | undefined = new Date();
        end.setHours(23, 59, 59, 999);

        switch (label) {
            case "Today":
                start = new Date(today);
                break;
            case "Last 7 days":
                start = new Date(today);
                start.setDate(start.getDate() - 7);
                break;
            case "This month":
                start = new Date(today.getFullYear(), today.getMonth(), 1);
                break;
            case "Last 3 months":
                start = new Date(today);
                start.setMonth(start.getMonth() - 3);
                break;
        }

        setDateRange({ start, end });
    };

    // Clear all filters
    const handleClear = () => {
        setSelectedTypes([
            "store-transactions",
            "get-tipped",
            "withdrawals",
            "chargebacks",
            "cashbacks",
            "refer-earn",
        ]);
        setSelectedStatuses(["successful", "pending", "failed"]);
        setDateRange({ start: undefined, end: undefined });
        setSelectedQuickFilter(null);
    };

    // Apply filters
    const handleApply = () => {
        onApplyFilters({
            transactionTypes: selectedTypes,
            statuses: selectedStatuses,
            dateRange,
        });
        onOpenChange(false);
    };

    return (
        <Drawer.Root
            placement="end"
            open={isOpen}
            onOpenChange={(e) => onOpenChange(e.open)}
        >
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content
                        bg="bg"
                        rounded={{ base: "none", md: "xl" }}
                        shadow="xl"
                        w={{ base: "100%", sm: "420px", lg: "456px" }}
                        maxW="100%"
                    >
                        <Drawer.Header>
                            <Drawer.Title
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Text
                                    fontSize="24px"
                                    lineHeight="120%"
                                    fontWeight="bold"
                                    color="app.text"
                                >
                                    Filter
                                </Text>
                                <MdOutlineClose
                                    size={24}
                                    cursor="pointer"
                                    onClick={(e) => onOpenChange(!e)}
                                />
                            </Drawer.Title>
                            <Drawer.CloseTrigger />
                        </Drawer.Header>
                        <Drawer.Body>
                            <VStack align="stretch" gap={6}>
                                <HStack
                                    gap={3}
                                    overflowX="auto"
                                    scrollSnapType="x mandatory"
                                    scrollbarWidth="none"
                                    WebkitOverflowScrolling="touch"
                                >
                                    {[
                                        "Today",
                                        "Last 7 days",
                                        "This month",
                                        "Last 3 months",
                                    ].map((label) => (
                                        <Button
                                            key={label}
                                            variant="ghost"
                                            bg={selectedQuickFilter === label ? "black" : "bg"}
                                            border="1px solid #EFF1F6"
                                            color={selectedQuickFilter === label ? "white" : "app.text"}
                                            px="16px"
                                            py="10px"
                                            height="36px"
                                            rounded="pill"
                                            _hover={{ bg: selectedQuickFilter === label ? "black" : "bg.muted" }}
                                            whiteSpace="nowrap"
                                            fontSize=".875rem"
                                            letterSpacing="-0.025rem"
                                            onClick={() => handleQuickFilter(label)}
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </HStack>

                                <Box>
                                    <Text
                                        fontWeight="semibold"
                                        color="black"
                                        mb=".75rem"
                                        fontSize="1rem"
                                        lineHeight="24px"
                                        letterSpacing="-0.4px"
                                    >
                                        Date Range
                                    </Text>
                                    <DateRangeSelector
                                        startDate={dateRange.start}
                                        endDate={dateRange.end}
                                        onDateChange={(start, end) => {
                                            setDateRange({ start, end });
                                            setSelectedQuickFilter(null);
                                        }}
                                    />
                                    </Box>

                                <TransactionType
                                    selected={selectedTypes}
                                    onSelectionChange={setSelectedTypes}
                                />

                                <TransactionStatus
                                    selected={selectedStatuses}
                                    onSelectionChange={setSelectedStatuses}
                                />
                            </VStack>
                        </Drawer.Body>
                        <Drawer.Footer gap={4}>
                            <Button
                                variant="subtle"
                                rounded="pill"
                                flex="1"
                                onClick={handleClear}
                            >
                                Clear
                            </Button>
                            <Button
                                rounded="pill"
                                bg="app.textMuted"
                                color="white"
                                flex="1"
                                _hover={{ opacity: 0.9 }}
                                onClick={handleApply}
                            >
                                Apply
                            </Button>
                        </Drawer.Footer>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
