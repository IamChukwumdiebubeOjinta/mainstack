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

interface FilterDrawerProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function FilterDrawer({
    isOpen,
    onOpenChange,
}: FilterDrawerProps) {
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
                                            bg="bg"
                                            border="1px solid #EFF1F6"
                                            color="app.text"
                                            px="16px"
                                            py="10px"
                                            height="36px"
                                            rounded="pill"
                                            _hover={{ bg: "bg.muted" }}
                                            whiteSpace="nowrap"
                                            fontSize=".875rem"
                                            letterSpacing="-0.025rem"
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
                                    <DateRangeSelector />
                                    </Box>

                                <TransactionType />

                                <TransactionStatus />
                            </VStack>
                        </Drawer.Body>
                        <Drawer.Footer gap={4}>
                            <Button variant="subtle" rounded="pill" flex="1">
                                Clear
                            </Button>
                            <Button
                                rounded="pill"
                                bg="app.textMuted"
                                color="white"
                                flex="1"
                                _hover={{ opacity: 0.9 }}
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
