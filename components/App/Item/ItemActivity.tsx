import ActivityCard from './ActivityCard'

export default function ItemActivity(): JSX.Element {
  return (
    <div className="w-full flex-grow flex flex-col px-6">
      <h1 className="text-3xl font-semibold my-8">Activity</h1>
      <ActivityCard />
    </div>
  )
}
