import {
    Box,
    Text,
    Input,
    InputGroup,
    Popover,
    VStack,
    Portal,
} from "@chakra-ui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { useState, useMemo, useRef } from "react";
import { TRANSACTION_TYPES, DEFAULT_TRANSACTION_TYPE_VALUES } from "@/constants";

interface TransactionTypeMultiSelectProps {
    selected?: string[];
    onSelectionChange?: (selected: string[]) => void;
}

export default function TransactionTypeMultiSelect({
    selected: externalSelected,
    onSelectionChange,
}: TransactionTypeMultiSelectProps = {}) {
    const [internalSelected, setInternalSelected] = useState<string[]>(
        DEFAULT_TRANSACTION_TYPE_VALUES
    );

    const selected = externalSelected ?? internalSelected;
    const setSelected = onSelectionChange ?? setInternalSelected;
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedLabels = useMemo(
        () =>
            TRANSACTION_TYPES.filter((t) => selected.includes(t.value))
                .map((t) => t.label)
                .join(", "),
        [selected]
    );

    const filteredItems = useMemo(() => {
        if (!searchQuery) return TRANSACTION_TYPES;
        return TRANSACTION_TYPES.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const toggleSelection = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    return (
        <Box>
            <Text
                fontWeight="semibold"
                mb=".75rem"
                color="black"
                fontSize="1rem"
                lineHeight="24px"
                letterSpacing="-0.4px"
            >
                Transaction Type
            </Text>
            <Popover.Root
                open={isOpen}
                onOpenChange={(e) => setIsOpen(e.open)}
                positioning={{ sameWidth: true }}
                closeOnInteractOutside={true}
                modal={false}
            >
                <Popover.Trigger asChild>
                    <Box position="relative">
                        <InputGroup
                            width="100%"
                            endElement={
                                <Box
                                    pointerEvents="none"
                                    transform={
                                        isOpen
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)"
                                    }
                                    transition="transform 0.2s ease-in-out"
                                >
                                    <FaChevronDown />
                                </Box>
                            }
                        >
                            <Input
                                ref={inputRef}
                                placeholder={
                                    selectedLabels ||
                                    "Filter By Transaction Types"
                                }
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsOpen(true)}
                                width="100%"
                                borderRadius="12px"
                                border="3px solid"
                                borderColor={isOpen ? "black" : "transparent"}
                                bg={isOpen ? "white" : "app.surfaceMuted"}
                                fontWeight="medium"
                                px=".75rem"
                                py={5}
                                fontSize="smaller"
                                letterSpacing="-0.2px"
                                height="56px"
                                cursor="pointer"
                                textOverflow="ellipsis"
                                overflow="hidden"
                                whiteSpace="nowrap"
                                transition="all 0.2s ease-in-out"
                                _placeholder={{
                                    color: "blackAlpha.900",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                }}
                            />
                        </InputGroup>
                    </Box>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content
                            borderRadius=".75rem"
                            boxShadow="xl"
                            bg="white"
                            p={4}
                            w="100%"
                            overflowY="auto"
                        >
                            {filteredItems.length > 0 ? (
                                <VStack align="stretch" gap={0}>
                                    {filteredItems.map((type) => (
                                        <Box
                                            key={type.value}
                                            px="14px"
                                            py="14px"
                                            cursor="pointer"
                                            borderRadius="md"
                                            _hover={{ bg: "gray.50" }}
                                            onClick={() =>
                                                toggleSelection(type.value)
                                            }
                                            display="flex"
                                            alignItems="center"
                                            gap={3}
                                        >
                                            <Box
                                                width="20px"
                                                height="20px"
                                                minWidth="20px"
                                                borderRadius="sm"
                                                border="2px solid"
                                                borderColor={
                                                    selected.includes(
                                                        type.value
                                                    )
                                                        ? "#1C1B1F"
                                                        : "#DBDEE5"
                                                }
                                                bg={
                                                    selected.includes(
                                                        type.value
                                                    )
                                                        ? "black"
                                                        : "white"
                                                }
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                {selected.includes(
                                                    type.value
                                                ) && (
                                                    <FaCheck
                                                        size={14}
                                                        color="white"
                                                    />
                                                )}
                                            </Box>
                                            <Text
                                                fontWeight={600}
                                                fontSize="sm"
                                                color="black"
                                                lineHeight="24px"
                                                letterSpacing="-0.025rem"
                                            >
                                                {type.label}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            ) : (
                                <Box py={6} px={4} textAlign="center">
                                    <Text color="gray.500" fontSize="md">
                                        No transaction types found
                                    </Text>
                                </Box>
                            )}
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>
        </Box>
    );
}
