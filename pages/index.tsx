/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from 'styles/Home.module.css'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import About from 'components/Sections/About'
import Experience from 'components/Sections/Experience'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
// These are on bottom sections so no need to render it instantly
const FeaturedWorks = dynamic(() => import('components/Sections/FeaturedWorks'))

const Portfolio = (): JSX.Element => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })

  return (
    <>
      <Head>
        <title>KL Lawingco | Software Engineer</title>
        <meta
          name="description"
          content="My personal solace place on web-earth."
        />
        <meta property="og:title" content="KL Lawingco | Software Engineer" />
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
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          className={styles.mainContent}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box
                className="contentRow"
                minH={{ lg: '100vh' }}
                display="flex"
                alignItems="center"
                justifyContent={{
                  base: 'unset',
                  md: 'flex-start',
                  lg: 'flex-start',
                  xl: 'center',
                }}
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingX={0}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <Experience />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 0, lg: 20, xl: 24 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <FeaturedWorks />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default Portfolio
