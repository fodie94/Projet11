import '../styles/Banner.css'

export default function Banner({ text, src }) {
  let bannerText = false
  if (text !== '') {
    bannerText = true
  }

  return (
    <section className="banner">
      <img alt="" src={src} className="banner-image" />
      {{ bannerText } && <h2 className="banner-text text-shadow">{text}</h2>}
    </section>
  )
}
