import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Container maxW="container.xl">
        <Flex py={4} justifyContent="space-between" alignItems="center">
          <Heading size="md">QuickChat</Heading>
          <Flex gap={4}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Features</Button>
            <Button colorScheme="blue">Getting Start</Button>
          </Flex>
        </Flex>

        <Flex 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          minH="80vh"
          textAlign="center"
          gap={4}
        >
          <Heading size="2xl" maxW="800px">
            Instant Chat Links for Seamless Conversations
          </Heading>
          <Text color="gray.600" maxW="600px">
            QuickChat makes it effortless to create secure chat links and start conversations in seconds.
          </Text>
          <Button 
            colorScheme="blue" 
            size="lg"
            onClick={() => navigate('/chat')}
          >
            Start Chatting
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home; 