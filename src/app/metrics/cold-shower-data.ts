import { addDays } from 'date-fns'

export const START_DATE = new Date(2023, 0, 6)

type ColdShowerDatum = {
  date: Date
  seconds: number
  comments?: string
}

export const coldShowerData: ColdShowerDatum[] = [
  {
    date: START_DATE,
    seconds: 70,
  },
  {
    date: addDays(START_DATE, 1),
    seconds: 60,
    comments: 'Did 60 breaths because I forgot my phone.',
  },
  {
    date: addDays(START_DATE, 2),
    seconds: 60,
    comments: '',
  },
  {
    date: addDays(START_DATE, 3),
    seconds: 90,
    comments: '',
  },
  {
    date: addDays(START_DATE, 4),
    seconds: 80,
    comments: '',
  },
  {
    date: addDays(START_DATE, 5),
    seconds: 135,
    comments:
      'Realized it helps to hit chest/belly to cool down core temp as quickly as possible to reduce pain',
  },
  {
    date: addDays(START_DATE, 6),
    seconds: 153,
    comments:
      'Theory from yesterday holds up, today I noticed my wrists and neck felt the most pain from cold.',
  },
  {
    date: addDays(START_DATE, 7),
    seconds: 120,
    comments:
      'Felt like a bitch / was ready to get out the entire time lol \nMay set my new minimum time to 2 minutes…',
  },
  {
    date: addDays(START_DATE, 8),
    seconds: 130,
    comments: '',
  },
  {
    date: addDays(START_DATE, 9),
    seconds: 120,
    comments: '',
  },
  {
    date: addDays(START_DATE, 10),
    seconds: 180,
    comments:
      '*Didn’t realize I didn’t turn it all the way down :( \nIt was still cold af though… but not god-awful the way it typically is',
  },
  {
    date: addDays(START_DATE, 11),
    seconds: 130,
    comments: '',
  },
  {
    date: addDays(START_DATE, 12),
    seconds: 60,
    comments: '',
  },
  {
    date: addDays(START_DATE, 13),
    seconds: 120,
    comments: '',
  },
  {
    date: addDays(START_DATE, 14),
    seconds: 180,
    comments: '',
  },
  {
    date: addDays(START_DATE, 15),
    seconds: 180,
    comments: '',
  },
  {
    date: addDays(START_DATE, 16),
    seconds: 180,
    comments: '',
  },
  {
    date: addDays(START_DATE, 17),
    seconds: 180,
    comments: '',
  },
]
