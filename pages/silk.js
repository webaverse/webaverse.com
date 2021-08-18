import SEO from '../components/Shared/SEO'
import SilkTable from '../components/App/SilkTable'
import Tabs from '../components/App/Tabs'
import { getCreatorsWithBalance } from '../functions/api'

export default function Silk({ creators }) {
  return (
      <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8">
          <SEO
            title="Webaverse Silk"
            description="See all of the creators holding silk in Webaverse."
          />
          <Tabs
            tabs={[
              { name: 'Creators', href: '/creators', current: false },
              { name: 'Items', href: '/items', current: false },
              { name: 'Lands', href: '/lands', current: false },
              { name: 'Silk', href: '/silk', current: true },
            ]}
          />
          <SilkTable creators={creators} />
      </div>
  )
}

export async function getServerSideProps() {
  const creators = await getCreatorsWithBalance()

  return {
    props: {
      creators,
    },
  }
}
