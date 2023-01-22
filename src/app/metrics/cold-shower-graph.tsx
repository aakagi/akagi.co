'use client'

import { differenceInDays } from 'date-fns'
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from 'victory'
import { START_DATE, coldShowerData } from './cold-shower-data'

const getChallengeDay = (date: Date) => {
  return differenceInDays(date, START_DATE)
}

const getTickValues = (data: typeof coldShowerData) => {
  return data.map((d) => getChallengeDay(d.date))
}

const formatData = (data: typeof coldShowerData) => {
  return data.map((d) => {
    return {
      quarter: getChallengeDay(d.date),
      earnings: d.seconds,
    }
  })
}

export const ColdShowerGraph = () => {
  return (
    <VictoryChart
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      domainPadding={20}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={getTickValues(coldShowerData)}
        tickFormat={(dayNumber) => {
          return `${dayNumber}`
        }}
      />

      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `${x}`}
      />

      <VictoryStack colorScale={'warm'}>
        <VictoryBar
          data={formatData(coldShowerData)}
          x="quarter"
          y="earnings"
        />
      </VictoryStack>
    </VictoryChart>
  )
}
