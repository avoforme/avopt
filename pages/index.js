import {
 Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import { Wrap, WrapItem, Tooltip } from '@chakra-ui/react'

import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSelection, BioYear } from '../components/bio'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          "haribo is love, haribo is life"
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Thanh
            </Heading>
            <p> Learner / Reader / Developer / Editor </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="150px"
              h="150px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/self-pic4.jpg"
                alt="Profile image"
                borderRadius="full"
                width="150"
                height="150"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Hồ Phương Thanh, a dedicated English gifted student at VNU High School for
            the Gifted in Ho Chi Minh City, possesses a strong determination to
            expand her knowledge, embrace fresh experiences, and connect with
            individuals from diverse backgrounds.{' '}
           
          </Paragraph>
          <Wrap margin={5} spacing="30px" justify="center">
            <Box align="center" my={4}>
              <NextLink href="/activities">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My activities
                </Button>
              </NextLink>
            </Box>
            <Box align="center" my={4}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                onClick={onOpen}
              >
                Open Resume
              </Button>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                width="100%"
                height="100%"
                size="full"
              >
                <ModalOverlay />
                <ModalContent width="200%" height="100%">
                  <ModalHeader>Resume</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody width="100%" height="100%">
                    THANH HO PHUONG's resume
                    <iframe width="100%" height="100%" src="/ThanhHoPhuongResume_final.pdf"></iframe>
                  </ModalBody>

                  <ModalFooter margin={5}>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Wrap>
        </Section>

        <Section delay={0.2} align="center">
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSelection>
            <BioYear>2006</BioYear>
            Born in Vietnam.
          </BioSelection>
          <BioSelection>
            <BioYear>2021</BioYear>
            Started high school at the VNU-HCM High school for the Gifted
          </BioSelection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <BioSelection>
            <BioYear>Editor</BioYear>
            Adobe Premiere, Lightworks, After Effects
          </BioSelection>
          <BioSelection>
            <BioYear>Programmer</BioYear>
            Website Development, Computer Vision
          </BioSelection>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            Random facts
          </Heading>
          <Section>
            <Wrap spacing={6}>
              <WrapItem>
                <Tooltip>
                  <Button>Avopt is my nickname</Button>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Tooltip label="Especially fiction" defaultIsOpen>
                  <Button>I love reading</Button>
                </Tooltip>
              </WrapItem>

              <WrapItem>
                <Tooltip>
                  <Button>I love eating Haribo</Button>
                </Tooltip>
              </WrapItem>

              <WrapItem>
                <Tooltip>
                  <Button>Pascal is my first programming language</Button>
                </Tooltip>
              </WrapItem>

              <WrapItem>
                <Tooltip>
                  <Button>I grew up with Minecraft</Button>
                </Tooltip>
              </WrapItem>
            </Wrap>
          </Section>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/avoforme" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                  >
                  @avoforme
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
