import { GetServerSideProps } from 'next'
import ItemCard from '../components/App/Item/ItemCard'
import SEO from '../components/Shared/SEO'
import Tabs from '../components/App/Tabs'
import { getItems } from '../functions/api/item'
import { Items } from '../types/Item'

interface Props {
  items: Items
}

export default function ItemsPage({ items }: Props): JSX.Element {
  return (
    <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8 mt-10">
      <SEO
        title="Webaverse Items"
        description="See all of the items in Webaverse."
        image="/img/hero.png"
      />
      <Tabs
        tabs={[
          { name: 'Creators', href: '/creators', current: false },
          { name: 'Items', href: '/items', current: true },
          { name: 'Lands', href: '/lands', current: false },
          { name: 'Silk', href: '/silk', current: false },
        ]}
      />
      <div className="min-h-full min-w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <ItemCard
            key={`${item.hash}-${item.id}`}
            item={item}
            href={`/items/${item.id}`}
            creator={item.owner}
          />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await getItems(1)

  return {
    props: {
      items,
    },
  }
}
