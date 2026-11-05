import { Link } from 'react-router-dom'
import { careers } from '../data/content'

export default function Careers() {
  return (
    <section className="full-width-promo-centre full-width-promo-centre--mountain reveal">
      <div className="full-width-promo-centre--content">
        <div className="primary-content">
          <div className="primary-content__text reveal-child">
            <span className="strapline">Careers</span>
            <h2 className="heading desktop-heading">
              Build your career
              <br />
              in renewable energy
            </h2>
          </div>
          <div className="image-wrapper reveal-child reveal-child--delay">
            <img src={careers.image} alt="" />
          </div>
        </div>
        <div className="secondary-content secondary-content--mountain reveal-child">
          <div className="content-wrapper">
            <h2 className="heading mobile-heading">{careers.title}</h2>
            <div className="text">
              <p>{careers.body}</p>
            </div>
            <Link to={careers.cta.to} className="button button--secondary button--arrow-right">
              {careers.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
