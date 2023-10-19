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
          TEDx <Badge>2023</Badge>
        </Title>
        <P>
        In May 2023, the first 𝐓𝐄𝐃𝐱𝐘𝐨𝐮𝐭𝐡@𝐏𝐓𝐍𝐊 event was staged by a group of VNU-HCM High School for the Gifted students, in the spirit of bringing a TED-like experience to students and TED enthusiasts in Ho Chi Minh City
        </P>
        <P>
        
  
        </P>
        
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/MEOStudio/1.png" alt="meo" />
          <WorkImage src="/images/MEOStudio/2.png" alt="meo" />
  
        </SimpleGrid>
        <WorkImage src="/images/MEOStudio/3.png" alt="meo" />
        <WorkImage src="/images/MEOStudio/4.png" alt="meo" />
        <WorkImage src="/images/MEOStudio/5.png" alt="meo" />
        <WorkImage src="/images/MEOStudio/6.png" alt="meo" />

  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'