import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuRoot,
  MenuTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BsBell, BsChatLeftText } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import {
  MdOutlineGroup,
  MdOutlineInsertChart,
  MdOutlineWidgets,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  icon?: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: <GoHome size={20} /> },
  { label: "Analytics", icon: <MdOutlineInsertChart size={20} /> },
  { label: "Revenue", active: true, icon: <FaMoneyBills size={20} /> },
  { label: "CRM", icon: <MdOutlineGroup size={20} /> },
  { label: "Apps", icon: <MdOutlineWidgets size={20} /> },
];

const userProfileName = "Ojeda Jhone";

export default function TopNav() {
  return (
    <Box
      as="header"
      border="2px"
      bg="bg"
      position="sticky"
      top="0"
      zIndex="docked"
      marginInline="14px"
      marginTop="14px"
      rounded="100px"
      boxShadow="0px 2px 4px #2c3b420d , 0px 2px 6px #2d3b430f"
    >
      <Container maxW="7xl" py={{ base: 3, md: 4 }}>
        <HStack gap={4} justifyContent="space-between">
          <Image src="/logo.svg" alt="logo" />
          <HStack gap={{ base: 2, md: 4 }} as="nav">
            {NAV_ITEMS.map((item) => (
              <Text
                key={item.label}
                color={item.active ? "white" : "nav.muted"}
                fontWeight={item.active ? "semibold" : "medium"}
                px={4}
                py={2}
                rounded="full"
                bg={item.active ? "black" : "transparent"}
                transition="all 0.2s ease"
                _hover={{
                  bg: item.active ? "black" : "nav.hoverBg",
                  color: item.active ? "white" : "nav.active",
                }}
                display="flex"
                alignItems="center"
                gap={2}
                cursor="pointer"
              >
                {item.icon} {item.label}
              </Text>
            ))}
          </HStack>

          <HStack gap={{ base: 1, md: 2 }}>
            <IconButton aria-label="notifications" variant="ghost" size="sm">
              <BsBell size={20} />
            </IconButton>
            <IconButton aria-label="chat" variant="ghost" size="sm">
              <BsChatLeftText size={20} />{" "}
            </IconButton>

            <MenuRoot>
              <MenuTrigger asChild>
                <Button
                  variant="subtle"
                  size="md"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  px="12px"
                  py="4px"
                  pl="5px"
                  pr="12px"
                  gap="8px"
                  bg="#EFF1F6"
                  rounded="100px"
                  cursor="pointer"
                  flex="none"
                  order="3"
                  flexGrow="0"
                >
                  <Avatar.Root
                    w="32px"
                    h="32px"
                    flex="none"
                    order="0"
                    flexGrow="0"
                    bg="linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)"
                    rounded="100px"
                  >
                    <Avatar.Fallback
                      name={userProfileName}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="16px"
                      letterSpacing="-0.4px"
                      display="flex"
                      alignItems="center"
                      textAlign="center"
                      background="linear-gradient(107.68deg, #FFFFFF -6.45%, #F2F3F5 114.84%)"
                      backgroundClip="text"
                      WebkitTextFillColor="transparent"
                    />
                  </Avatar.Root>
                  <RxHamburgerMenu size={20} />
                </Button>
              </MenuTrigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="profile">
                      <Text>Profile</Text>
                    </Menu.Item>
                    <Menu.Item value="settings">
                      <Text>Settings</Text>
                    </Menu.Item>
                    <Menu.Item value="logout">
                      <Text>Log out</Text>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </MenuRoot>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
