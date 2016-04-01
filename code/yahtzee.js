import R from 'ramda'

const scoreUpper = scoreVal => R.compose(R.sum, R.filter(n => n === scoreVal))

export const scoreOnes = scoreUpper(1)
export const scoreTwos = scoreUpper(2)
