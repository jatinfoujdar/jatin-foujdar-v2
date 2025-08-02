import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Link,
} from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

// Updated image imports
import thumbAirbnb from '../public/images/airbnb-ios.png';
import thumbPokemon from '../public/images/pokemon-ios.png';
import thumbSwiggy from '../public/images/swiggy-ios.png';
import thumbUber from '../public/images/uber.png';
import thumbRive from '../public/images/rive.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} padding="1.5rem">
          iOS Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="airbnb-ios"
              title="Airbnb iOS Clone"
              thumbnail={thumbAirbnb}
            >
              A beautiful Airbnb iOS clone with custom UI elements and smooth
              navigation.{' '}
              <Link
                href="https://github.com/jatinfoujdar/OYO-IOS"
                isExternal
                color="teal.500"
              >
                GitHub
              </Link>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="pokemon-ios"
              title="Pokemon Go iOS"
              thumbnail={thumbPokemon}
            >
              Pokémon Go-style iOS app using ARKit and SwiftUI.{' '}
              <Link
                href="https://github.com/jatinfoujdar/Pokemon-Go-IOS"
                isExternal
                color="teal.500"
              >
                GitHub
              </Link>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="swiggy-ios"
              title="Swiggy iOS App"
              thumbnail={thumbSwiggy}
            >
              Swiggy iOS UI clone with animations and cart features.{' '}
              <Link
                href="https://github.com/jatinfoujdar/Swiggy-IOS-App"
                isExternal
                color="teal.500"
              >
                GitHub
              </Link>
            </WorkGridItem>
          </Section>

            <Section>
  <WorkGridItem
    id="uber-ios"
    title="Uber Web Clone"
    thumbnail={thumbUber}
  >
    <Text color="gray.600">
      Uber app clone with custom location handling and map features.
    </Text>
    <Link
      href="https://github.com/jatinfoujdar/uber-eats"
      isExternal
      color="teal.500"
      display="block"
      mt={1}
    >
      GitHub
      </Link>
  </WorkGridItem>
</Section>  


          <Section>
            <WorkGridItem
              id="weather-rive-ios"
              title="Weather + Rive"
              thumbnail={thumbRive}
            >
              Weather iOS app integrated with beautiful Rive animations.{' '}
              <Link
                href="https://github.com/jatinfoujdar/Weather-Rive-IOS"
                isExternal
                color="teal.500"
              >
                GitHub
              </Link>
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider my={10} />
      </Container>
    </Layout>
  );
};

export default Works;
