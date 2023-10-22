import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TEDxYouth@PTNK">
    <Container>
      <Title>
        Teacher Day's Website <Badge>2021</Badge>
      </Title>
      <P>
        During my initial days of learning Website Development, I came across an
        online project recruitment opportunity which I joined without any
        hesitation. Despite my limited coding knowledge at that time, I managed
        to secure a spot in the team. It was during this time that I met
        like-minded people and learned a great deal more about how a Website
        project typically operates.
      </P>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/TeacherDay/webui.jpg" alt="teach" />
        <WorkImage src="/images/TeacherDay/2.jpg" alt="teach" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
