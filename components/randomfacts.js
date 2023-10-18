import { Wrap, WrapItem, Tooltip } from '@chakra-ui/react'

const randomFacts = () => (
    <Section>
      <Wrap spacing={6}>
        <WrapItem>
          <Tooltip label="I close on click">
            <Button>Close on Click - true(default)</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I don't close on click" closeOnClick={false}>
            <Button>Close on Click - false</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am always open" placement="top" isOpen>
            <Button>Always Open</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am open by default" placement="left" defaultIsOpen>
            <Button>Open on startup</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button>Delay Open - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Closed after 500ms" closeDelay={500}>
            <Button>Delay Close - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
            <Button>Arrow size - 15px</Button>
          </Tooltip>
        </WrapItem>
      </Wrap>
    </Section>
  )


export default randomFacts