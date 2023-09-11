import styles from './page.module.css'
import Header from '@/Components/footer/page'
import Footer from '@/Components/footer/page' 

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='wrapper'>
        <Header />
        <section className='banner-services'>
          <div className='banner'>
            
          </div>
          <div className='services'>
            
          </div>
        </section>
        <Footer />
      </div>
    </main>
  )
}
