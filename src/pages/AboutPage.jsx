import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import About from '../components/About.jsx'
import bannerImage from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'

function AboutPage() {
  return (
    <>
      <Header />
      <Banner text="" src={bannerImage} />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
