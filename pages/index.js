import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  Text
} from '@chakra-ui/react';

import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram
} from 'react-icons/io5';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
        Hey there! I&apos;m an iOS developer from India who loves turning ideas into smooth, user-friendly apps.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jatin Foujdar
            </Heading>
            <p>IOS Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/BeautyPlus_20181018220757696_save.jpg"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph padding="10px">
           
            I&apos;m a passionate iOS developer and a constant learner,
             always eager to pick up new skills. I enjoy building and designing sleek iOS apps,
              exploring scalability challenges, and optimizing performance. 
              I also love creating smooth animations and 
              engaging UI illustrations that bring apps to life.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="https://drive.google.com/file/d/1ZVufrntMofNbpkDw_vGPUFfsbsthgc-W/view?usp=sharing">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Resume
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Bharatpur (Rajasthan), India.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed Higher Secondary with Commerse and Computer Science major
            from St. Peter&apos;s Sr. Sec. School
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Bachelor&apos;s in Computer Applications at Acharya
            Institute of Graduate Studies
          </BioSection>
          <BioSection>
            <BioYear>2023 - Present</BioYear>
             Master&apos;s in Computer Applications at Manipal
            University Jaipur
          </BioSection>
        </Section>

 <Section delay={0.5}>
    <Heading as="h3" variant="section-title" mb={4}>
      Experience
    </Heading>
    
    <Box mb={6}>
      <Text fontWeight="bold" color="gray.500">
        Aug 2025
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        IOS Intern @ Swipe(YC-21) <Text as="span" fontWeight="normal" color="gray.500">(On-site)</Text>
      </Text>
      <Text color="gray.600">
        Implemented and tested a new feature for Swipe’s iOS app using Swift, enhancing user experience and payment
        functionality.
      </Text>
    </Box>

    <Box mb={6}>
      <Text fontWeight="bold" color="gray.500">
        Jan – Apr 2025
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        Software Engineer Intern @ HackerRank <Text as="span" fontWeight="normal" color="gray.500">(On-site)</Text>
      </Text>
      <Text color="gray.600">
        Working and implemented scalable RESTful APIs using Node.js and Express.
      </Text>
    </Box>

    <Box mb={6}>
      <Text fontWeight="bold" color="gray.500">
        Jun 2023 – Nov 2024
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        Frontend Developer @ DR DATATECH21 <Text as="span" fontWeight="normal" color="gray.500">(Hybrid – Jaipur)</Text>
      </Text>
      <Text color="gray.600">
        Built a Training Tracker Web App; improved admin and user portals using ReactJS, Strapi, and Tailwind CSS.
      </Text>
    </Box>

    <Box mb={6}>
      <Text fontWeight="bold" color="gray.500">
        Nov 2022 – Feb 2023
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        Frontend Developer Intern @ iNeuron.ai <Text as="span" fontWeight="normal" color="gray.500">(On-site – Bengaluru)</Text>
      </Text>
      <Text color="gray.600">
        Contributed to UI consistency across Stylework products and collaborated with design teams on feature delivery.
      </Text>
    </Box>
  </Section>


        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Achievements
          </Heading>
          <BioSection>
            <BioYear>2025</BioYear>
            WWDC 2025 Swift Student Challenge Winner
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Won first prize in Microsoft Hackathon
          </BioSection>
        </Section>

      <Section delay={0.5}>
      <Heading as="h3" variant="section-title">
        Published Apps on App Store
      </Heading>
    <BioSection>
      
      <a
        href="https://apps.apple.com/app/prioritized-task/id6753984411"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FFD700', textDecoration: 'none' }}
      >
        Prioritized Task
      </a>
      — A minimal To-Do app with a single screen where you can set reminders and customize background colors.
    </BioSection>

    <BioSection>
      
      <a
        href="https://apps.apple.com/app/iconiclist/id6754238435"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FFD700', textDecoration: 'none' }}
      >
        IconicList
      </a>
      — A detailed productivity app with colorful icons, widgets, and a dynamic task list for better organization.
    </BioSection>
  </Section>


        <Section delay={1}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Basketball, Cricket, {''}
             Animation
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" pb={4}>
            Find me on
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jatinfoujdar" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  top="5px"
                  left="10px"
                >
                  Jatin Foujdar
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jatin-foujdar-066314247"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  top="5px"
                  left="10px"
                >
                  @jatinfoujdar_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://x.com/JatinFoujdar" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                  top="5px"
                  left="10px"
                >
                  @Jatinfoujdar_x
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.instagram.com/jatin_foujdar/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                  top="5px"
                  left="10px"
                >
                 @jatin_foujdar
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
