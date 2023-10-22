import {
  Container,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Wrap
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../../components/layouts/article'

import { Title, WorkImage } from '../../components/activity'
import P from '../../components/paragraph'

const Work = () => {

  return (
    <Layout title="Research">
      <Container>
        <Title>
          Research <Badge>2023</Badge>
        </Title>
        <P>MACHINE LEARNING IN QUANTIFYING CORONARY BLOOD FLOW</P>
        <P>
          At the start of my 11th grade summer, I took some AI courses online.
          They were basic courses but they taught me a lot about Computer Vision
          and Machine Learning. Wanting to apply these knowledge to life, I
          became a interdisciplinary research assisstant.
        </P>
        <P>
          My main job was helping in building the model to calculate the Aterial
          Phase - the time it takes for blood to finish running through one right
          coronary artery. 
        </P>
        <WorkImage src="/images/ACC/4.png" alt="accpic" />
        <WorkImage src="/images/ACC/5.png" alt="accpic" />
        <WorkImage src="/images/ACC/6.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/me.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/2.jpg" alt="accpic" />
        <WorkImage src="/images/ACC/3.jpg" alt="accpic" />
        <P>
          Research results:
        </P>
          <Wrap margin={5} spacing="30px" justify="center">
            <Box align="center" my={4}>
              <NextLink href="https://drive.google.com/file/d/1zQjKH5q5VzG5VYqsmCZw5sQ0wqIUMDHB/view?usp=sharing">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  ACC 2023 Reseach Poster
                </Button>
              </NextLink>
            </Box>
            <Box align="center" my={4}>
              <NextLink href="">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  ACC 2023 Abstract
                </Button>
              </NextLink>
            </Box>
            <Box align="center" my={4}>
              <NextLink href="https://drive.google.com/drive/u/0/folders/1tvjWS3z1PYS9Dic-CnC6xJGj_BDRuCMB">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  ACC 2024 Abstract
                </Button>
              </NextLink>
            </Box>
          </Wrap>
        
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
