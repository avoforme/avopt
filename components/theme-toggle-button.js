import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false}>
    <motion.div style={{display: 'inline-block'}}
    key={useColorModeValue('light', 'dark')}
    initial={{y: -20, opacity:0}}
    animate={{y: 0, opacity:1}}
    exit={{y:20, opacity:0}}
    transition={{duration: 0.2}}>
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<SunIcon />, <MoonIcon/>)}
      onClick={toggleColorMode}
    ></IconButton>
    </motion.div>
     </AnimatePresence>
    // <IconButton
    //   variant="outline"
    //   colorScheme="teal"
    //   aria-label="Send email"
    //   icon={useColorMode(<MoonIcon />, <SunIcon/>)}
    // />
  )
}

export default ThemeToggleButton
