import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

import { AspectRatio } from '@chakra-ui/react'
const Work = () => (
  <Layout title="TEDxYouth@PTNK">
    <Container>
      <Title>
        Robotics Club <Badge>2023</Badge>
      </Title>
      <P>
        I was curious about Robotics and decided to participate in a Robotics
        Club organized by the U.S. Consulate General in Ho Chi Minh City in
        partnership with HCMUT. In the club, I had the opportunity to build
        robots and program them using LEGO Spike Prime. Although the coding
        language was similar to Scratch, I found it challenging to get used to
        controlling the robots.{' '}
      </P>
      <P></P>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Robotics/1.png" alt="robot" />
        <WorkImage src="/images/Robotics/2.png" alt="robot" />
      </SimpleGrid>
      <Container mb={4}>
        <video controls="true">
          <source src="/images/Robotics/vid1.mp4" type="video/mp4" />
        </video>
      </Container>
      <Container mb={4}>
        <video controls="true">
          <source src="/images/Robotics/vid2.mp4" type="video/mp4" />
        </video>
      </Container>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
