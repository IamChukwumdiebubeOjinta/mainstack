import { Box, HStack, Popover, Portal, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { LuChevronDown } from "react-icons/lu";
import "react-day-picker/style.css";
import "./date-range.css";

export default function DateRangeSelector() {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(2023, 6, 17)); // July 17, 2023
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(2023, 7, 17)); // August 17, 2023
  const [startMonth, setStartMonth] = useState<Date>(new Date(2023, 6, 17));
  const [endMonth, setEndMonth] = useState<Date>(new Date(2023, 7, 17));

  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date);
    setStartDateOpen(false);
  };

  const handleEndDateSelect = (date: Date | undefined) => {
    setEndDate(date);
    setEndDateOpen(false);
  };

  const handleStartDateOpenChange = (details: { open: boolean }) => {
    setStartDateOpen(details.open);
    // Return focus to input when closing to avoid aria-hidden focus issue
    if (!details.open) {
      setTimeout(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      }, 0);
    }
  };

  const handleEndDateOpenChange = (details: { open: boolean }) => {
    setEndDateOpen(details.open);
    // Return focus to input when closing to avoid aria-hidden focus issue
    if (!details.open) {
      setTimeout(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      }, 0);
    }
  };

  return (
    <HStack gap={4}>
      {/* Start Date Popover */}
      <Box position="relative" flex="1">
        <Popover.Root
          open={startDateOpen}
          onOpenChange={(e) => setStartDateOpen(e.open)}
          positioning={{ placement: "bottom-start" }}
          closeOnInteractOutside={true}
          modal={false}
        >
          <Popover.Trigger asChild>
            <InputGroup
              width="100%"
              endElement={
                <Box
                  pointerEvents="none"
                  transform={startDateOpen ? "rotate(180deg)" : "rotate(0deg)"}
                  transition="transform 0.2s ease-in-out"
                >
                  <LuChevronDown />
                </Box>
              }
            >
              <Input
                value={startDate ? format(startDate, "dd MMM yyyy") : ""}
                onClick={() => setStartDateOpen(true)}
                readOnly
                cursor="pointer"
                width="100%"
                borderRadius="12px"
                border="1px solid"
                borderColor={startDateOpen ? "gray.300" : "transparent"}
                bg={startDateOpen ? "white" : "app.surfaceMuted"}
                fontWeight="medium"
                px=".75rem"
                py={5}
                fontSize="smaller"
                letterSpacing="-0.2px"
                height="56px"
                transition="all 0.2s ease-in-out"
              />
            </InputGroup>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                borderRadius="1rem"
                boxShadow="xl"
                bg="white"
                p={0}
                w="auto"
                overflow="hidden"
              >
                <DayPicker
                  mode="single"
                  selected={startDate}
                  onSelect={handleStartDateSelect}
                  month={startMonth}
                  onMonthChange={setStartMonth}
                  numberOfMonths={1}
                  showOutsideDays={false}
                  className="custom-day-picker"
                />
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Box>

      {/* End Date Popover */}
      <Box position="relative" flex="1">
        <Popover.Root
          open={endDateOpen}
          onOpenChange={(e) => setEndDateOpen(e.open)}
          positioning={{ placement: "bottom-start" }}
          closeOnInteractOutside={true}
          modal={false}
        >
          <Popover.Trigger asChild>
            <InputGroup
              width="100%"
              endElement={
                <Box
                  pointerEvents="none"
                  transform={endDateOpen ? "rotate(180deg)" : "rotate(0deg)"}
                  transition="transform 0.2s ease-in-out"
                >
                  <LuChevronDown />
                </Box>
              }
            >
              <Input
                value={endDate ? format(endDate, "dd MMM yyyy") : ""}
                onClick={() => setEndDateOpen(true)}
                readOnly
                cursor="pointer"
                width="100%"
                borderRadius="12px"
                border="1px solid"
                borderColor={endDateOpen ? "gray.300" : "transparent"}
                bg={endDateOpen ? "white" : "app.surfaceMuted"}
                fontWeight="medium"
                px=".75rem"
                py={5}
                fontSize="smaller"
                letterSpacing="-0.2px"
                height="56px"
                transition="all 0.2s ease-in-out"
              />
            </InputGroup>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                borderRadius="1rem"
                boxShadow="xl"
                bg="white"
                p={0}
                w="auto"
                overflow="hidden"
              >
                <DayPicker
                  mode="single"
                  selected={endDate}
                  onSelect={handleEndDateSelect}
                  month={endMonth}
                  onMonthChange={setEndMonth}
                  numberOfMonths={1}
                  showOutsideDays={false}
                  className="custom-day-picker"
                />
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Box>
    </HStack>
  );
}
