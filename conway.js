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

Conway.prototype.inBounds = function(r, c) {
  // check if cell is within limits of grid size
 return r >= 0 && r < this.size && c >= 0 && c < this.size
}

Conway.prototype.countNeighboursForCell = function(r, c) {
  // count neighbours for cell
  var cell = this.grid[r][c]
  console.log(cell)
  cell.neighbours = 0
  for (var i = 0; i < this.directions.length; i++) {
    var dr = this.directions[i][0]
    var dc = this.directions[i][1]
    if (this.inBounds(r + dr, c + dc)) {
      var checkCell = this.grid[r + dr][c + dc]
      if (checkCell.alive) {
        cell.neighbours += 1
      }
    }
  }
  console.log(cell)
  return cell.neighbours
}

Conway.prototype.countAllNeighbours = function() {
  // call countNeighboursForCell for every cell
  for (var i = 0; i < this.size; i++) {
    for (var j = 0; j < this.size; j++) {
      this.countNeighboursForCell( i, j )
    }
  }
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
        rowSegment += "O|"
      } else {
        rowSegment += " |"
      }
    }
    console.log(rowSegment)
  }
}

var conway = new Conway(10)
conway.generateGrid()
conway.renderGrid()
conway.countNeighboursForCell(0,0)
// conway.countAllNeighbours()
