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

const Work = () => (
  <Layout title="TEDxYouth@PTNK">
    <Container>
      <Title>
        Garden of Plumeria <Badge>2021-2022</Badge>
      </Title>
      <P>
        After the success of Teach Day's Website, an alum invited me to one of
        his Website project. There I became one of the developers. My main job
        was designing the UI for the webpage on Figma. At the same time, I was
        given the task of teaching basic HTML, CSS, and Javascript to other 5
        members.
      </P>
      <P>This is the material I prepared for the classes:</P>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/MEOStudio/1.png" alt="meo" />
        <WorkImage src="/images/MEOStudio/2.png" alt="meo" />
      </SimpleGrid>

      <P>
        The designs I did on Figma:
      </P>
      <WorkImage src="/images/MEOStudio/3.png" alt="meo" />
      <WorkImage src="/images/MEOStudio/4.png" alt="meo" />
      <WorkImage src="/images/MEOStudio/5.png" alt="meo" />
      <WorkImage src="/images/MEOStudio/6.png" alt="meo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
