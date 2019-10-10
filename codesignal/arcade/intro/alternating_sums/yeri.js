function alternatingSums(a) {
    let flagTeam = true
    let teamA = 0
    let teamB = 0
    for(let i = 0; i< a.length; i++){
        if(flagTeam) {
            teamA += a[i]
            flagTeam = false
        } else {
            teamB += a[i]
            flagTeam = true
        }
    }
    return [teamA, teamB]
}
