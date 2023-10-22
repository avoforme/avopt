import {
  Container,
  Badge,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'
import { AspectRatio } from '@chakra-ui/react'

const Work = () => (
  <Layout title="PIF">
    <Container>
      <Title>
        Eletrical and Electronics Engineering Summer Camp <Badge>2023</Badge>
      </Title>
      <P>
        In July 2023, I joined my first ever Science Summer Camp. Thinking that
        EE will be the same as CS, I anticipated to the thought of something
        more Mathematics rather than Physics.
      </P>
      <P>
        I soon realized there was a-whole-nother major dedicated to the Art of
        Electronics. At first I was overwhelmed by the amount of Physics it
        required, but with the help of all the mentors, I began to take a like
        to it. Each time I blew up a LED, I grew to love EE more.
      </P>

      <WorkImage src="/images/PIF/1.jpg" alt="pifpic" />
      <WorkImage src="/images/PIF/3.png" alt="pifpic" />

      <P>My first ever circuit:</P>
      <WorkImage src="/images/PIF/6.jpg" alt="pifpic" />
      <P>
        After a few more attempts, I became adept at it. This is the flip-flop
        circuit:
      </P>
      <Container mb={4}>
        <AspectRatio>
          <iframe title="pif" src="/images/PIF/vid4.mp4" allowFullScreen />
        </AspectRatio>
      </Container>
      <P>First time welding:</P>
      <WorkImage src="/images/PIF/4.png" alt="pifpic" />

      <P>
        This is my the basic design for my final project - The library sound
        sensor:
      </P>
      <WorkImage src="/images/PIF/5.png" alt="pifpic" />
      <P>
        Product demonstration. There were four levels: Blue, Green, Yellow, and
        Red. The noisier it gets, the higher color it shows. At Red, there will
        be a sound warning.
      </P>
      <Container mb={4}>
        <AspectRatio>
          <iframe title="pif" src="/images/PIF/vid1.mp4" allowFullScreen />
        </AspectRatio>
      </Container>

      <Container mb={4}>
        <AspectRatio>
          <iframe title="pif" src="/images/PIF/vid2.mp4" allowFullScreen />
        </AspectRatio>
      </Container>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
