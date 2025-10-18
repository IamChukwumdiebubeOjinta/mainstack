import { Box, VStack } from "@chakra-ui/react";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  return (
    <Box
      position="fixed"
      left="16px"
      top="310px"
      width="48px"
      height="192px"
      bg="app.surface"
      borderRadius="pill"
      boxShadow="app.sidebar"
      zIndex="docked"
      className={className}
      p="4px"
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      gap="4px"
    >
      <Box
        width="40px"
        height="184px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        flex="none"
        order="0"
        flexGrow="0"
      >
        {/* Navigation Icons */}
        <VStack gap="8px" align="center" width="100%">
          {/* App Bar List Item 1 */}
          <Box
            width="40px"
            height="40px"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            padding="8px"
            gap="4px"
            mixBlendMode="luminosity"
            borderRadius="pill"
            flex="none"
            order="0"
            flexGrow="0"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            transition="background 0.2s ease"
          >
            <Box
              width="24px"
              height="24px"
              flex="none"
              order="0"
              flexGrow="0"
              position="relative"
            >
              {/* Gradient vectors as specified */}
              <Box
                position="absolute"
                left="17.74%"
                right="30.18%"
                top="16.67%"
                bottom="46.25%"
                bg="linear-gradient(124.84deg, #FCFF1C 19.08%, #FF9D0A 96.99%)"
              />
              <Box
                position="absolute"
                left="35.53%"
                right="12.39%"
                top="33.33%"
                bottom="29.58%"
                bg="linear-gradient(124.84deg, #FCFF1C 19.08%, #FF9D0A 96.99%)"
              />
              <Box
                position="absolute"
                left="12.5%"
                right="71.93%"
                top="61.34%"
                bottom="20.46%"
                bg="linear-gradient(124.84deg, #FCFF1C 19.08%, #FF9D0A 96.99%)"
              />
            </Box>
          </Box>

          {/* App Bar List Item 2 */}
          <Box
            width="40px"
            height="40px"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            padding="8px"
            gap="4px"
            mixBlendMode="luminosity"
            borderRadius="pill"
            flex="none"
            order="1"
            flexGrow="0"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            transition="background 0.2s ease"
          >
            <Box
              width="24px"
              height="24px"
              flex="none"
              order="0"
              flexGrow="0"
              position="relative"
            >
              {/* Complex gradient vectors */}
              <Box
                position="absolute"
                width="19px"
                height="20.12px"
                left="2.5px"
                top="1.94px"
                bg="linear-gradient(90deg, #FF9868 0.01%, #FF5403 99.98%)"
              />
              <Box
                position="absolute"
                left="18.08%"
                right="18.17%"
                top="28.17%"
                bottom="8.08%"
                bg="linear-gradient(90deg, #FF9868 0.01%, #FF5403 99.98%)"
              />
              <Box
                position="absolute"
                left="30.65%"
                right="10.42%"
                top="17.04%"
                bottom="33.89%"
                bg="linear-gradient(90deg, #03FFE5 -0.02%, #14B348 100%)"
              />
              <Box
                position="absolute"
                left="10.42%"
                right="30.65%"
                top="8.08%"
                bottom="42.82%"
                bg="linear-gradient(90deg, #FCFF1C 0%, #FF9D0A 100.02%)"
              />
            </Box>
          </Box>

          {/* App Bar List Item 3 */}
          <Box
            width="40px"
            height="40px"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            padding="8px"
            gap="4px"
            mixBlendMode="luminosity"
            borderRadius="pill"
            flex="none"
            order="2"
            flexGrow="0"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            transition="background 0.2s ease"
          >
            <Box
              width="24px"
              height="24px"
              flex="none"
              order="0"
              flexGrow="0"
              position="relative"
            >
              {/* More gradient vectors */}
              <Box
                position="absolute"
                width="20px"
                height="18.89px"
                left="2px"
                top="2.55px"
                bg="linear-gradient(90deg, #FCFF1C -0.04%, #FF9D0A 99.97%)"
              />
              <Box
                position="absolute"
                left="17.83%"
                right="34%"
                top="10.65%"
                bottom="51.15%"
                bg="linear-gradient(90deg, #FCFF1C -0.04%, #FF9D0A 99.97%)"
              />
              <Box
                position="absolute"
                left="8.33%"
                right="48.79%"
                top="24.4%"
                bottom="40.9%"
                bg="linear-gradient(90deg, #E7CFFF 0%, #870FFF 100.03%)"
              />
              <Box
                position="absolute"
                left="8.33%"
                right="8.33%"
                top="32.4%"
                bottom="10.65%"
                bg="linear-gradient(90deg, #03FFE5 0%, #14B348 100%)"
              />
            </Box>
          </Box>

          {/* App Bar List Item 4 */}
          <Box
            width="40px"
            height="40px"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            padding="8px"
            gap="4px"
            mixBlendMode="luminosity"
            borderRadius="pill"
            flex="none"
            order="3"
            flexGrow="0"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            transition="background 0.2s ease"
          >
            <Box
              width="24px"
              height="24px"
              flex="none"
              order="0"
              flexGrow="0"
              position="relative"
            >
              {/* Final gradient vectors */}
              <Box
                position="absolute"
                left="34.33%"
                right="14.5%"
                top="23.33%"
                bottom="7.92%"
                bg="linear-gradient(90deg, #FCFF1C 0.02%, #FF9D0A 99.98%)"
              />
              <Box
                position="absolute"
                left="34.33%"
                right="25.25%"
                top="23.33%"
                bottom="15.96%"
                bg="linear-gradient(90deg, #FFDDCD 0.02%, #FF5403 99.97%)"
              />
              <Box
                position="absolute"
                left="14.5%"
                right="25.25%"
                top="8.29%"
                bottom="10.2%"
                bg="linear-gradient(90deg, #E7CFFF 0.01%, #870FFF 99.98%)"
              />
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Sidebar;
