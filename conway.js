function Cell() {
  this.alive = (0.7 > Math.random() ? true : false)
  this.neighbours = 0
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
  this.directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
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
      // call on each cell
    // update cells (cell.awaken/cell.die)
      // call on each cell
    // render grid of cells
}

Conway.prototype.countNeighboursForCell = function(r, c) {
  // count neighbours for cell
  var cell = this.grid[r][c]

  for (var i = 0; i < this.directions.length; i++) {
    var dr = this.directions[i][0]
    var dc = this.directions[i][1]
    if (this.grid[r + dr][c + dc].alive) {
      cell.neighbours += 1
    }
    console.log("cell neighbours", cell.neighbours)
  }
  return cell.neighbours

}

Conway.prototype.countAllNeighbours = function() {
  // call countNeighboursForCell for every cell
}

Conway.prototype.updateCell = function(r, c) {
  // update individual cell dead or living state
}

Conway.prototype.updateCells = function() {
  // update all cells via updateCell method

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
conway.countNeighboursForCell(2,2)
