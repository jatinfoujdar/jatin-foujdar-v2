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
            <NextLink href="https://drive.google.com/file/d/1BaC76HM5CiPSac8K26GKkz5sfYA011CT/view?usp=sharing">
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
            <BioYear>2025</BioYear>
            Completed Master&apos;s in Computer Applications at Manipal
            University Jaipur
          </BioSection>
        </Section>

      <Section delay={0.5}>
  <Heading as="h3" variant="section-title">
    Experience
  </Heading>

  <BioSection>
    <BioYear>Jan – Apr 2025</BioYear>
    Software Engineer Intern @ HackerRank (On-site)<br />
    Worked on MVVM architecture and SDK integrations. Earned a HackerRank Skill Certificate.
  </BioSection>

  <BioSection>
    <BioYear>Jun 2023 – Nov 2024</BioYear>
    Frontend Developer @ DR DATATECH21 (Hybrid – Jaipur)<br />
    Built a Training Tracker Web App, improved admin and user portals using ReactJS, Strapi, and Tailwind CSS.
  </BioSection>

  <BioSection>
    <BioYear>Nov 2022 – Feb 2023</BioYear>
    Frontend Developer Intern @ iNeuron.ai (On-site – Bengaluru)<br />
    Contributed to UI consistency across Stylework products and collaborated closely with design teams.
  </BioSection>
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

        <Section delay={1}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Basketball, Cricket, {''}
            Drawing, Animation
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
                 jatin_foujdar
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
