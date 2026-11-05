type Props = {
  title: string
  titleLine2?: string
  body: string
  image: string
  imageAlt?: string
}

export default function TextAndMedia({
  title,
  titleLine2,
  body,
  image,
  imageAlt = '',
}: Props) {
  return (
    <section className="text-and-media reduced-height">
      <div className="text-and-media__background">
        <picture className="picture">
          <img src={image} alt={imageAlt} width={1920} height={720} />
        </picture>
      </div>
      <div className="text-and-media__secondary-background" aria-hidden />
      <div className="container-wrapper">
        <div className="text-and-media__content">
          <div className="primary-content">
            <h1 className="heading">
              {title}
              {titleLine2 ? (
                <>
                  <br />
                  {titleLine2}
                </>
              ) : null}
            </h1>
          </div>
          <div className="secondary-content">
            <div className="content">
              <div className="text">
                <p>{body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
