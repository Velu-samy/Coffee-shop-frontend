import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 👈 This makes it glide!
    })
  }, [pathname])


  return null
}

export default ScrollToTop