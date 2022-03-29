import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            fontSize="small"
            color="gray.400"
          >
            GENERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Users</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            fontSize="small"
            color="gray.400"
          >
            AUTOMATIONS
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Forms</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}