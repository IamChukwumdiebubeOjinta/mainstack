import {
    Box,
    Button,
    Menu,
    Portal,
    Checkbox,
    CheckboxGroup,
    VStack,
    Text,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
  import { FaChevronDown } from "react-icons/fa";
  import { useState, useMemo } from "react";
  
  const TRANSACTION_TYPES = [
    { label: "Store Transactions", value: "store-transactions" },
    { label: "Get Tipped", value: "get-tipped" },
    { label: "Withdrawals", value: "withdrawals" },
    { label: "Chargebacks", value: "chargebacks" },
    { label: "Cashbacks", value: "cashbacks" },
    { label: "Refer & Earn", value: "refer-earn" },
  ];
  
  export default function TransactionTypeMultiSelect() {
    const [selected, setSelected] = useState(TRANSACTION_TYPES.map((t) => t.value));
  
    const selectedLabels = useMemo(
      () =>
        selected.length === 0
          ? "Select Transaction Types"
          : TRANSACTION_TYPES.filter((t) => selected.includes(t.value))
              .map((t) => t.label)
              .join(", "),
      [selected]
    );
  
    return (
      <Box>
        <Text
          fontWeight={700}
          mb={2}
          color="blackAlpha.700"
          fontSize="lg"
          opacity={0.8}
        >
          Transaction Type
        </Text>
        <Menu.Root closeOnSelect={false}>
          <Menu.Trigger asChild>
            <Button
              width="100%"
              borderRadius="lg"
              border="2px solid"
              borderColor="blackAlpha.700"
              bg="white"
              boxShadow="md"
              fontWeight={500}
              justifyContent="flex-start"
              textAlign="left"
              px={6}
              py={6}
              fontSize="lg"
              _active={{ bg: "gray.50" }}
              _focus={{ boxShadow: "outline" }}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <Flex width="100%" align="center">
                <Box as="span" isTruncated>
                  {selectedLabels}
                </Box>
                <Spacer />
                <FaChevronDown />
              </Flex>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content p={6} borderRadius="2xl" minW="400px" boxShadow="xl">
                <CheckboxGroup
                  value={selected}
                  onValueChange={setSelected}
                >
                  <VStack align="stretch" spacing={8}>
                    {TRANSACTION_TYPES.map((type) => (
                      <Checkbox.Root
                        key={type.value}
                        value={type.value}
                        size="lg"
                        colorPalette="gray"
                        variant="solid"
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontWeight={700} fontSize="xl">
                          {type.label}
                        </Checkbox.Label>
                      </Checkbox.Root>
                    ))}
                  </VStack>
                </CheckboxGroup>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    );
  }