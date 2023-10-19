import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import TEDtapthe from '../public/images/TEDx/1.png'
import phililipine from '../public/images/ACC/me.jpg'
import LegoPrime from '../public/images/Robotics/1.png'
import summer from '../public/images/PIF/1.jpg'
import Artpill from '../public/images/Artpill/1.jpg'
import web from '../public/images/TeacherDay/webui.jpg'
import meomeo from '../public/images/MEOStudio/1.png'



import Layout from "../components/layouts/article";
const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
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
                    <WorkGridItem id="robotics" title="Lego Prime Club" thumbnail={LegoPrime}>
                        A lego-robotics Club of U.S. Consulate General - Ho Chi Minh City
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="pif" title="Eletrical and Electronics Summer Camp at HCMUT" thumbnail={summer}>
                        2023 Summer Camp
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="artpill" title="Artpill" thumbnail={Artpill}>
                        2023
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="teacherday" title="National Teacher Day's Website" thumbnail={web}>
                        A platform for students of VNU-High school for the Gifted to send letters to teachers
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="meostudio" title="Garden of Plumeria" thumbnail={meomeo}>
                        A story website
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works