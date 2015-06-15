function Cell() {
  this.alive = 0.7 > Math.Random() ? true : false
}

Cell.prototype.die = function() {
  // make alive false
  this.alive = false
}

Cell.prototype.awaken = function() {
  // make alive true
  this.alive = true
}
