import React from 'react';
import "./Home.css"
import bg from './../images/me.jpg';
import { FaTelegram, FaInstagram, FaSnapchatGhost, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconButton, Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className="div1" >
      <div className='social'>
        <Flex direction="column" align="center" justify="center" gap={10} >
          <IconButton
            as="a"
            href="https://t.me/Ashenafisahele"
            aria-label="Telegram"
            icon={<FaTelegram />}
            colorScheme="telegram"
            color='wheat'
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/p_a_b_l._.o"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="instagram"
            color='wheat'
          />
          <IconButton
            as="a"
            href="https://www.snapchat.com/add/pabloo2049"
            aria-label="Snapchat"
            icon={<FaSnapchatGhost />}
            colorScheme="snapchat"
            color='wheat'
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/ashenafi-sahele-0458412b1/"
            
            
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            colorScheme="linkedin"
            color='wheat'
          />
          <IconButton
            as="a"
            href="https://github.com/Ashtaa"
            aria-label="GitHub"
            icon={<FaGithub />}
            colorScheme="gray"
            color='wheat'
          />
          <IconButton
            as="a"
            href="https://twitter.com/p_a_b_l_o_15"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
            color='wheat'
          />
        </Flex>
      </div>
      <div className='div'>
        <div className='photo'>
          <img src={bg} alt="" />
        </div>
        <p>HELLO MY NAME IS ASHENAI</p>
        <h1>
          Frontend Developer
        </h1>
        <button>about me</button><button className='b2'>projects</button>
      </div>
    </div>
  );
};

export default Home;