import CreatorCard from '../components/App/CreatorCard'
import SEO from '../components/Shared/SEO'
import Tabs from '../components/App/Tabs'

import { getCreators } from '../functions/api'

export default function Creators({ creators }) {
  return (
    <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8 mt-10">
      <SEO
        title="Webaverse Creators"
        description="See all of the creators in Webaverse."
      />
      <Tabs
        tabs={[
          { name: 'Creators', href: '/creators', current: true },
          { name: 'Items', href: '/items', current: false },
          { name: 'Lands', href: '/lands', current: false },
          { name: 'Silk', href: '/silk', current: false },
        ]}
      />
      <div className="min-h-full min-w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {creators.map(
          (creator) =>
            (creator.name || creator.avatarPreview) && (
              <CreatorCard key={creator.address} creator={creator} />
            ),
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const creators = await getCreators()

  return {
    props: {
      creators,
    },
  }
}
