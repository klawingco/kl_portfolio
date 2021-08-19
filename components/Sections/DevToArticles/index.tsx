import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Article } from 'types/article'

const DevToArticles = ({ articles }: { articles: Article[] }) => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '73%' }}
      height="100%"
      spacing={6}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Dev.to Articles
      </Heading>
      <Text color={miniDesc}>
        I write dev related things from time to time!
      </Text>
      <SimpleGrid columns={2} spacing={6}>
        {articles.map((item) => (
          <Link
            target="_blank"
            rel="noreferrer"
            key={item.id}
            href={item.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            className={styles.article}
          >
            <Stack spacing={2}>
              <Image
                src={item.social_image}
                alt={item.title}
                borderRadius="8px"
                opacity={0.75}
              />
              <Heading size="md" color={miniDesc} paddingX={2}>
                {item.title}
              </Heading>
              <Text fontSize="smaller" color={miniDesc} paddingX={2}>
                {item.description}
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)
