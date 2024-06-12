import { Container, Heading, Text, VStack, Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1600812227435-d194ea36937d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODE5MDU0OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mb={4} />
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Software Developer | Tech Enthusiast | Blogger
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com/yourprofile" target="_blank" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/yourprofile" target="_blank" />
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/yourprofile" target="_blank" />
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">Hello! I'm John Doe, a passionate software developer with a love for creating innovative solutions and sharing knowledge through my blog. I have a background in computer science and have worked on various projects ranging from web development to machine learning. In my free time, I enjoy reading, hiking, and exploring new technologies.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                My Journey into Web Development
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Posted on January 1, 2023
              </Text>
              <Text mt={2}>Web development has always fascinated me. In this post, I share my journey into the world of web development, the challenges I faced, and the lessons I learned along the way...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Understanding React Hooks
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Posted on February 15, 2023
              </Text>
              <Text mt={2}>React Hooks have revolutionized the way we write React components. In this post, I delve into the basics of React Hooks, how they work, and how you can use them to simplify your code...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Exploring Machine Learning
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Posted on March 10, 2023
              </Text>
              <Text mt={2}>Machine learning is a rapidly evolving field with endless possibilities. In this post, I explore the basics of machine learning, some common algorithms, and how you can get started with your own projects...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
