import ActivityCard from './ActivityCard'
import { ParsedLogs, ParsedLog } from '../../../types/Log'

interface Props {
  logs: ParsedLogs
}

export default function ItemActivity({ logs }: Props): JSX.Element {
  return (
    <div className="w-full flex-grow flex flex-col px-6">
      <h1 className="text-3xl font-semibold my-8">Activity</h1>
      {logs?.length > 0 &&
        logs.map((log: ParsedLog) => <ActivityCard key={log.id} log={log} />)}
      {!(logs.length > 0) && <h1>No activity for this item.</h1>}
    </div>
  )
}
