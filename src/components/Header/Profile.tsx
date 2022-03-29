import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Rufo</Text>
          <Text color="gray.300" fontSize="small">rifelu25@outlook.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Rufo" src="https://github.com/LucasRufo.png" />
    </Flex>
  )
}