import { Link } from 'react-router-dom'

type Props = {
  icon?: string
  titleLine: string
  titleAccent?: string
  body: string
  cta?: { label: string; to: string }
  image: string
  imagePosition?: 'left' | 'right'
  landscape?: boolean
}

export default function BannerImageAndText({
  icon,
  titleLine,
  titleAccent,
  body,
  cta,
  image,
  imagePosition = 'right',
  landscape = false,
}: Props) {
  return (
    <section className="banner-image-and-text banner-image-and-text--white reveal">
      <div className="grid-container grid-container--small">
        <div
          className={`container-wrapper container-wrapper--image-${imagePosition} ${
            landscape
              ? 'container-wrapper--image-landscape'
              : 'container-wrapper--image-portrait'
          }`}
        >
          <div className="banner-image-and-text__text-wrapper reveal-child">
            {icon ? (
              <div className="top-icon">
                <img className="top-icon__image" src={icon} alt="" width={80} height={80} />
              </div>
            ) : null}
            <h2 className="heading">
              <span>{titleLine}</span>
              {titleAccent ? (
                <>
                  <br />
                  <span className="heading__accent">{titleAccent}</span>
                </>
              ) : null}
            </h2>
            <div className="description">
              <p>{body}</p>
            </div>
            {cta ? (
              <Link to={cta.to} className="button button--arrow-right">
                {cta.label}
              </Link>
            ) : null}
          </div>
          <div className="banner-image-and-text__image-wrapper reveal-child reveal-child--delay">
            <div className="picture">
              <img src={image} alt="" width={480} height={640} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
