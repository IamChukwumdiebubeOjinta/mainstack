import { useWallet } from "@/hooks/useWallet";
import formatObjectForUI from "@/utils/formatObjectForUI";
import { Box, VStack, Stat } from "@chakra-ui/react";
import { InfoTip } from "@/components/ui/toggle-tip";

const hideKeys = ["balance"];

function StatsPanel() {
    const { data, isLoading } = useWallet();
    const stats = formatObjectForUI(data ?? [], hideKeys);

    return (
        <Box bg="white">
            <VStack gap={8} align="stretch" maxW="270px">
                {stats.map((stat) => (
                    <Stat.Root key={stat.label} cursor="default">
                        <Stat.Label
                            fontSize="sm"
                            color="#56616B"
                            fontWeight="medium"
                            lineHeight="16px"
                            letterSpacing="-0.2px"
                            display="flex"
                            justifyContent="space-between"
                        >
                            {isLoading ? "Please wait..." : stat.label}
                            <InfoTip>
                                {stat.label} information
                            </InfoTip>
                        </Stat.Label>
                        <Stat.ValueText
                            fontSize="28px"
                            fontWeight="bold"
                            color="#131316"
                            lineHeight="36px"
                            letterSpacing="-0.02em"
                        >
                            USD {isLoading ? "0.00" : stat.value}
                        </Stat.ValueText>
                    </Stat.Root>
                ))}
            </VStack>
        </Box>
    );
}

export default StatsPanel;
