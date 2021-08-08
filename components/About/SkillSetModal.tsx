/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from 'config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} color={miniDesc}>
        {title}
      </Heading>
      <Divider color={miniDesc} marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const backendCols = splitSkills(Skills.backend)
  const frontendCols = splitSkills(Skills.frontend)
  const cicdCols = splitSkills(Skills.cicd)
  const dataBaseCols = splitSkills(Skills.database)
  const uiFrameWorkCols = splitSkills(Skills['ui frameworks'])
  const productivityCols = splitSkills(Skills['productivity boost'])
  const mobileCols = splitSkills(Skills.mobile)
  const gameCols = splitSkills(Skills.games)
  const desktopCols = splitSkills(Skills.desktop)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Backend centric" columns={backendCols} />
          <SkillList title="Frontend centric" columns={frontendCols} />
          <SkillList title="CICD centric" columns={cicdCols} />
          <SkillList
            title="Database and Streams centric"
            columns={dataBaseCols}
          />
          <SkillList title="Ui Frameworks centric" columns={uiFrameWorkCols} />
          <SkillList
            title="Productivity boost centric"
            columns={productivityCols}
          />
          <SkillList
            title="Productivity boost centric"
            columns={productivityCols}
          />
          <SkillList title="Mobile Development centric" columns={mobileCols} />
          <SkillList title="Game Development centric" columns={gameCols} />
          <SkillList title="Desktop App centric" columns={desktopCols} />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
