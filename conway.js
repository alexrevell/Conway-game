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

Conway.prototype.generategrid = function() {
  // generate grid
  for (var i = 0; i < this.size; i++) {
    var row = []
    this.grid[i] = new Array(this.size)
    for (var j = 0; j < this.size; j++) {
      console.log("in column")
     this.grid[i][j] = new Cell()
   }
  }

}

Conway.prototype.populategrid = function() {
  // populate grid

}

Conway.prototype.turnOfLife = function() {
  // each turn:

}

Conway.prototype.countNeighbours = function(){
  // count neighbours for each cell

}

Conway.prototype.updateCells = function() {
  // update cells

}

Conway.prototype.renderCells = function() {
  // render updated grid cells
  this.grid.forEach(function(cell){
    if (cell.alive === true){
      console.log("X|")
    } else {
      console.log(" |")
    }
  })
  console.log(this.grid)
}

var conway = new Conway(10)
conway.renderCells
