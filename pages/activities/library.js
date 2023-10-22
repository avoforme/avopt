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
        I have been a part of the librarian community for about three years now.
        During this time, I have had the pleasure of witnessing its growth. When
        I started studying at VNU-High School for the Gifted, the library was
        also opened for the first time. Initially, it was tough managing the
        whole system on our own, without any support. However, over the years,
        the library grew, and seeing its progress was like watching a child grow
        up. Today, it receives more than 200 visitors every day, which is quite
        impressive. Even though it was challenging, my friends and I got used to
        it. We even collaborated with school officials to hold school-hosted
        events. Being a part of this community has given me valuable experiences
        and memories that I will cherish forever.
      </P>
      <P> A normal day at the library:</P>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Library/1.jpg" alt="library" />
        <WorkImage src="/images/Library/2.jpg" alt="library" />
        <WorkImage src="/images/Library/3.jpg" alt="library" />
        <WorkImage src="/images/Library/4.jpg" alt="library" />
      </SimpleGrid>
      <P>
        On each occasion, we organize a celebratory event. This one was for
        Lunar New Year festival.
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
        lovers". Every now and then, we visit the child at Tu Hanh shelter.
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
