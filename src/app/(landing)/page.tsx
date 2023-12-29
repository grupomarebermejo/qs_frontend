import Image from 'next/image'
// import styles from './page.module.css'
import styles from '@/styles/LandingPage.module.scss';

export default function Home() {
  return (
    <main className={styles['landing-page']}>
      <div className={styles.nav}>
        <div className={styles['nav-desktop']}>
          <div className="logo">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="Logo" width={80} height={80} />
          </div>
          <div className={styles["links"]}>
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Contactanos</a>
            <a href="#">Ubicación</a>
          </div>
        </div>
        <div className={styles['nav-mobile']}>

        </div>
      </div>
      <div className={styles['banner']}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="Banner" className={styles['img']} width={100} height={100}/>
      </div>

      <div className={styles['desciption']}>
      
      </div>
      <div className={styles['companys']}>
      </div>
      <div className={styles['footer']}>
      </div>     
    </main>
  )
}
