import { GetServerSideProps } from 'next'
import BlogPostCards from '../components/Landing/BlogPostCards'
import CtaCard from '../components/Landing/CtaCard'
import CtaCardOverlay from '../components/Landing/CtaCardOverlay'
import Hero from '../components/Landing/Hero'
import LandingCopy from '../components/Landing/LandingCopy'
import MissionSection from '../components/Landing/MissionSection'
import NewsletterSignup from '../components/Landing/NewsletterSignup'
import StatsCard from '../components/Landing/StatsCard'
import TestimonialCard from '../components/Landing/TestimonialCard'
import { getBlogPosts } from '../functions/api/blog'
import { getCreators } from '../functions/api/creator'
import { getLands } from '../functions/api/land'
import { Blogs } from '../types/Blog'

interface Props {
  creatorsNum: number
  landsNum: number
  blogPosts: Blogs
}

export default function Home({
  creatorsNum,
  landsNum,
  blogPosts,
}: Props): JSX.Element {
  return (
    <div>
      <Hero />
      <StatsCard creatorsNum={creatorsNum} itemsNum={758} landsNum={landsNum} />
      <TestimonialCard
        background="https://pbs.twimg.com/media/E2TzsU9VcAEqfs8?format=jpg"
        logo=""
        description="coolest thing about webaverse imo is that its completely open source and the people building it has been streaming their work since inception

        taking your mooncats on a walk in your meebit avatars while aping into uniswap shitcoin in a virtual trading pit is closer than u think"
        name="@CL207"
        title="cat"
        company="eGirl Capital"
      />
      <LandingCopy />
      <CtaCard
        title1="Have a Discord server?"
        title2="Invite the Webaverse bot."
        description="Build a meme economy in your server. No setup required, everyone will have a Webaverse Ethereum address. Mint anything from images, 3D models, avatars, and more!"
        cta="Add Bot to Discord"
        url="https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot"
        image="/img/bot.gif"
      />
      <MissionSection />
      <CtaCardOverlay
        title="Join the Webaverse Team"
        description="Webaverse is an open source project to manifest the best version of the Metaverse. We want to make the web fun again while enabling users to take back control of their data.

        We are looking for the smartest engineers in game-dev, web3 product design, and crypto to join us."
        cta="Join Webaverse Team"
        url="https://www.notion.so/webaverse/Webaverse-is-Hiring-8fb49c069c2f450f93ebb911149f21bd"
        image="https://blog.webaverse.com/content/images/size/w1000/2021/08/VRChat_dWPbbvrSnT.jpg"
      />
      <BlogPostCards
        posts={blogPosts}
        title="From the Webaverse blog"
        description="Webaverse, explained. Learn about the latest developments of the Metaverse."
      />
      <NewsletterSignup
        title="Become a Metaverse Insider"
        description="The open metaverse is also a cultural phenomenon emerging in terms of coordination and alignment. There has to be compelling stories that can guide us all in the right direction."
        cta="Subscribe"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const creators = await getCreators()
  const lands = await getLands()
  const blogPosts = await getBlogPosts()

  return {
    props: {
      creatorsNum: creators.length,
      landsNum: lands.length,
      blogPosts,
    },
  }
}
