import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { fadeInUp } from 'config/animations'

type ISkillSetModal = {
  onOpen(): void
}
const DetailSection = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const currentYear = new Date().getFullYear()
  const codingYears = currentYear - 2011
  const professionalYears = currentYear - 2016

  const MotionStack = motion(Stack)

  return (
    <MotionStack
      initial={fadeInUp.initial}
      variants={fadeInUp}
      animate="animate"
      width={{ base: '100%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={6}
    >
      <Heading
        id="aboutMe"
        size="lg"
        paddingRight="20"
        textTransform="uppercase"
      >
        Places I’ve worked
      </Heading>
      <Text color={miniDesc}>
        Throughout the years, I worked with several companies and honed my
        techniquesin there. These companies will always have a special place in
        my heart.
      </Text>

      <Tabs orientation="vertical" isFitted>
        <TabList width={'30%'}>
          <Tab fontSize="smaller" minH="95px">
            {/* <Image
              src="/worked_at_logos/scg/SCG_400x400.jpg"
              width="68"
            ></Image> */}
            <Image
              src="/worked_at_logos/scg/SCG.png"
              width="68"
              alt="Scentregroup Limited AU"
            ></Image>
          </Tab>
          <Tab fontSize="smaller" minH="95px">
            {' '}
            <Image
              src="/worked_at_logos/ivp/blotocol-logo-white.png"
              width="68"
              alt="Blotocol Philippines"
            ></Image>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={0}>
              <Text as="span" fontSize="lg" fontWeight="bold" color={miniDesc}>
                Software Engineer
              </Text>
              <Text as="span">
                <Link
                  href="https://www.scentregroup.com/"
                  aria-label="scentregroup"
                  rel="noreferrer"
                  target="_blank"
                  color={emphasis}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  #Scentregroup{' '}
                </Link>
                <Text
                  as="span"
                  textTransform="none"
                  fontSize="x-small"
                  color={miniDesc}
                >
                  via Prosource BPO
                </Text>
              </Text>
              <Text fontSize="smaller">2020-Present</Text>
            </Stack>
            <List spacing={3} pt={5}>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Core member of revamping the legacy Partner Portal into a new{' '}
                <b>Westfield Marketing Hub</b> using new tech stacks on frontend
                and backend.
              </ListItem>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Worked on maintaining{' '}
                <Link
                  color={emphasis}
                  aria-label="Westfield"
                  href="https://www.westfield.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Westfield
                </Link>{' '}
                main site.
              </ListItem>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Migrating of existing marketing emails related tools and batches
                into new platform Braze.
              </ListItem>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Hired at early 2020, first big task was helping with selection a
                new marketing vendor that can scale as well as enable us to have
                personalisation, selecting{' '}
                <Link
                  color={emphasis}
                  aria-label="Braze"
                  href="https://www.braze.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Braze
                </Link>{' '}
                as a result
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Stack spacing={0}>
              <Text as="span" fontSize="lg" fontWeight="bold" color={miniDesc}>
                Senior Software Engineer
              </Text>
              <Text as="span">
                <Link
                  href="https://blotocol.com/"
                  aria-label="blotocol"
                  rel="noreferrer"
                  target="_blank"
                  color={emphasis}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  #Blotocol{' '}
                </Link>
                <Text
                  as="span"
                  textTransform="none"
                  fontSize="x-small"
                  color={miniDesc}
                >
                  formerly IVP Global Inc.
                </Text>
              </Text>
              <Text fontSize="smaller">2016-2020</Text>
            </Stack>
            <List spacing={3} pt={5}>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Create highly scalable Japanese e-commerce sites. Most notable
                clients were TV Tokyo, Layla EC etc using .NET Technologies.
              </ListItem>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                In 2019 got promoted as Senior Software Engineer and worked with
                Cryto Exchange, Smart Contracts and other APIs using several
                techs such as NodeJS, .NET Core and React.
              </ListItem>
              <ListItem fontSize="smaller" color={miniDesc}>
                <ListIcon as={RiArrowDropRightLine} color={emphasis} />
                Hired at 2016, Undergone a training first with Japanese
                language. Shortly after, worked with in-house .NET MVC Framework
                called ERS.
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MotionStack>
  )
}

export default memo(DetailSection)
