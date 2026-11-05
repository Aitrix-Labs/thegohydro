import { Link } from 'react-router-dom'

type Props = {
  title: string
  titleAccent?: string
  paragraphs: string[]
  cta?: { label: string; to: string }
  tone?: 'foam' | 'sand' | 'white'
}

export default function ContentSection({
  title,
  titleAccent,
  paragraphs,
  cta,
  tone = 'foam',
}: Props) {
  return (
    <section className={`content-section content-section--${tone} reveal`}>
      <div className="grid-container grid-container--small">
        <div className="content-section__inner reveal-child">
          <h2 className="heading">
            <span>{title}</span>
            {titleAccent ? (
              <>
                {' '}
                <span className="heading__accent">{titleAccent}</span>
              </>
            ) : null}
          </h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {cta ? (
            <Link to={cta.to} className="button button--arrow-right">
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
