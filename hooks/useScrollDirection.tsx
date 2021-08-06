import { useEffect, useState } from 'react'

export enum ScrollDirection {
  Initial,
  Down,
  Up,
}

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.Initial)

  useEffect(() => {
    const container = document.querySelector('main')
    const threshold = 0
    let lastScrollY = container?.scrollTop || 0

    let ticking = false

    const updateScrollDir = () => {
      const scrollY = container?.scrollTop || 0
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      const currentScrollDirection =
        scrollY > lastScrollY ? ScrollDirection.Down : ScrollDirection.Up

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

    container?.addEventListener('scroll', onScroll)

    return () => container?.removeEventListener('scroll', onScroll)
  }, [scrollDir])
  return scrollDir
}

export default useScrollDirection
