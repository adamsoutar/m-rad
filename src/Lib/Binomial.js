function nCr (n, r) {
  let result = 1

  for (let i = 0; i < r; i++) {
    result *= (n - i)/(i + 1)
  }

  return result
}

function binomial (trials, p, successes) {
  let probability = 0

  for (let i = successes; i <= trials; i++) {
    probability += nCr(trials, i) * Math.pow(p, i) * Math.pow(1 - p, trials - i)
  }

  return probability
}

export default binomial
