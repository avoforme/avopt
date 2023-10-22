import {
  Container,
  Badge,
  SimpleGrid,
 
} from '@chakra-ui/react'
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
        Curious of what Robotics could entail, I particpated in a Robotics Club
        of U.S. Consulate General - Ho Chi Minh City partnering with HCMUT. I
        got to build robots and give it order through LEGO Spike. Even though it
        was coded in something similar to Scratch, it was still hard to become
        used to controlling it.{' '}
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
