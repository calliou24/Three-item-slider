
import aboutDark from './../../assets/images/image-about-dark.jpg'
import aboutLight from './../../assets/images/image-about-light.jpg'

import styles from './footer.module.css'
function Footer() {
  return(
    <footer className={styles.footer}>
        <div className={styles.cont01}>
            <img className={styles.img} src={aboutDark} alt='about dark'></img>
        </div>
        <div className={styles.cont02}>
            <h2 className={styles.title}>ABUOT OUR FURNITURE</h2>
            <p className={styles.content}>
                Our multifunctional collection blends desing and functionto suit your individual 
                taste. Make each room unique. or picl a cohesive theme that best  express your
                interest and what inspires you. Find the furniture pieces you need. from 
                traditional to contemporary styles or anything in between. Product specialists
                are available to help you create your dream space.
            </p>
        </div>
        <div className={styles.cont03}>
            <img className={styles.img} src={aboutLight} alt='about light'></img>
        </div>      
    </footer>
  )
}

export default Footer