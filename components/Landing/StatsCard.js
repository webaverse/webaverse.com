import Link from "next/link";

const StatsCard = ({ creatorsNum, itemsNum, landsNum }) => (
  <div className="pt-12 sm:pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Made with over {creatorsNum} creators
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Each moment is an opportunity to exchange gifts, stories, learn about
          each others cultural values, build trust and establish connections
          that unite us.
        </p>
      </div>
    </div>
    <div className="mt-10 pb-12 sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              <Link href="/creators">
                <a>
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Creators
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {creatorsNum}
                    </dd>
                  </div>
                </a>
              </Link>
              <Link href="/items">
                <a>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Items
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {itemsNum}
                    </dd>
                  </div>
                </a>
              </Link>
              <Link href="/lands">
                <a>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Lands
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {landsNum}
                    </dd>
                  </div>
                </a>
              </Link>
              <Link href="/silk">
                <a>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                     Silk 
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      58214
                    </dd>
                  </div>
                </a>
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StatsCard;
