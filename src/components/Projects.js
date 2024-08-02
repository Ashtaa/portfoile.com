import React from 'react';
import { Box, Flex, Heading, Text, Image, Button, SimpleGrid, Center } from '@chakra-ui/react';
import "./Project.css";
import im1 from './../images/camera man.jpg'
import im2 from './../images/yekuno.jpg'
import im3 from './../images/clinic.jpg'
import im4 from './../images/lamasion.jpg'
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    image: im1,
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    image: im2,
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is the description for Project 3.',
    image: im3,
    link: 'https://imgur.com/cbmCavs',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'i did this for my own expireance.',
    image: im4,
    link: 'https://ashtaa.github.io/portoile.com/',
  },
];

const Projects = () => {
  return (
    <Box className="div2" py={20}>
      <Heading as="h1" size="4xl" mb={8} textAlign="Center" className='prohed'>
        projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} >
        {projects.map((project) => (
          <Box
            key={project.id}
            borderWidth={1}
            borderRadius={8}
            overflow="hidden"
            boxShadow="lg"
            background='black'
            height='60%'
            color='white'
          >
            <Image src={project.image} alt={project.title} objectFit='cover' height='50%' width='100%' />
            <Box p={6}>
              <Heading as="h3" size="lg" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <Button
                as="a"
                href={project.link}
                target="_blank"
                colorScheme="blue"
                variant="solid"
                className='probutton'
              >
                View Project
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;