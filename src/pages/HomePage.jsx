import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import bannerImage from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
import CardGallery from '../components/CardGallery.jsx'
import Footer from '../components/Footer.jsx'

const bannerText = 'Chez vous, partout et ailleurs'

export default function Home() {
  return (
    <>
      <Header />
      <Banner text={bannerText} src={bannerImage} />
      <CardGallery />
      <Footer />
    </>
  )
}
