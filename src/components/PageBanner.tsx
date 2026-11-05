type PageBannerProps = {
  title: string
  accent?: string
  body: string
  image: string
}

export default function PageBanner({ title, accent, body, image }: PageBannerProps) {
  return (
    <section className="page-banner">
      <img src={image} alt="" className="page-banner__bg" />
      <div className="page-banner__shade" aria-hidden />
      <div className="page-banner__content">
        <p className="page-banner__brand">GoHydro</p>
        <h1>
          {title} {accent ? <span>{accent}</span> : null}
        </h1>
        <p>{body}</p>
      </div>
    </section>
  )
}
