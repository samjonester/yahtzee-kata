import R from 'ramda'

const scoreUpper = scoreVal => R.compose(R.sum, R.filter(R.equals(scoreVal)))

export const scoreOnes = scoreUpper(1)
export const scoreTwos = scoreUpper(2)

const dieCounts = R.countBy(R.identity)
const diceWithCount = count => R.compose(R.map(parseInt), R.keys, R.filter(R.equals(count)), dieCounts)

const pairs = diceWithCount(2)

export const scorePair = R.compose(R.reduce(R.max, 0), R.map(n => n*2), pairs)
