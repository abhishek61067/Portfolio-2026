import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box px={6} maxW="900px" mx="auto">
      <Heading mb={10}>Experience & Education</Heading>

      <Stack spacing={8}>
        {/* Botsfolio */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="cyan.300">
            Frontend Lead(Solo with design decisions) — Botsfolio
          </Text>
          <Text fontSize="sm" color="gray.400" mb={2}>
            Aug 2025 – Present
          </Text>
          <Text color="gray.300">
            Leading frontend development including design decisions and
            implementation for a crypto-investment SaaS platform. Built
            real-time dashboards, AutoCopy systems and multiple core features
            and scalable UI architecture. Optimize performance of legacy
            codebase and fixed the legacy issues to improve user eperience and
            cost of the product. Owned frontend architecture, performance
            optimization, and API integration while collaborating closely with 2
            backend teams as a Solo Frontend Dev handling designing decisions as
            well.
          </Text>
        </Box>

        {/* Arclogi */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="cyan.300">
            Mid level Frontend Developer — Arclogi
          </Text>
          <Text fontSize="sm" color="gray.400" mb={2}>
            Apr 2024 – Apr 2025
          </Text>
          <Text color="gray.300">
            Developed and maintained a full-scale e-commerce platform including
            user, vendor, and admin dashboards. Implemented authentication,
            payment flows, and improved performance, accessibility, and UI
            consistency.
          </Text>
        </Box>

        {/* Ideapreneur Nepal */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="cyan.300">
            Junior Frontend Developer — Ideapreneur Nepal
          </Text>
          <Text fontSize="sm" color="gray.400" mb={2}>
            Nov 2022 – Mar 2024
          </Text>
          <Text color="gray.300">
            Built interactive, data-driven web applications using React and
            Django templates. Focused on UI performance, reusable components,
            and collaboration with cross-functional teams.
          </Text>
        </Box>

        {/* Education */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="cyan.300">
            Bachelor of Computer Science
          </Text>
          <Text color="gray.400">
            Sunway International Business School (2019 – 2024)
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Experience;
