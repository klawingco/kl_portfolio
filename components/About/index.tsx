import { memo } from 'react'
import dynamic from 'next/dynamic'
import { useDisclosure } from '@chakra-ui/react'
import Detail from './Detail'

const SkillSetModal = dynamic(() => import('./SkillSetModal'))

const AboutSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Detail onOpen={onOpen} />
      <SkillSetModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default memo(AboutSection)
