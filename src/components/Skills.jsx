import { Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { FaReact, FaJsSquare, FaGitAlt, FaServer, FaBug } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React.js & Next.js", icon: <FaReact size={24} /> },
  { name: "TypeScript & JavaScript (ES6+)", icon: <SiTypescript size={24} /> },
  {
    name: "Frontend Architecture & Design Patterns",
    icon: <FaServer size={24} />,
  },
  { name: "State Management (Client & Server)", icon: <FaServer size={24} /> },
  {
    name: "API Integration, Testing & Organization",
    icon: <FaServer size={24} />,
  },
  { name: "WebSockets & Real-time Apps", icon: <FaServer size={24} /> },
  { name: "UI/UX Implementation", icon: <FaJsSquare size={24} /> },
  {
    name: "Scalable Components & Performance Optimization",
    icon: <FaJsSquare size={24} />,
  },
  { name: "Git & Code Review Workflows", icon: <FaGitAlt size={24} /> },
  { name: "Testing & Debugging", icon: <FaBug size={24} /> },
];

const Skills = () => {
  return (
    <Box px={6} py={12}>
      <Heading textAlign="center" mb={10} color="white">
        Skills
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={6}
        maxW="900px"
        mx="auto"
      >
        {skills.map((skill) => (
          <HStack
            align={"center"}
            key={skill.name}
            p={3}
            bg="gray.800"
            borderRadius="md"
            textAlign="center"
            _hover={{
              bg: "gray.700",
              transform: "translateY(-4px) scale(1.05)",
              boxShadow: "xl",
            }}
            transition="0.2s ease, transform 0.2s ease, box-shadow 0.2s ease"
          >
            <Box color="cyan.300">{skill.icon}</Box>
            <Text color="cyan.300" fontWeight="600">
              {skill.name}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
