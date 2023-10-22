import { Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid, } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Library">
    <Container>
      <Title>
        Library <Badge>2023</Badge>
      </Title>
      <P>
       
      </P>
      <P>
        
      </P>

      <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/Library/1.jpg" alt="library" />
      <WorkImage src="/images/Library/2.jpg" alt="library" />
      <WorkImage src="/images/Library/3.jpg" alt="library" />
      <WorkImage src="/images/Library/4.jpg" alt="library" />

      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/Library/5.jpg" alt="library" />
      <WorkImage src="/images/Library/6.jpg" alt="library" />
      <WorkImage src="/images/Library/7.jpg" alt="library" />
      <WorkImage src="/images/Library/8.jpg" alt="library" />

      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/Library/9.jpg" alt="library" />
      <WorkImage src="/images/Library/10.jpg" alt="library" />
      <WorkImage src="/images/Library/11.jpg" alt="library" />
      <WorkImage src="/images/Library/12.jpg" alt="library" />
      <WorkImage src="/images/Library/13.jpg" alt="library" />
      </SimpleGrid>
     
      
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
