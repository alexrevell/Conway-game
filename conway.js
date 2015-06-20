function Cell() {
  this.alive = (0.5 > Math.random() ? true : false)
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

    this.countAllNeighbours()
    this.updateAllCells()
    this.renderGrid()
}

Conway.prototype.inBounds = function(r, c) {

 return r >= 0 && r < this.size && c >= 0 && c < this.size

}

Conway.prototype.countNeighboursForCell = function(r, c) {
  var cell = this.grid[r][c]
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
  return cell.neighbours
}

Conway.prototype.countAllNeighbours = function() {

  for (var i = 0; i < this.size; i++) {
    for (var j = 0; j < this.size; j++) {
      this.countNeighboursForCell( i, j )
    }
  }
}

Conway.prototype.updateCell = function(r, c) {

  var cell = this.grid[r][c]
  if (cell.alive) {
    if (cell.neighbours < 2) {
      cell.alive = false
    } else if (cell.neighbours > 3) {
      cell.alive = false
    }
  }
  else if (!cell.alive) {
    if (cell.neighbours === 3) {
      cell.alive = true
    }
  }
}

Conway.prototype.updateAllCells = function() {

  for (var i = 0; i < this.size; i++) {
    for (var j = 0; j < this.size; j++) {
      this.updateCell( i, j )
    }
  }
}

Conway.prototype.renderGrid = function() {

  console.log('\033[2J')

  for (var i = 0; i < this.size; i++) {
    var rowSegment = ""
    for (var j = 0; j < this.size; j++) {
      if (this.grid[i][j].alive){
        rowSegment += this.grid[i][j].neighbours + " "
      } else {
        rowSegment += "  "
      }
    }
    console.log(rowSegment)
  }
}

var conway = new Conway(40)
var interval = setInterval(function(){
    conway.turnOfLife()
  }, 90)

