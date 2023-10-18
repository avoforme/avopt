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
        Crystals are solid materials in which the component atoms are arranged to form a fascinating shape that has straight edges and flat surfaces. Due to their special atomic structures, most crystals allow light to pass through without much scattering which makes them easy to see through. Possessing that characteristic, people usually describe crystals as transparent or ‘𝐜𝐥𝐞𝐚𝐫’.
  
  Along with their ability to reflect light, crystals appear to be such shiny, high-quality, and valuable substances. Since most well-known crystals are transparent and sparkling, we have never regarded crystals as ‘𝐮𝐧𝐜𝐥𝐞𝐚𝐫’, which is the total opposite.
  
  Then can crystals actually be unclear? And, how do crystals get unclear? Get on board with 𝐓𝐄𝐃𝐱𝐘𝐨𝐮𝐭𝐡@𝐏𝐓𝐍𝐊 to find out more.
  
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Instagram, Youtube</span>
          </ListItem>
          <ListItem>
            <Meta>Instagram</Meta>
            <Link href="https://www.instagram.com/tedxyouth.ptnk/">
            tedxyouth.ptnk {' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Youtube</Meta>
            <Link href="https://youtube.com/playlist?list=PLrMddyoxkyq1pxyPOaPICNkLD656ul4U7">
            Crystal Unclear @TEDx PTNK Youth Video playlist {' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/TEDx/6.png" alt="walknote" />
          <WorkImage src="/images/TEDx/5.png" alt="walknote" />
  
        </SimpleGrid>
        <WorkImage src="/images/TEDx/1.png" alt="walknote" />
        <WorkImage src="/images/TEDx/2.png" alt="walknote" />
        <WorkImage src="/images/TEDx/3.png" alt="walknote" />
        <WorkImage src="/images/TEDx/4.png" alt="walknote" />
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'