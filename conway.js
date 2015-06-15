function Cell() {
  this.alive = (0.7 > Math.random() ? true : false)
}

Cell.prototype.die = function() {
  // make alive false
  this.alive = false
}

Cell.prototype.awaken = function() {
  // make alive true
  this.alive = true
}



function Conway(size) {
  this.size = size
  this.grid = this.generateGrid()

}

Conway.prototype.start = function() {
  // start game by populating grid

}

Conway.prototype.generateGrid = function() {
  this.grid = []
  for (var i = 0; i < this.size; i++) {
    var row = []
    for (var j = 0; j < this.size; j++) {
      var cell = new Cell()
      row.push(cell)
    }
    this.grid.push(row)
  }
  return this.grid
}

Conway.prototype.turnOfLife = function() {
  // each turn:
    // count cell neighbours
    // update cells (cell.awaken/cell.die)
    // render grid of cells
}

Conway.prototype.countNeighbours = function(){
  // count neighbours for each cell

}

Conway.prototype.updateCells = function() {
  // update cells

}

Conway.prototype.renderGrid = function() {
  // render grid cells
  for (var i = 0; i < this.size; i++) {
    var rowSegment = ""
    for (var j = 0; j < this.size; j++) {
      if (this.grid[i][j].alive){
        rowSegment += "X|"
      } else {
        rowSegment += " |"
      }
    }
    console.log(rowSegment)
  }
}

var conway = new Conway(10)
conway.renderGrid()
