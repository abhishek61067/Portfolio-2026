import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Input,
  Textarea,
  Link,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box py={20} px={6} maxW="700px" mx="auto">
      {/* Direct Contact Links */}
      <Stack spacing={2} textAlign="center">
        <Text color="gray.400">Or reach me directly:</Text>

        <Link href="mailto:your@email.com" color="cyan.300">
          Abhishek.bhattarai61067@gmail.com
        </Link>

        <Link
          href="https://www.linkedin.com/in/abhishek-bhattarai/"
          isExternal
          color="cyan.300"
        >
          LinkedIn
        </Link>

        <Link
          href="https://github.com/abhishek61067"
          isExternal
          color="cyan.300"
        >
          GitHub
        </Link>
        <Link
          href="https://stackoverflow.com/users/14982115/codeek"
          isExternal
          color="cyan.300"
        >
          Stackoverflow
        </Link>
        <Link
          href="https://buymeacoffee.com/codeek"
          isExternal
          color="cyan.300"
        >
          Buy Me a Coffee
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
