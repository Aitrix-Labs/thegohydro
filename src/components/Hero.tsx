import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/content'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const slide = heroSlides[index]

  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 9000)
    return () => window.clearInterval(id)
  }, [paused])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [index])

  return (
    <section className="feature-carousel-background">
      <div className="feature-carousel">
        <div className="feature-carousel__swiper">
          {heroSlides.map((item, i) => (
            <div
              key={item.id}
              className={`feature-carousel__slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i !== index}
            >
              <div
                className="feature-carousel__primary-background"
                style={{
                  backgroundImage: `url(${item.media.poster})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="feature-carousel__video">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el
                    }}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.media.poster}
                  >
                    <source src={item.media.src} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="feature-carousel__secondary-background" aria-hidden />
            </div>
          ))}
        </div>

        <div className="feature-carousel__content-wrapper">
          <div className="container-wrapper">
            <div className="feature-carousel--content">
              <div className="primary-content">
                <div className="feature-carousel__content-item is-active">
                  <h1 className="heading">
                    <span>{slide.titleHtml.line}</span>
                    {slide.titleHtml.accent ? (
                      <>
                        <br />
                        <span className="heading__accent"> {slide.titleHtml.accent}</span>
                      </>
                    ) : null}
                  </h1>
                </div>

                <div className="feature-carousel__pagination" role="tablist" aria-label="Slides">
                  {heroSlides.map((item, i) => (
                    <div
                      key={item.id}
                      className={`feature-carousel__pagination-wrapper${
                        i === index ? ' feature-carousel__pagination-item--active' : ''
                      }`}
                    >
                      <button
                        type="button"
                        className="feature-carousel__pagination-button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Go to Slide ${i + 1} of ${heroSlides.length} - ${item.paginationTitle}`}
                        onClick={() => {
                          setPaused(true)
                          setIndex(i)
                        }}
                      >
                        <span className="feature-carousel__pagination-number">
                          {item.number}
                        </span>
                        <span className="feature-carousel__pagination-title">
                          {item.paginationTitle}
                        </span>
                      </button>
                      {i < heroSlides.length - 1 ? (
                        <span className="feature-carousel__pagination-separator" aria-hidden>
                          |
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="secondary-content">
                <div className="content">
                  <div className="feature-carousel__secondary-item is-active">
                    <div className="text">
                      <p>{slide.body}</p>
                    </div>
                    <Link to={slide.cta?.to || '/'} className="button button--hero-cta button--arrow-right">
                      {slide.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
