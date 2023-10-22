import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TEDxYouth@PTNK">
    <Container>
      <Title>
        TEDx <Badge>2023</Badge>
      </Title>
      <P>
      In May 2023, the first TEDxYouth@PTNK event was staged by a group of VNU-HCM High School for the Gifted students, in the spirit of bringing a TED-like experience to students and TED enthusiasts in Ho Chi Minh City
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Youtube</Meta>
          <Link href="https://youtube.com/playlist?list=PLrMddyoxkyq1pxyPOaPICNkLD656ul4U7">
          Crystal Unclear @TEDx PTNK Youth Video playlist {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/TEDx/6.png" alt="tedxpic" />
        <WorkImage src="/images/TEDx/5.png" alt="tedxpic" />

      </SimpleGrid>
      <WorkImage src="/images/TEDx/1_2.png" alt="tedxpic" />
      <WorkImage src="/images/TEDx/3.png" alt="tedxpic" />
      <WorkImage src="/images/TEDx/2.png" alt="tedxpic" />
      <WorkImage src="/images/TEDx/4.png" alt="tedxpic" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'