import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Shiba from '../public/images/shiba.png'
import Tree from '../public/images/TEDx/1.png'
import ACC from '../public/images/ACC/1.JPG'
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
                    <WorkGridItem id="tedx" title="TEDx" thumbnail={Tree}>
                        A Non-profit media organization
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="acc" title="Research" thumbnail={ACC}>
                        A research using Machine Learning
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="robotics" title="Lego Prime Club" thumbnail={Tree}>
                        A lego-robotics Club of U.S. Consulate General - Ho Chi Minh City
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="pif" title="Eletrical and Electronics Summer Camp at HCMUT" thumbnail={Tree}>
                        2023 Summer Camp
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works