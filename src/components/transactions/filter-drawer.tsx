import {
  Box,
  Button,
  Checkbox,
  Drawer,
  HStack,
  Portal,
  VStack,
  Text,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { TfiClose } from "react-icons/tfi";
import TransactionType from "./transaction-type";

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
            w={{ base: "100%", sm: "420px" }}
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
                  lineHeight="28px"
                  fontWeight="bold"
                  color="app.text"
                >
                  Filter
                </Text>
                <TfiClose size={24} cursor="pointer" onClick={(e) => onOpenChange(!e)} />
              </Drawer.Title>
              <Drawer.CloseTrigger />
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="stretch" gap={6}>
                <HStack gap={3} wrap="wrap">
                  {["Today", "Last 7 days", "This month", "Last 3 months"].map(
                    (label) => (
                      <Button
                        key={label}
                        variant="ghost"
                        bg="app.surfaceMuted"
                        color="app.text"
                        px="16px"
                        py="10px"
                        height={{ base: "40px", md: "44px" }}
                        rounded="pill"
                        _hover={{ bg: "bg.muted" }}
                      >
                        {label}
                      </Button>
                    )
                  )}
                </HStack>

                <Box>
                  <Text fontWeight="semibold" color="app.text" mb={2}>
                    Date Range
                  </Text>
                  <HStack gap={4}>
                    <Button
                      variant="outline"
                      justifyContent="space-between"
                      rightIcon={<LuChevronDown />}
                      bg="app.surfaceMuted"
                      color="app.text"
                      rounded="action"
                      height="48px"
                      flex="1"
                    >
                      17 Jul 2023
                    </Button>
                    <Button
                      variant="outline"
                      justifyContent="space-between"
                    //   rightIcon={<LuChevronDown />}
                      bg="app.surfaceMuted"
                      color="app.text"
                      rounded="action"
                      height="48px"
                      flex="1"
                    >
                      17 Aug 2023
                    </Button>
                  </HStack>
                </Box>

                <TransactionType />

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
