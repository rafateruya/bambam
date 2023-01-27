const getUniqueRanking = (ranked: number[]): number[] => {
  return [...new Set(ranked)]
}

const checkObviousPositions = (ranking: number[], score: number): number | undefined => {
  const lastRankingScore = ranking[ranking.length - 1]
  if (score < lastRankingScore) {
    return ranking.length + 1
  }
  if (score === lastRankingScore) {
    return ranking.length
  }
  if (score >= ranking[0]) {
    return 1
  }
}

export const climbingLeaderboard = (ranked: number[], player: number[]): number[] => {
  const ranking = getUniqueRanking(ranked)
  let lastRankingIndex = ranking.length - 1
  return player.map((score) => {
    const obviousPosition = checkObviousPositions(ranking, score)
    if (obviousPosition) {
      return obviousPosition
    }

    let position = -1
    for (let i = lastRankingIndex; i >= 0 && position === -1; i--) {
      const rankingScore = ranking[i]

      if (score >= rankingScore && score < ranking[i - 1]) {
        position = i
        lastRankingIndex = i
      }
    }
    return position !== -1 ? position + 1 : 1
  })
}
