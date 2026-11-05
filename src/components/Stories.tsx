import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { stories } from '../data/content'

export default function Stories() {
  const railRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(stories.length - 1, next))
    setActive(clamped)
    const el = railRef.current
    const slide = el?.children[clamped] as HTMLElement | undefined
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <section className="feature-content-carousel feature-content-carousel--sand reveal">
      <div className="grid-container feature-content-carousel__grid">
        <div className="feature-content-carousel__header">
          <h2 className="feature-content-carousel__title">
            <span>Latest </span>
            <span className="heading__accent">stories</span>
          </h2>
          <div className="feature-content-carousel__navigation">
            <button
              type="button"
              className="feature-content-carousel__nav-button feature-content-carousel__nav-prev"
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M1.667 10H17.5M9.583 17.917L17.5 10L9.583 2.083"
                  stroke="#007D81"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="button-separator" />
            <button
              type="button"
              className="feature-content-carousel__nav-button feature-content-carousel__nav-next"
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
              disabled={active >= stories.length - 1}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M1.667 10H17.5M9.583 17.917L17.5 10L9.583 2.083"
                  stroke="#007D81"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="feature-content-carousel__swiper" ref={railRef}>
          {stories.map((story, index) => (
            <article
              key={story.title}
              className={`feature-content-carousel__slide${
                index === active ? ' is-active' : ''
              }${index === active + 1 ? ' is-next' : ''}`}
            >
              <Link to="/stories" className="feature-content-carousel__card">
                <div className="feature-content-carousel__image-wrapper">
                  <img src={story.image} alt="" loading="lazy" />
                </div>
                <div className="feature-content-carousel__content">
                  <h3 className="feature-content-carousel__card-title">{story.title}</h3>
                  <div className="feature-content-carousel__meta">
                    <span className="feature-content-carousel__category">{story.category}</span>
                    <span className="feature-content-carousel__icon-droplet" aria-hidden>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                        <path
                          d="M5 1C5 1 1 5.2 1 8.2a4 4 0 0 0 8 0C9 5.2 5 1 5 1Z"
                          fill="#007D81"
                        />
                      </svg>
                    </span>
                    <span className="feature-content-carousel__date">{story.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
