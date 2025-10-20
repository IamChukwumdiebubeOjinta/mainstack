import {
  Avatar,
  Box,
  HStack,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiMail, FiUser } from "react-icons/fi";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userEmail: string;
  triggerRef?: React.RefObject<HTMLElement>;
}

export default function ProfileModal({
  isOpen,
  onClose,
  userName,
  userEmail,
}: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Custom Backdrop */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        backdropFilter="blur(4px)"
        zIndex={1400}
        onClick={onClose}
      />

      {/* Centered Profile Card */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={1401}
        width="380px"
        borderRadius="16px"
        boxShadow="0px 10px 40px rgba(0, 0, 0, 0.25)"
        bg="bg"
        border="1px solid"
        borderColor="app.borderMuted"
        overflow="hidden"
      >

            {/* Header with Avatar */}
            <Box
              bg="linear-gradient(135deg, #131316 0%, #2D3748 100%)"
              pt="24px"
              pb="20px"
              px="24px"
              textAlign="center"
            >
              <Avatar.Root
                size="lg"
                mx="auto"
                bg="linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)"
                border="3px solid white"
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.2)"
              >
                <Avatar.Fallback
                  name={userName}
                  fontSize="20px"
                  fontWeight="600"
                  background="linear-gradient(107.68deg, #FFFFFF -6.45%, #F2F3F5 114.84%)"
                  backgroundClip="text"
                  WebkitTextFillColor="transparent"
                />
              </Avatar.Root>
            </Box>

            {/* Profile Info */}
            <VStack align="stretch" gap={0} p="20px">
              {/* Full Name */}
              <HStack gap={3} py={3}>
                <Box
                  p={2}
                  borderRadius="8px"
                  bg="app.surfaceMuted"
                  color="app.text"
                  flexShrink={0}
                >
                  <FiUser size={18} />
                </Box>
                <VStack align="start" gap={0} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="medium"
                    color="app.textMuted"
                    letterSpacing="0.3px"
                    textTransform="uppercase"
                  >
                    Full Name
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="app.text"
                    mt={0.5}
                  >
                    {userName}
                  </Text>
                </VStack>
              </HStack>

              <Separator />

              {/* Email */}
              <HStack gap={3} py={3}>
                <Box
                  p={2}
                  borderRadius="8px"
                  bg="app.surfaceMuted"
                  color="app.text"
                  flexShrink={0}
                >
                  <FiMail size={18} />
                </Box>
                <VStack align="start" gap={0} flex={1}>
                  <Text
                    fontSize="xs"
                    fontWeight="medium"
                    color="app.textMuted"
                    letterSpacing="0.3px"
                    textTransform="uppercase"
                  >
                    Email
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="app.text"
                    mt={0.5}
                    wordBreak="break-all"
                  >
                    {userEmail}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
      </Box>
    </>
  );
}