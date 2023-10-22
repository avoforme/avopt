import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Library">
    <Container>
      <Title>
        Library <Badge>2023</Badge>
      </Title>
      <P>This is what a normal day at the library looks like:</P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/1.jpg" alt="library" />
        <WorkImage src="/images/Library/2.jpg" alt="library" />
        <WorkImage src="/images/Library/3.jpg" alt="library" />
        <WorkImage src="/images/Library/4.jpg" alt="library" />
      </SimpleGrid>
      <P>
        Whenever a special day comes, we usually holds an event. This is for the
        Lunar New Year festival:
      </P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/5.jpg" alt="library" />
        <WorkImage src="/images/Library/6.jpg" alt="library" />
        <WorkImage src="/images/Library/7.jpg" alt="library" />
        <WorkImage src="/images/Library/8.jpg" alt="library" />
      </SimpleGrid>
      <P>
        Here are some other events that we have held. One was for Vietnam Book
        and Reading Culture Day, one was "Art industry for art lovers" and one
        was when we were visting the child at Tu Hanh shelter.
      </P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/10.jpg" alt="library" />
        <WorkImage src="/images/Library/11.jpg" alt="library" />
        <WorkImage src="/images/Library/12.jpg" alt="library" />
        <WorkImage src="/images/Library/13.jpg" alt="library" />
      </SimpleGrid>
      <P>
        These letters are for when students need to feedback on something. We
        are welcome to listen to anything.
      </P>
      <WorkImage src="/images/Library/9.jpg" alt="library" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
