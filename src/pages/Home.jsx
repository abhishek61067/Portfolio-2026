import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import Skills from "./../components/Skills";
import Experience from "./../components/Experience";

const Home = () => {
  return (
    <Box color="white" py={10}>
      {/* HERO SECTION */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
        textAlign="center"
      >
        <Stack spacing={6} maxW="800px">
          <Text
            fontSize="sm"
            fontWeight="600"
            color="cyan.300"
            letterSpacing="wide"
          >
            MID-SENIOR FRONTEND DEVELOPER
          </Text>

          <Heading size="3xl" lineHeight="1.2">
            Hi, I’m{" "}
            <Text as="span" color="cyan.300">
              Abhishek
            </Text>{" "}
            👋
            <br />I build modern scalable and performant web applications.
          </Heading>

          <Text fontSize="lg" color="gray.300">
            Frontend developer with 3.5+ years of experience building real-world
            products including e-commerce platforms, stock market dashboards,
            real-time applications, and SaaS products. Lets discuss on
            opportunities and lets build something great together. I am free for
            discussions now.
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify="center"
          >
            <Button as={Link} to="/projects" colorScheme="cyan" size="lg">
              View Projects
            </Button>

            <Button
              as={Link}
              to="/contact"
              variant="outline"
              colorScheme="cyan"
              size="lg"
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* SKILLS SECTION */}
      <Box py={20}>
        <Skills />
      </Box>

      {/* EXPERIENCE SECTION */}
      <Box>
        <Experience />
      </Box>
    </Box>
  );
};

export default Home;
