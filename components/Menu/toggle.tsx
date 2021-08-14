/* eslint-disable react/no-multi-comp */
import * as React from 'react'
import { motion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props?.isDarkMode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({
  toggle,
  isDarkMode = false,
}: {
  toggle(): void
  isDarkMode?: boolean
}) => (
  <button
    onClick={toggle}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 18">
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isDarkMode={isDarkMode}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

const MobileMenu = ({
  isOpen,
  toggle,
  isDarkMode = false,
}: {
  isOpen: boolean
  isDarkMode: boolean
  toggle(): void
}) => (
  <motion.nav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {/* <motion.div className="background" variants={sidebar} /> */}
    <MenuToggle toggle={() => toggle()} isDarkMode={isDarkMode} />
  </motion.nav>
)

export default MobileMenu
