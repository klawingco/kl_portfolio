import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  Image,
  SimpleGrid,
  Skeleton,
  useColorModeValue,
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
        Dev.to blog
      </Heading>
      <Text color={miniDesc}>
        I write dev related things from time to time!
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {articles.map((item) => (
          <Link
            target="_blank"
            rel="noreferrer"
            key={item.id}
            href={item.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
            // className={styles.article}
          >
            <Stack spacing={3}>
              <Image
                src={item.social_image}
                alt={item.title}
                borderRadius="8px"
                opacity={0.75}
                _groupHover={{ opacity: 1 }}
                transition="all 0.2s ease"
                fallback={<Skeleton height="100%" width="100%" />}
              />

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
