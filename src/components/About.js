import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, Text, useColorModeValue, Button, Icon } from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaUserGraduate } from 'react-icons/fa';
import './About.css'
import cv from './../images/cv.pdf'

const About = () => {
  const handleButtonClick = () => {
    window.open(cv, '_blank');
  };

  return (
    <div className="mydata">
      <Flex
        justify="space-between"
        align="center"
        height={{ base: 'auto', md: '100%' }}
        paddingLeft={{ base: '20px', md: '200px' }}
        backgroundColor='gray'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          flex="1"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
          <Table variant="simple" color='black' fontSize='20px'>
            <Thead>
              <Tr>
                <Th colSpan={2}>
                  <Heading size="md">Hello</Heading>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className="ques">
                  <Text fontWeight="bold">Name:</Text>
                </Td>
                <Td className="answ">Ashenafi</Td>
              </Tr>
              <Tr>
                <Td className="ques">
                  <Text fontWeight="bold">Age:</Text>
                </Td>
                <Td className="answ">19</Td>
              </Tr>
              <Tr>
                <Td className="ques">
                  <Text fontWeight="bold">Country:</Text>
                </Td>
                <Td className="answ">Ethiopia</Td>
              </Tr>
              <Tr>
                <Td className="ques">
                  <Text fontWeight="bold">Certified with:</Text>
                </Td>
                <Td className="answ">Coursera</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box
          mt={{ base: 8, md: 8 }}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          flex="1"
        >
          <Heading size="md" mb={4}>Skills</Heading>
          <Flex direction="column" align="start">
            <Flex mb={2} align="center">
              <Icon as={FaHtml5} color="orange.500" mr={2} />
              <Text fontWeight="bold" fontSize="18px" mr={4}>HTML:</Text>
              <Box bg="blue.500" color="black" px={3} py={1} borderRadius={4} ml="auto">90%</Box>
            </Flex>
            <Flex mb={2} align="center">
              <Icon as={FaCss3Alt} color="blue.500" mr={2} />
              <Text fontWeight="bold" fontSize="18px" mr={4}>CSS:</Text>
              <Box bg="blue.500" color="black" px={3} py={1} borderRadius={4} ml="auto">85%</Box>
            </Flex>
            <Flex mb={2} align="center">
              <Icon as={FaJs} color="yellow.500" mr={2} />
              <Text fontWeight="bold" fontSize="18px" mr={4}>JavaScript:</Text>
              <Box bg="blue.500" color="black" px={3} py={1} borderRadius={4} ml="auto">80%</Box>
            </Flex>
            <Flex mb={2} align="center">
              <Icon as={FaReact} color="cyan.500" mr={2} />
              <Text fontWeight="bold" fontSize="18px" mr={4}>React:</Text>
              <Box bg="blue.500" color="black" px={3} py={1} borderRadius={4} ml="auto">75%</Box>
            </Flex>
            <Flex mb={2} align="center">
              <Icon as={FaUserGraduate} color="green.500" mr={2} />
              <Text fontWeight="bold" fontSize="18px" mr={4}>Communication:</Text>
              <Text ml="auto">Excellent</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex justify="center" mt={4} className='button-container'>
        <Button colorScheme="blue" onClick={handleButtonClick} className='button3'>
          CV
        </Button>
      </Flex>
    </div>
  );
};

export default About;