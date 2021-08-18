import { getCreator, getCreatorsItems } from "../../functions/api";
import ItemCard from "../../components/ItemCard";
import CreatorHeader from "../../components/CreatorHeader";
import CreatorSidebar from "../../components/CreatorSidebar";
import { getNfts } from "../../functions/graphql";
import SEO from "../../components/Shared/SEO";
import { getRandomWebaverseAvatarImage } from "../../functions/utils";

export default function CreatorPage({ creator, items }) {
  return (
    <div className="flex-grow">
      <SEO
        title={creator.name || "Anonymous"}
        description={`See ${creator.name || "Anonymous"}'s Webaverse profile.`}
        image={creator.avatarPreview || getRandomWebaverseAvatarImage()}
      />
      <CreatorHeader creator={creator} />
      <div className="pt-12 lg:pt-80 flex lg:flex-nowrap flex-wrap">
        <CreatorSidebar creator={creator} />
        <div className="px-4 min-h-full w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <ItemCard key={`${item.hash}-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { address } = context.query;

  const creator = await getCreator(address);
  const webaverseItems = await getCreatorsItems(address);
  const ethereumItems = (await getNfts(address, 1)) || [];

  const items = [...webaverseItems, ...ethereumItems];

  return {
    props: {
      creator,
      items,
    },
  };
}
