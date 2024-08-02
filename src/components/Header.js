import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      color="white"
      py={4}
    >
      <Flex maxW="1280px" mx="auto" px={16} justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          My App
        </Text>
        <Flex align="center" spacing={16}>
          <Link
            as={ReactRouterLink}
            to="/"
            fontSize="xl"
            color="white"
            _hover={{ color: 'gray.300' }}
            textDecoration="none"
          >
            Home
          </Link>
          <Link
            as={ReactRouterLink}
            to="/about"
            fontSize="xl"
            color="white"
            _hover={{ color: 'gray.300' }}
            textDecoration="none"
            marginLeft="50px"
          >
            About
          </Link>
          <Link
            as={ReactRouterLink}
            to="/project"
            fontSize="xl"
            color="white"
            _hover={{ color: 'gray.300' }}
            textDecoration="none"
            marginLeft="50px"
          >
            projects
          </Link>
          <Link
            as={ReactRouterLink}
            to="/contact"
            fontSize="xl"
            color="white"
            _hover={{ color: 'gray.300' }}
            textDecoration="none"
            marginLeft="50px"
          >
            contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;