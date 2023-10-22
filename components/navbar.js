import { forwardRef } from '@chakra-ui/react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  position
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
// const LinkItem = ({ href, path, children }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
//   return (
//     <NextLink href={href}>
//       <Link
//         p={2}
//         bg={active ? 'glassTeal' : undefined}
//         color={active ? '#202023' : inactiveColor}
//       >
//         {children}
//       </Link>
//     </NextLink>
//   )
// }

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
) )

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        {/* <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'auto' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          Hi
          <NextLink href="/works" path={path}>
            Works
          </NextLink>
          <NextLink href="/posts" path={path}>
            Posts
          </NextLink>
        </Stack> */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Activities
          </LinkItem>
          {/* <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton/>
          <Box ml={2} display={{base: 'inline-block'}}>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options "/>
            <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Activities
                </MenuItem>
                {/* <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="">
                  Uses
                </MenuItem> */}
                <MenuItem
                  as={Link}
                  href=""
                >
                  View Source
                </MenuItem>
            </MenuList>
          </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
