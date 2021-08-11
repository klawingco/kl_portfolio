import { useEffect, useState } from 'react'

export enum ScrollDirection {
  Initial,
  Down,
  Up,
}

const AVATAR_PADD_OFFSET = 100

const useScrollDirection = (isMobileOnly = false, isMobile = false) => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.Initial)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const container = document.querySelector(isMobileOnly ? 'body' : 'main')
    const avatarContainer = document.querySelector('#klAvatar') as HTMLElement
    const avatarScrollY =
      avatarContainer?.offsetTop +
      avatarContainer.clientHeight -
      AVATAR_PADD_OFFSET
    const threshold = 10
    let lastScrollY = container?.scrollTop || 0

    let ticking = false

    const updateScrollDir = () => {
      const scrollY = container?.scrollTop || 0
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      const isBelowAvatar = !isMobileOnly ? scrollY > avatarScrollY : true
      const currentScrollDirection =
        scrollY > lastScrollY && isBelowAvatar
          ? ScrollDirection.Down
          : ScrollDirection.Up

      if (currentScrollDirection !== scrollDir) {
        setScrollDir(
          scrollY > lastScrollY ? ScrollDirection.Down : ScrollDirection.Up
        )
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    if ((isMobileOnly && isMobile) || !isMobile) {
      container?.addEventListener('scroll', onScroll)
    }

    // Fallback for initial load
    if (!isMobile && !isInitialized && lastScrollY > avatarScrollY) {
      setScrollDir(ScrollDirection.Down)
      setIsInitialized(true)
    }

    return () => {
      container?.removeEventListener('scroll', onScroll)
    }
  }, [scrollDir, isMobileOnly, isMobile, isInitialized])
  return scrollDir
}

export default useScrollDirection
