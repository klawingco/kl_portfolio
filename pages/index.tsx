import { Grid, GridItem, Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import About from 'components/About'

const Portfolio = (): JSX.Element => (
  <>
    <Head>
      <title>KL Lawingco</title>
      <meta
        name="description"
        content="My personal solace place on web-earth."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        padding="14"
        rowSpan={2}
        colSpan={2}
        display="flex"
        alignContent="center"
        alignItems="center"
        as="aside"
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" rowSpan={2} colSpan={3} overflowY="scroll">
        <Menu />
        <Flex>
          <Box>
            <About />
            {/* <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASDasdasd
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD
            </Heading>
            <Heading
              as="h4"
              size="2xl"
              paddingRight="20"
              textTransform="uppercase"
            >
              ASDASD222
            </Heading> */}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  </>
)

export default Portfolio
