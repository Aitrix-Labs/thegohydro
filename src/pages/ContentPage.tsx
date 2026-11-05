import { Link, Navigate, useParams } from 'react-router-dom'
import BannerImageAndText from '../components/BannerImageAndText'
import ContentSection from '../components/ContentSection'
import LinkCards from '../components/LinkCards'
import PageBanner from '../components/PageBanner'
import Stories from '../components/Stories'
import TextAndMedia from '../components/TextAndMedia'
import TopicIntro from '../components/TopicIntro'
import WaterStorage from '../components/WaterStorage'
import { pageCopy } from '../data/content'
import { resolveTopicSlug, topicPages } from '../data/topicPages'

export default function ContentPage() {
  const { slug = 'about' } = useParams()
  const canonical = resolveTopicSlug(slug)

  if (slug !== canonical && topicPages[canonical]) {
    return <Navigate to={`/${canonical}`} replace />
  }

  const topic = topicPages[canonical]
  if (topic) {
    const earlyCards =
      topic.cards && (topic.cards.placement ?? 'after-intro') === 'after-intro'
        ? topic.cards
        : null
    const lateCards =
      topic.cards && topic.cards.placement === 'after-banners' ? topic.cards : null

    return (
      <article className="topic-page">
        <TextAndMedia {...topic.hero} />
        {topic.intro ? (
          <TopicIntro
            title={topic.intro.title}
            lead={topic.intro.lead}
            paragraphs={topic.intro.paragraphs}
          />
        ) : null}
        {earlyCards ? <LinkCards title={earlyCards.title} cards={earlyCards.items} /> : null}
        {topic.sections?.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}
        {topic.showWaterStats ? <WaterStorage /> : null}
        {topic.banners?.map((banner) => (
          <BannerImageAndText
            key={banner.titleLine + (banner.titleAccent ?? '')}
            {...banner}
          />
        ))}
        {lateCards ? <LinkCards title={lateCards.title} cards={lateCards.items} /> : null}
        {topic.showStories ? <Stories /> : null}
      </article>
    )
  }

  const page = pageCopy[canonical] ?? pageCopy.about

  return (
    <>
      <PageBanner {...page} />
      <section className="content-block reveal">
        <div className="content-block__inner">
          <h2>What we stand for</h2>
          <p>
            This page is part of the GoHydro site. It uses a dark teal and lime
            brand system, wave motifs and full-bleed photography — with content
            kept intentionally concise for this demo.
          </p>
          <p>
            Explore more of the site from the menu, or return home to the hero
            carousel, water storage dashboard and latest stories.
          </p>
          <Link to="/" className="btn btn--teal">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
