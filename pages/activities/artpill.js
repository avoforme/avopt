import {
    Container,
    Badge,
    
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage} from '../../components/activity'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Artpill">
      <Container>
        <Title>
          Volunteer <Badge>2023</Badge>
        </Title>
        <P>
        
        </P>
        <P>
        
        </P>
        <WorkImage src="/images/Artpill/1.jpg" alt="walknote" />
        <WorkImage src="/images/Artpill/2.jpg" alt="walknote" />
        <WorkImage src="/images/Artpill/3.jpg" alt="walknote" />
        <WorkImage src="/images/Artpill/4.jpg" alt="walknote" />
        <WorkImage src="/images/Artpill/5.jpg" alt="walknote" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'