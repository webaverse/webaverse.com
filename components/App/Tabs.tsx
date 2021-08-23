import Link from 'next/link'

interface Props {
  tabs: Tab[]
}

interface Tab {
  current: boolean
  href: string
  name: string
}

const Tabs = ({ tabs }: Props): JSX.Element => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="fixed left-0 top-20 lg:top-14 z-10 h-14 bg-gray-100 w-full">
      <div className="mx-auto w-full max-w-screen-2xl bg-gray-100">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex justify-center" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link href={tab.href} key={tab.name}>
                <a
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm',
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs
