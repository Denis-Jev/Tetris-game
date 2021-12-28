class Piece {
    constructor(shape, ctx) {
        this.shape = shape 
        this.ctx = ctx 
        this.y = 0 
        this.x = Math.floor(COLS / 2)
    }
    Backgr() {
        background-image - url('https://ychef.files.bbci.co.uk/1600x900/p0102gs2.webp')
    }
    

    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = COLORS[cell] 
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}