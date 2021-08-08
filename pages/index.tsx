import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import Head from 'next/head'

import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import About from 'components/About'
import Avatar from 'components/Avatar'

const Portfolio = (): JSX.Element => {
  const variant = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({ base: '5', md: '0', lg: '0' })
  const paddTop = useBreakpointValue({ base: '20', sm: '0' })

  return (
    <>
      <Head>
        <title>KL Lawingco</title>
        <meta
          name="description"
          content="My personal solace place on web-earth."
        />
        <meta property="og:title" content="KL Lawingco" />
        <meta property="og:site_name" content="Marc Jhon Lawingco" />
        <meta property="og:url" content="https://kllawingco.netlify.app/" />
        <meta
          property="og:description"
          content="Ohh you found me?. Howdy! I am Marc Jhon Lawingco. Or you could call me KL. That works too . . . I am a Software Engineer"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://kllawingco.netlify.app/KL_avatar.png"
        ></meta>
      </Head>
      <Menu />
      <Grid
        h="100vh"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
        templateRows={{
          sm: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={variant}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={2}
          display="flex"
          alignContent="center"
          alignItems="center"
          as="aside"
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 2, sm: 2, md: 1, lg: 3 }}
          overflowY={{ base: 'unset', lg: 'scroll' }}
        >
          <Stack w="100" spacing={24}>
            <Box
              minH={{ lg: '100vh' }}
              display="flex"
              alignItems="center"
              flexDirection={{
                base: 'column-reverse',
                lg: 'row',
              }}
            >
              <About />
              <Avatar />
            </Box>
            <Box>
              <About />
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default Portfolio
