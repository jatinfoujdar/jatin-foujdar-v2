import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbPromise from '../public/images/promise-blog.png'
import thumbFirstBlog from '../public/images/react-first-blog.png'
import thumbReactHooks from '../public/images/hooks-reactjs.png'
import thumbComponents from '../public/images/components-react.png'

import React from 'react'

const Posts = () => {
  return (
    <Layout title="posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4} padding="1rem">
          Recent Posts
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <GridItem
              href="https://jatinfoujdar.hashnode.dev/guide-to-positions-in-css"
              title="Keeping up with your Promise()"
              thumbnail={thumbPromise}
            />
          </Section>
        </SimpleGrid>
        <Divider />
        <Heading as="h3" fontSize={20} mb={4} padding="1rem">
          Older Posts
        </Heading>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              href="https://jatinfoujdar.hashnode.dev/how-to-get-started-with-react"
              title="A month in ReactJS"
              thumbnail={thumbFirstBlog}
            />
            <GridItem
              href="https://jatinfoujdar.hashnode.dev/arrays-in-javascript-brief"
              title="Hooking up with useState and useEffect"
              thumbnail={thumbReactHooks}
            />
            <GridItem
              href="https://jatinfoujdar.hashnode.dev/my-beginners-journey-with-syncloop-revolutionizing-productivity-and-collaboration"
              title="My Beginner's Journey with Syncloop"
              thumbnail={thumbComponents}
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
