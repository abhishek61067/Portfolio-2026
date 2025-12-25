import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Botsfolio – Crypto Investment Platform",
    description:
      "A full-scale crypto investment SaaS platform featuring AutoCopy trading, real-time dashboards, and advanced portfolio analytics.",
    tech: "Next.js, React, WebSockets, REST APIs",
    link: "https://botsfolio.com",
  },
  {
    title: "MoneyMitra – Financial Advisory Platform",
    description:
      "A fintech platform providing financial planning, investment guidance, and user-centric dashboards with secure authentication.",
    tech: "React, JavaScript, API Integrations",
    link: "https://moneymitra.com",
  },
  {
    title: "Ideapreneur Nepal",
    description:
      "A business and startup-focused platform built with dynamic UI components, performance optimization, and scalable frontend architecture.",
    tech: "React, JavaScript, UI/UX Optimization",
    link: "https://ideapreneurnepal.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Multi-vendor e-commerce platform with authentication, product management, cart system, and admin dashboard.",
    tech: "React, JavaScript, Chakra UI",
    link: "#",
  },
  {
    title: "Codeek – Frontend YouTube Channel",
    description:
      "Educational content focused on React, frontend architecture, and real-world development practices.",
    tech: "React, JavaScript, Content Creation",
    link: "https://www.youtube.com/@codeek0",
  },
];

const Projects = () => {
  return (
    <Box py={20} px={6}>
      <Heading textAlign="center" mb={10} color={"white"}>
        Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        maxW="1100px"
        mx="auto"
      >
        {projects.map((project) => (
          <Box
            key={project.title}
            p={6}
            bg="gray.800"
            borderRadius="lg"
            _hover={{ transform: "translateY(-4px)", bg: "gray.700" }}
            transition="0.2s ease"
          >
            <Stack spacing={3}>
              <Heading size="md" color="cyan.300">
                {project.title}
              </Heading>

              <Text color="gray.300">{project.description}</Text>

              <Text fontSize="sm" color="gray.500">
                {project.tech}
              </Text>

              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outline"
                colorScheme="cyan"
                alignSelf="flex-start"
              >
                View Project
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
