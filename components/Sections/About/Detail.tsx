import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  useColorModeValue,
  Link,
  Tooltip,
  Stack,
} from '@chakra-ui/react'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiDocker,
} from 'react-icons/si'
import { GiCoffeePot, GiDatabase } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}
const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const currentYear = new Date().getFullYear()
  const codingYears = currentYear - 2011
  const professionalYears = currentYear - 2016

  return (
    <Stack width={{ base: '100%', lg: '60%' }} height="100%" spacing={6}>
      <Heading
        id="aboutMe"
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        About me.
      </Heading>
      <Text color={miniDesc}>
        Hi!{' '}
        <Tooltip
          label="Yes. I am one of those people with really weird nickname, you see.."
          aria-label="Why KL?"
          hasArrow
        >
          <Text as="span" color={emphasis}>
            <b>KL</b>
          </Text>
        </Tooltip>{' '}
        here, I started at programming back in 2011, when I got myself into C#
        and PHP using my old laptop. Eversince then I started freelancing
        desktop apps, games and websites for lunch pack pennies. I even have a
        embarrasing anime{' '}
        <Link
          href="https://otakuprogrammer.wordpress.com/"
          target="_blank"
          color={emphasis}
          aria-label="The Otaku Programmer"
          rel="noreferrer"
        >
          wordpress site
        </Link>{' '}
        back then.
      </Text>
      <Text color={miniDesc}>
        Almost {codingYears} years later and {professionalYears} years of it as
        professional work, right now I am working as a <b>Software Engineer</b>{' '}
        focuses on <b>architecture</b>, <b>backend APIs</b>,{' '}
        <Tooltip
          label="Ha!. Or more accurately TECH DEBT"
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" color={emphasis}>
            <b>nitty-gritty business logics</b>
          </Text>
        </Tooltip>{' '}
        and even <b>front end integration</b> stuff now, how time flies!
      </Text>
      <Text color={miniDesc}>
        Here are few main techs that are cup of my{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" color={emphasis} textDecorationLine="line-through">
            tea...
          </Text>
        </Tooltip>{' '}
        err.. no. coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDotNet} color={emphasis} fontSize="2em" />
            C# - .NET.Core
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiDatabase} color={emphasis} fontSize="2em" />
            RDBMS - NoSQL
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
            Graphql
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            color={emphasis}
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
