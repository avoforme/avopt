import { Container, Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cau Han Charity School">
    <Container>
      <Title>
        Volunteer <Badge>2023</Badge>
      </Title>
      <P>
        When the sound of summer has gradually subsided, reducing the space for
        many tropical sounds of students' fun, it is also a warning for the last
        pages of a meaningful summer. During the past 2 summer months, our
        summer teaching program has brought many sweet fruits and valuable
        experiences before entering the new school year.
      </P>
      <P>
        Since July 1, every Monday-April-June morning, we have gone to the
        shelter together, conveying and reinforcing knowledge to the children.
        Although there were some surprises in the early days, the enthusiasm and
        eagerness to learn from the students and the love of their siblings
        created a happy and creative atmosphere, making learning easier. become
        become comfortable comfortable.
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
