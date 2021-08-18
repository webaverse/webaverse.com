import ItemCard from '../components/ItemCard';
import SEO from '../components/SEO';
import Tabs from '../components/Tabs'

import { getLands } from "../functions/api";

export default function Lands({ items }) {
  return (
    <div className="w-full h-4/5 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Webaverse Lands"
        description="See all of the lands in Webaverse."
      />
      <Tabs
        tabs={[
          { name: "Creators", href: "/creators", current: false },
          { name: "Items", href: "/items", current: false },
          { name: "Lands", href: "/lands", current: true },
          { name: "Silk", href: "/silk", current: false },
        ]}
      />
      <div className="min-h-full min-w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <ItemCard key={`${item.hash}-${item.id}`} item={item} land={true} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const items = await getLands();

  return {
    props: {
      items,
    },
  };
}
