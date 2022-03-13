
import { useState, useEffect } from 'react'
import styles from './nav.module.css'
import logo from '../../assets/images/logo.svg'


function Nav() {

  const [open, setOpen] = useState(false)
  
  const lockBody = () =>  {
    const body = document.body
    open ? body.classList.add('bodyLocked') : body.classList.remove('bodyLocked')
    
  }

  useEffect(()=> {
    lockBody()
  },[open])

  return (
    <nav className={styles.nav}>
        <div className={styles.imageCont}>
            <img src={logo} alt='logo' className={styles.image}></img>
        </div>
        <div id={open ? styles.open : undefined} className={styles.list}>
          <ul >
            <li className={styles.item}>home</li>
            <li className={styles.item}>shop</li>
            <li className={styles.item}>about</li>
            <li className={styles.item}>contact</li>
          </ul>
        </div>
        
        <div onClick={() => setOpen(!open)} className={styles.hamburger}>
          <div className={open ? styles.bar1 : styles.barClose}></div>
          <div className={open ? styles.bar2 : styles.barClose}></div>
          <div className={open ? styles.bar3 : styles.barClose}></div>
       </div>
       <div className={open ? styles.modalShadow : undefined }>
       </div>
    </nav>
  )
}

export default Nav