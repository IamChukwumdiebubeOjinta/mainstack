import { Box, Popover, Portal } from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";
import type { ReactNode } from "react";

interface InfoTipProps {
  children?: ReactNode;
}

export function InfoTip({ children = "Some Info" }: InfoTipProps) {
  return (
    <Popover.Root positioning={{ placement: "top" }}>
      <Popover.Trigger asChild>
        <Box
          as="button"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          ml={1}
          color="#56616B"
          cursor="pointer"
          _hover={{ color: "#131316" }}
          transition="color 0.2s"
          verticalAlign="middle"
        >
          <LuInfo size={16} />
        </Box>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content
            bg="#131316"
            color="white"
            px={3}
            py={2}
            borderRadius="8px"
            fontSize="sm"
            fontWeight="medium"
            maxW="250px"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
            border="none"
          >
            <Popover.Arrow bg="#131316" />
            {children}
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}