class Tile {
	constructor(){
		this.mine = false;
		this.flag = false;
		this.adjminenum = 0;
	}
}
class mineField {
    constructor(height, width, numBombs){
        this.height = height;
        this.width = width;
		this.bombs = numBombs;
		this.flags = numBombs;
        this.arr = [];
		let cells = height * width;
        for(let i = 0; i < width; i++){
            this.arr.push([0]);
            for(let j = 0; j < height; j++){
                this.arr[i][j] = new Tile();
				/*if(Math.floor(Math.random() * 3) == 1){
					this.arr[i][j] = true;
					if(i > 0){
						this.arr[i-1][j].adjminenum++;
						if(j > 0){
							this.arr[i-1][j-1].adjminenum++;
						}
						if(j > dimension-1){
							this.arr[i-1][j+1].adjminenum++;
						}
					}
					if(j > 0){
						this.arr[i][j-1].adjminenum++;
					}
					if(j < dimension-1){
						this.arr[i][j+1].adjminenum++;
					}
					if(i < dimension-1){
						this.arr[i+1][j].adjminenum++;
						if(j > 0){
							this.arr[i+1][j-1].adjminenum++;
						}
						if(j > dimension-1){
							this.arr[i+1][j+1].adjminenum++;
						}
					}
				}*/
            }
        }//populates the array couldn't get adding mines to work
		this.arr[3][1].mine = true;
		this.arr[3][2].mine = true;
		this.arr[3][3].mine = true;
		this.arr[3][4].mine = true;
		this.arr[3][0].mine = true;
    }
	Click(cell,row,col,i,dimension){
		if(this.arr[row][col].adjminenum == 0 && this.arr[row][col].mine != true){
			this.Expand(cell,row,col,dimension);
		}
		else if(this.arr[row][col].adjminenum == 1 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked1';
		}
		else if(this.arr[row][col].adjminenum == 2 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked2';
		}
		else if(this.arr[row][col].adjminenum == 3 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked3';
		}
		else if(this.arr[row][col].adjminenum == 4 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked4';
		}
		else if(this.arr[row][col].adjminenum == 5 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked5';
		}
		else if(this.arr[row][col].adjminenum == 6 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked6';
		}
		else if(this.arr[row][col].adjminenum == 7 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked7';
		}
		else if(this.arr[row][col].adjminenum == 8 && this.arr[row][col].mine != true){
			cell[row][col].className = 'clicked8';
		}
		else if(this.arr[row][col].mine == true){
			cell[row][col].className = 'bomb';
		}//need statements for if the adjacent mines are >0 but works now
	}
	Flag(x,y) {
		this.arr[x][y].flag = true;
		flags --;
		if(flags == 0) {

		}
	}
	Expand(cell, row, col, dimension) {
		if(cell[row][col].className == 'clicked'){
			return;
		}//temporary until we get adjacent mine numbers working
		if(this.arr[row][col].adjminenum == 0 && !(this.arr[row][col].mine)){
			cell[row][col].className = 'clicked';
			if(row > 0){
				this.Expand(cell,row-1,col,dimension);
				if(col > 0){
					this.Expand(cell,row-1,col-1,dimension);
				}
				if(col > dimension-1){
					this.Expand(cell,row-1,col+1,dimension);
				}
			}
			if(col > 0){
				this.Expand(cell,row,col-1,dimension);
			}
			if(col < dimension-1){
				this.Expand(cell,row,col+1,dimension);
			}
			if(row < dimension-1){
				this.Expand(cell,row + 1,col,dimension);
				if(col > 0){
					this.Expand(cell,row+1,col-1,dimension);
				}
				if(col > dimension-1){
					this.Expand(cell,row+1,col+1,dimension);
				}
			}
		}//recursively calls for it to go out to all squares if there is no mine near it
	}
}
