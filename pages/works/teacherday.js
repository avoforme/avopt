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
          Teacher Day's Website <Badge>2021</Badge>
        </Title>
        <P>
          When I first learnt Website Development, there was a project recruitment online and I joined without hesitation. Even though I could not code much back then, I was still given a spot in the team. There I met the same-minded people and I learnt a lot more about how a Website project would usually work. 
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