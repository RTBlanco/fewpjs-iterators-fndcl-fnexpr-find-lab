function superbowlWin(array) {
  let winner = array.find(obj => obj.result === "W")
  return typeof(winner) !== "undefined" ? winner.year : undefined
}

