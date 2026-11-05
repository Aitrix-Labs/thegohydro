import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { waterStorage } from '../data/content'

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()
    const duration = 1400

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setValue(Number((target * eased).toFixed(decimals)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, decimals])

  return value
}

export default function WaterStorage() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const gwh = useCountUp(Number(waterStorage.gwh), active)
  const percent = useCountUp(Number(waterStorage.percent), active, 1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="text-image-and-stats reveal" ref={ref}>
      <div className="text-image-and-stats__background">
        <img src={waterStorage.image} alt="" />
      </div>
      <div className="container-wrapper">
        <div className="text-image-and-stats__content">
          <div className="primary-content reveal-child">
            <Link to={waterStorage.cta.to} className="content">
              <div className="title">
                <h3 className="heading">{waterStorage.title}</h3>
              </div>
              <div className="text">
                <p>{waterStorage.body}</p>
              </div>
              <span className="button button--arrow-right">{waterStorage.cta.label}</span>
            </Link>
          </div>
          <div className="stats-container reveal-child reveal-child--delay">
            <div className="stats">
              <div className="stat-item">
                <p className="stat-item__title">{gwh}</p>
                <span className="stat-item__label">{waterStorage.gwhLabel}</span>
              </div>
              <div className="stat-item">
                <p className="stat-item__title">{percent}</p>
                <span className="stat-item__label">{waterStorage.percentLabel}</span>
              </div>
              <span className="updated-at">
                {waterStorage.asAt}
                <br />
                {waterStorage.note}
              </span>
              <div className="stats__actions">
                <button type="button" className="button button--arrow-right">
                  Current Data
                </button>
                <button type="button" className="button button--secondary button--arrow-right">
                  Historical Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
