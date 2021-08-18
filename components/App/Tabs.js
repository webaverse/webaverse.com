import Link from "next/link";

const Tabs = ({ tabs }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex-grow py-8 max-w-screen-2xl">
      <div className="fixed mx-auto left-0 top-20 lg:top-14 w-full z-10 bg-gray-100">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex justify-center" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link href={tab.href} key={tab.name}>
                <a
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
