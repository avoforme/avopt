import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
  
    w="100%"
    textAlign="center"
    colorScheme="teal"
    _hover={{
      textShadow:'1px 1px #9A4444'
    }}
  >
    <LinkBox
      as={NextLink}
      href={`/activities/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
      
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/activities/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail{
        border-radius: 12px;
    } 
    `}
  />
)
