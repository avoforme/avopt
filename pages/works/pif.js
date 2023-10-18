import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import React from 'react'
import { Player } from 'video-react'


const Work = () => (
  

  <Layout title="PIF">
    <Container>
      <Title>
        Mentee <Badge>2023</Badge>
      </Title>
      <P></P>
      <P></P>

      <WorkImage src="/images/PIF/1.jpg" alt="walknote" />
      <WorkImage src="/images/PIF/2.jpg" alt="walknote" />

      {/* <Player rel="stylesheet" href="/css/video-react.css">
        <source src="/images/PIF/vid2.mp4" />
      </Player> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
