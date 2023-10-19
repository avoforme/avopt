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
          Robotics Club <Badge>2023</Badge>
        </Title>
        <P>
        
        </P>
        <P>
        
  
        </P>
        
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/Robotics/1.png" alt="robot" />
          <WorkImage src="/images/Robotics/2.png" alt="robot" />
  
        </SimpleGrid>
        <WorkImage src="/images/Robotics/3.png" alt="robot" />
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'