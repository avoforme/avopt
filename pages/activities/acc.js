import {
    Container,
    Badge,
    
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
 
  import { Title, WorkImage} from '../../components/activity'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Research">
      <Container>
        <Title>
          Research <Badge>2023</Badge>
        </Title>
        <P>
        MACHINE LEARNING IN QUANTIFYING CORONARY BLOOD FLOW
        </P>
        <P>
        At the start of my 11th grade summer, I took some AI courses online. They were basic courses but they taught me a lot about Computer Vision and Machine Learning. Wanting to apply these knowledge to life, I became a interdisciplinary research assisstant.
        </P>
        <P>My main job was helping in building the model to calculate the Aterial Phase- the time it takes for blood to finish running through one right coronary artery. To sum it up, the first thing the model needs to recognize is the Catether guide.</P>
        <WorkImage src="/images/ACC/4.png" alt="accpic" />
        <WorkImage src="/images/ACC/5.png" alt="accpic" />
        <WorkImage src="/images/ACC/6.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/me.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/2.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/3.jpg" alt="accpic" />
        

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'