import { Box, Heading, Stack, Text } from "@chakra-ui/react";

// Data object for experience & education
export const experienceData = [
  {
    role: "Frontend Lead (Solo with design decisions)",
    company: "Botsfolio",
    period: "Aug 2025 – Present",
    description:
      "Leading frontend development including design decisions and implementation for a crypto-investment SaaS platform. Built real-time dashboards, AutoCopy systems and multiple core features and scalable UI architecture. Optimized performance of legacy codebase and fixed legacy issues to improve user experience and product cost. Owned frontend architecture, performance optimization, and API integration while collaborating closely with 2 backend teams as a Solo Frontend Dev handling design decisions.",
  },
  {
    role: "Mid level Frontend Developer",
    company: "Arclogi",
    period: "Apr 2024 – Apr 2025",
    description:
      "Developed and maintained a full-scale e-commerce platform including user, vendor, and admin dashboards. Implemented authentication, payment flows, and improved performance, accessibility, and UI consistency.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Ideapreneur Nepal",
    period: "Nov 2022 – Mar 2024",
    description:
      "Built interactive, data-driven web applications using React and Django templates. Focused on UI performance, reusable components, and collaboration with cross-functional teams.",
  },
  {
    role: "Frontend Intern",
    company: "Pixel Design",
    period: "Mar 2022 – Jul 2022",
    description:
      "Assisted in developing web pages and UI components. Gained hands-on experience with HTML, CSS, JavaScript, and basic React projects.",
  },
  {
    role: "Bachelor of Computer Science",
    company: "Sunway International Business School",
    period: "2019 – 2024",
    description: "",
  },
];

const Experience = () => {
  return (
    <Box px={6} maxW="900px" mx="auto">
      <Heading mb={10}>Experience & Education</Heading>

      <Stack spacing={8}>
        {experienceData.map((item, index) => (
          <Box key={index}>
            <Text fontWeight="bold" fontSize="lg" color="cyan.300">
              {item.role} {item.company ? `— ${item.company}` : ""}
            </Text>
            <Text fontSize="sm" color="gray.400" mb={2}>
              {item.period}
            </Text>
            {item.description && (
              <Text color="gray.300">{item.description}</Text>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
