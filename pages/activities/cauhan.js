import { Container, Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cau Han Charity School">
    <Container>
      <Title>
        Volunteer <Badge>2022</Badge>
      </Title>
      <P>
        We had a wonderful summer teaching program in July and August 2022. We
        visited a shelter together where we shared and reinforced our knowledge
        with the children. Although there were some unexpected incidents, the
        students' eagerness to learn and their love for their siblings created a
        happy and creative atmosphere, making the learning process easier.
      </P>
      <WorkImage src="/images/Cauhan/1.jpg" alt="cauhan" />
      <WorkImage src="/images/Cauhan/2.jpg" alt="cauhan" />
      <WorkImage src="/images/Cauhan/3.png" alt="cauhan" />
      <WorkImage src="/images/Cauhan/4.png" alt="cauhan" />
      <WorkImage src="/images/Cauhan/5.jpg" alt="cauhan" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
