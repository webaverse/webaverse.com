import { GetServerSideProps } from 'next'
import ItemCard from '../components/App/Item/ItemCard'
import SEO from '../components/Shared/SEO'
import Tabs from '../components/App/Tabs'

import { getLands } from '../functions/api/land'
import { Items, Item } from '../types/Item'

interface Props {
  items: Items
}

export default function Lands({ items }: Props): JSX.Element {
  return (
    <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8 mt-10">
      <SEO
        title="Webaverse Lands"
        description="See all of the lands in Webaverse."
        image="/img/hero.png"
      />
      <Tabs
        tabs={[
          { name: 'Creators', href: '/creators', current: false },
          { name: 'Items', href: '/items', current: false },
          { name: 'Lands', href: '/lands', current: true },
          { name: 'Silk', href: '/silk', current: false },
        ]}
      />
      <div className="min-h-full min-w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items?.length > 0 &&
          items.map((item: Item) => (
            <ItemCard
              key={`${item.hash}-${item.id}`}
              item={item}
              href={`/lands/${item.id}`}
              creator={item.owner}
            />
          ))}
        {(!items || items.length < 1) && (
          <h1 className="col-span-3 text-xl pt-4 mx-auto">
            There is no land listed.
          </h1>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await getLands()

  return {
    props: {
      items,
    },
  }
}
