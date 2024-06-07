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
        Library <Badge>2021-Present</Badge>
      </Title>
      <P>
        For the past three years, I've been an active member of VNU-HCM
        Highschool for the Gifted's library. I joined right when it first
        opened, and it was no small feat keeping things running
        smoothly with just a handful of us. We tackled everything from
        cataloging books to organizing events, learning as we went.
      </P>
      <P>
        Through this experience, I even had the chance to collaborate with school officials to pull off some
        awesome events, like that epic book fair with guest authors! Being
        part of this community has shaped me in ways I'll never forget.
      </P>
      <P> A normal day at the library:</P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/1.jpg" alt="library" />
        <WorkImage src="/images/Library/2.jpg" alt="library" />
        <WorkImage src="/images/Library/3.jpg" alt="library" />
        <WorkImage src="/images/Library/4.jpg" alt="library" />
      </SimpleGrid>
      <P>
        For each occasion, we held an event. This one was for Lunar New Year
        festival.
      </P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/5.jpg" alt="library" />
        <WorkImage src="/images/Library/6.jpg" alt="library" />
        <WorkImage src="/images/Library/7.jpg" alt="library" />
        <WorkImage src="/images/Library/8.jpg" alt="library" />
      </SimpleGrid>
      <P>
        Here are some other activities that we have held. One was for “Vietnam
        Book and Reading Culture Day”, and one was for "Art Industry for art
        lovers".
      </P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/10.jpg" alt="library" />
        <WorkImage src="/images/Library/11.jpg" alt="library" />
        <WorkImage src="/images/Library/12.jpg" alt="library" />
        <WorkImage src="/images/Library/13.jpg" alt="library" />
      </SimpleGrid>

      <WorkImage src="/images/Library/9.jpg" alt="library" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
