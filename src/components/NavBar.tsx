import { navLinks } from '../../constants.ts'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: 'nav',
      start: 'bottom top'
    })

    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut'
      }
    )
  })

  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/mojito-cocktails/images/logo.png' alt='Logo' />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link, index) => (
            <li key={`${link.id}-${index}`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
