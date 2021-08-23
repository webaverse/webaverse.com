/* eslint-disable react/no-unescaped-entities */
export default function LandingCopy(): JSX.Element {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building the Webaverse
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            After years of projects and experiments, we arrived at 5 major parts
            to create the most accessible, open, and immersive virtual world
            users can build and monetize with.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2>Interoperability</h2>
          <p>
            We don't want to just build a virtual world for our NFTs, we want to
            support NFTs to be operable in Webaverse from other contracts as
            well such as DCL, CV, Axies, etc.
          </p>
          <h2>Community</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/img/community.png"
              alt=""
              width={1310}
              height={873}
            />
          </div>
          <p>
            Many of us are on Discord, so we should be able to control the
            metaverse from there.
          </p>
          <p>
            We made a bot that lets you drop files to create NFTs, trade with
            one another, explore the ecosystem, and join multiplayer parties.
            Its a familiar interface that socializes and simplifies the Ethereum
            onboarding experience for everyone.
          </p>
          <h2>Avatars</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/img/avatars.png"
              alt=""
              width={1310}
              height={873}
            />
          </div>
          <p>
            Avatars are the audio-visual representation of self. Currently
            they're 2D profile pages for billions of people, while new
            generations are growing up being used to 3D characters.
          </p>
          <h2>NFTs</h2>
          <p>
            NFTs are the ingredients of the metaverse. They are unique digital
            objects that contain that contain digital property rights to the
            stuff in your inventory.
          </p>
          <p>
            The Ethereum blockchain acts like a public good that provides
            verifiable proof of ownership and provenance for these digital
            assets. With attribution and value baked in, NFTs open up a world of
            possibilities for creators to make money in the virtual economy.
          </p>
          <h2>The Street</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://blog.webaverse.com/content/images/size/w2000/2021/07/SeasonSwitchNew_copy.jpg"
              alt=""
              width={1310}
              height={873}
            />
          </div>
          <blockquote>
            <p>
              What we need are the shipping networks and cross continental
              railways between virtual worlds for identities, ideas, and value
              to flow, so we can have a 3D Internet.
            </p>
          </blockquote>
          <p>
            The Street threads the needle between all these worlds. It's the
            next step from scrolling a 2D page to strolling through 3D
            cyberspace.
          </p>
          <p>
            The street consists of neighborhoods imagined by cryptoartists
            collaborating with VR developers. Neighborhoods have unique parcels
            you can own, where NFTs can be placed.
          </p>
        </div>
      </div>
    </div>
  )
}
