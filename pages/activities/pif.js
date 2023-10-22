import { Container, Badge } from '@chakra-ui/react'
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
        In July 2023, I attended my first Science Summer Camp. I initially
        thought Electrical Engineering (EE) was similar to Computer Science (CS)
        and expected it to involve more Mathematics than Physics. However, I
        soon realized that EE had a whole different focus on the Art of
        Electronics. Initially, I was overwhelmed by the amount of Physics
        involved, but with the help of my mentors, I began to develop an
        interest in it. Each time I blew up a LED, I grew to love EE more.
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
        <video controls="true">
          <source src="/images/PIF/vid4.mp4" type="video/mp4" />
        </video>
      </Container>
      <P>First time welding:</P>
      <WorkImage src="/images/PIF/4.png" alt="pifpic" />

      <P>
        This is my the basic design for my Final Project - The library sound
        sensor:
      </P>
      <WorkImage src="/images/PIF/5.png" alt="pifpic" />
      <P>
        Final Project demonstration: The system consists of four different levels,
        each represented by a color, namely Blue, Green, Yellow, and Red. Its
        main function is to react to the surrounding noise level. As the noise
        increases, the system changes its color, ending with a Red warning when
        the sound level reaches a critical threshold.
      </P>
      <Container mb={4}>
        <video controls="true">
          <source src="/images/PIF/vid2.mp4" type="video/mp4" />
        </video>
      </Container>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
