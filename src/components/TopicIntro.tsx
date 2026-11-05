type Props = {
  title: string
  lead?: string
  paragraphs: string[]
}

export default function TopicIntro({ title, lead, paragraphs }: Props) {
  return (
    <section className="list-text list-text--white reveal">
      <div className="grid-container grid-container--small">
        <div className="list-text__wrapper reveal-child">
          <div className="list-text__title-column">
            <h5 className="heading">{title}</h5>
          </div>
          <div className="list-text__content-column">
            {lead ? <div className="content-title">{lead}</div> : null}
            {paragraphs.length > 0 ? (
              <div className="content-text">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
