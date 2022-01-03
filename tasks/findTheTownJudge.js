// https://leetcode.com/problems/find-the-town-judge/

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.


var findJudge = function(n, trust) {
    const trustA = {}
    const trustB = {}

    if (n === 1 && !trust.length) return 1

    for (t of trust) {
      const [from, to] = t
      trustA[from] = trustA[from] + 1 || 1
      trustB[to] = trustB[to] + 1 || 1
    }

    for (i = 1; i <= n; i++ ) {
      if (!trustA[i] && trustB[i] === n - 1) return i
    }

    return -1
}

console.log(findJudge(3, [[1,3],[2,3]])) // 3
// console.log(findJudge(3, [[1,3],[2,3],[3,1]])) // -1
// console.log(findJudge(1, [])) // 1