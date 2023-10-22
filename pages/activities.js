import {
  Container,
  Heading,
  SimpleGrid,
  Button,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import TEDtapthe from '../public/images/TEDx/1_2.png'
import phililipine from '../public/images/ACC/me.jpg'
import LegoPrime from '../public/images/Robotics/1.png'
import summer from '../public/images/PIF/1.jpg'
import Cauhan from '../public/images/Cauhan/1.jpg'
import web from '../public/images/TeacherDay/thumb.png'
import librarypic from '../public/images/Library/3.jpg'

import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} m={4}>
          Activities
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="library"
              title="Library"
              thumbnail={librarypic}
            >
              VNU-High School for the Gifted Library Student Collaborators -
              Community Organization
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="tedx" title="TEDx" thumbnail={TEDtapthe}>
              A Non-profit media organization
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="acc" title="Research" thumbnail={phililipine}>
              A research using Machine Learning
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="robotics"
              title="Lego Prime Club"
              thumbnail={LegoPrime}
            >
              A lego-robotics Club of U.S. Consulate General - HCMC
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="pif"
              title="Eletrical and Electronics Summer Camp at HCMUT"
              thumbnail={summer}
            >
              2023 Summer Camp
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="cauhan"
              title="Cầu Hàn Charity School"
              thumbnail={Cauhan}
            >
            Teaching program
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="teacherday"
              title="National Teacher Day's Website"
              thumbnail={web}
            >
              A platform for students of VNU-High school for the Gifted to send
              letters to teachers
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

// const Works = () => {
//   return (
//     <Layout>
//       <Container>
//         <Heading as="h3" fontSize={20} mb={4}>
//           Works
//         </Heading>

//         <SimpleGrid column={[1, 1, 2]} gap={6}>

//           <Section>

//           </Section>
//           <Section>

//           </Section>
//           <Section>

//           </Section>
//           <Section>

//           </Section>
//           <Button
//             colorScheme="teal"
//             _hover={{

//               boxShadow: 'outline'
//             }}
//           >
//             Hover me
//           </Button>

//         </SimpleGrid>
//       </Container>
//     </Layout>
//   )
// }

// const Works = () => (
//   <Layout title="Works">
//     <Container>
//       <Heading as="h3" fontSize={20} mb={4}>
//         Works
//       </Heading>

//       <SimpleGrid columns={[1, 1, 2]} gap={6}>

//         <Section>
//           <WorkGridItem id="tedx" title="TEDx" thumbnail={TEDtapthe}>
//             A Non-profit media organization
//           </WorkGridItem>
//         </Section>

//         <Section>
//           <WorkGridItem id="acc" title="Research" thumbnail={phililipine}>
//             A research using Machine Learning
//           </WorkGridItem>
//         </Section>

//         <Section delay={0.1}>
//           <WorkGridItem
//             id="robotics"
//             title="Lego Prime Club"
//             thumbnail={LegoPrime}
//           >
//             A lego-robotics Club of U.S. Consulate General - Ho Chi Minh City
//           </WorkGridItem>
//         </Section>

//         <Section delay={0.1}>
//           <WorkGridItem
//             id="pif"
//             title="Eletrical and Electronics Summer Camp at HCMUT"
//             thumbnail={summer}
//           >
//             2023 Summer Camp
//           </WorkGridItem>
//         </Section>

//       </SimpleGrid>

//       <Section delay={0.2}>
//         <Divider my={6} />

//         <Heading as="h3" fontSize={20} mb={4}>
//           Collaborations
//         </Heading>
//       </Section>

//       <SimpleGrid columns={[1, 1, 2]} gap={6}>

//         <Section delay={0.3}>
//           <WorkGridItem id="artpill" title="Artpill" thumbnail={Artpill}>
//             2023
//           </WorkGridItem>
//         </Section>

//         <Section delay={0.3}>
//           <WorkGridItem
//             id="teacherday"
//             title="National Teacher Day's Website"
//             thumbnail={web}
//           >
//             A platform for students of VNU-High school for the Gifted to send
//             letters to teachers
//           </WorkGridItem>
//         </Section>

//         <Section delay={0.3}></Section>

//       </SimpleGrid>
//     </Container>
//   </Layout>
// )

export default Works
