import { GetServerSideProps } from 'next'
import SEO from '../components/Shared/SEO'
import SilkTable from '../components/App/SilkTable'
import Tabs from '../components/App/Tabs'
import { getCreatorsWithBalance } from '../functions/api/creator'
import { Creator } from '../types/Creator'

interface Props {
  creators: Creator[]
}

export const Silk = ({ creators }: Props): JSX.Element => (
  <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8 mt-10">
    <SEO
      title="Webaverse Silk"
      description="See all of the creators holding silk in Webaverse."
      image="/img/hero.png"
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

export const getServerSideProps: GetServerSideProps = async () => {
  const creators = await getCreatorsWithBalance()

  return {
    props: {
      creators,
    },
  }
}

export default Silk
