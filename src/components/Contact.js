import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Flex, Input, Textarea, Button, Text, VStack, BorderRadius, Heading } from '@chakra-ui/react';
import './contact.css'

function Contact() {
  const [state, handleSubmit] = useForm('mkgwjazg');

  if (state.succeeded) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Text fontSize="2xl">Thanks for joining!</Text>
      </Flex>
    );
  }

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Box
        p={6}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        w="400px"
        borderColor="#2b6cb0"
      >
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mkgwjazg" className='form' background="black">
        <Heading textAlign='center' color='wheat'>form</Heading>
          <VStack spacing={4}>
            <Box w="full">
              <Input
                
                
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                height="50px"
                width="300px"
                borderRadius={4}
              />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />
            </Box>
            <Box w="full">
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                height="50px"
                width="300px"
                
                
                borderRadius={4}
              />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
              />
            </Box>
            <Box w="full">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                height="50px"
                width="300px"
                
               
                borderRadius={4}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Box>
            <Box w="full">
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                height="200px"
                width="300px"
                
                
                borderRadius={4}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Box>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={state.submitting}
              w="full"
              borderRadius={4}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default Contact;