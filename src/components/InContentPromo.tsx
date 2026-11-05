import { Link } from 'react-router-dom'

type Props = {
  icon: string
  titleLine: string
  titleAccent: string
  body: string
  cta: { label: string; to: string }
  image: string
}

export default function InContentPromo({
  icon,
  titleLine,
  titleAccent,
  body,
  cta,
  image,
}: Props) {
  return (
    <section className="in-content-promo reveal">
      <div className="grid-container">
        <div className="in-content-promo--content">
          <div className="primary-content">
            <div className="in-content-promo__background">
              <img src={image} alt="" />
            </div>
            <div className="primary-content__text reveal-child">
              <h3 className="heading">
                <span>{titleLine}</span>
                <br />
                <span className="heading__accent heading__accent--lime">{titleAccent}</span>
              </h3>
            </div>
          </div>
          <div className="secondary-content secondary-content--leaf reveal-child reveal-child--delay">
            <div className="content">
              <div className="top-icon">
                <img className="top-icon__image" src={icon} alt="" width={80} height={65} />
              </div>
              <div className="text">
                <p>{body}</p>
              </div>
              <Link to={cta.to} className="button button--arrow-right">
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
