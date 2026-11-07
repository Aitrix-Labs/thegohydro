import { Link } from 'react-router-dom'
import { asset } from '../asset'

export type LinkCard = {
  title: string
  to: string
  image?: string
}

type Props = {
  title: string
  cards: LinkCard[]
}

export default function LinkCards({ title, cards }: Props) {
  const rows: LinkCard[][] = []
  for (let i = 0; i < cards.length; i += 4) {
    rows.push(cards.slice(i, i + 4))
  }

  return (
    <section className="quick-links reveal">
      <div className="grid-container">
        <div className="quick-links__content reveal-child">
          <div className="primary-content">
            <div className="content">
              <h2 className="heading">{title}</h2>
            </div>
          </div>
        </div>
        <div className="quick-links__navigation reveal-child reveal-child--delay">
          <table className="navigation-table">
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((card) => (
                    <td key={card.title}>
                      <Link to={card.to} className="cell-content">
                        <span>{card.title}</span>
                        <img
                          src={asset('icons/arrow-down-small.svg')}
                          alt=""
                          width={14}
                          height={13}
                        />
                      </Link>
                    </td>
                  ))}
                  {Array.from({ length: 4 - row.length }).map((_, i) => (
                    <td key={`empty-${i}`} className="empty-cell" aria-hidden />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
