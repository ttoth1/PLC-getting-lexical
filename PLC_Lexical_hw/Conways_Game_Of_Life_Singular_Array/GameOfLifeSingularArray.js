
class GameOfLifeSingularArray {

    /*
    functions 
        1 - create 2 2d arrays with zeros (active/inactive) - done!
        2 - fill active array randomly with ones and zeros - done! 
        3 - set color for cells - done! 
        4 - count neigbours 
        5 - update generation 
        6 - clear canvas
    */

    constructor() {

        this.cell_size = 5;
        this.dead_color = `#181818`;
        this.alive_color = `#FF756B`;
        this.cells_in_column = Math.floor(canvas.width / this.cell_size);   //280 cols
        // console.log("this.cells_in_column = " + this.cells_in_column);
        this.cells_in_rows = Math.floor(canvas.height / this.cell_size);    //100 rows
        // console.log("this.cells_in_rows = " + this.cells_in_rows);
        this.total_cells = this.cells_in_column * this.cells_in_rows;       //28000 total cells
        // console.log("this.total_cells = " + this.total_cells);
        this.active_array = [];
        this.inactive_array = [];

        //initialize every cell to 0
        this.arrayInitialization = () => {

            for (let i = 0; i < this.total_cells; i++) {
                this.active_array[i] = [0];
            }
            this.inactive_array = this.active_array;

        };

        //randomly set every cell to 0 or 1
        this.arrayRandomize = () => {

            for (let i = 0; i < this.total_cells; i++) {
                    this.active_array[i] = (Math.random() > 0.5) ? 1 : 0;
            }

        };

        //show color for cells
        this.fillArray = () => {

            for (let i = 0; i < this.total_cells; i++) {
                    let color;
                    if (this.active_array[i] == 1){
                        color = this.alive_color;
                        // console.log("live cell at index " + i);
                    }
                    else
                        color = this.dead_color;
                    ctx.fillStyle = color;
                    ctx.fillRect((i % this.cells_in_column) * this.cell_size, Math.floor(i / this.cells_in_column) * this.cell_size, this.cell_size, this.cell_size);
            }

        };

        this.setCellValueHelper = (index) => {
            try {
                return this.active_array[index];
            }
            catch {
                return 0;
            }
        };

        this.countNeighbours = (index) => {
            let total_neighbours = 0;
            total_neighbours += this.setCellValueHelper(index - this.cells_in_column - 1);  // above left
            total_neighbours += this.setCellValueHelper(index - this.cells_in_column);      // above
            total_neighbours += this.setCellValueHelper(index - this.cells_in_column + 1);  // above right
            total_neighbours += this.setCellValueHelper(index - 1);      // left
            total_neighbours += this.setCellValueHelper(index + 1);      // right
            total_neighbours += this.setCellValueHelper(index + this.cells_in_column - 1);  // below left
            total_neighbours += this.setCellValueHelper(index + this.cells_in_column);      // below
            total_neighbours += this.setCellValueHelper(index + this.cells_in_column + 1);  // below right
            return total_neighbours;
        };

        this.updateCellValue = (index) => {

            const total = this.countNeighbours(index);
            // cell with more than 4 or less then 3 neighbours dies. 1 => 0; 0 => 0
            if (total > 4 || total < 3) {
                return 0;
            }
            // dead cell with 3 neighbours becomes alive. 0 => 1
            else if (this.active_array[index] === 0 && total === 3) {
                return 1;
            }
            // or returning its status back. 0 => 0; 1 => 1
            else {
                return this.active_array[index];
            }

        };

        this.updateLifeCycle = () => {

            for (let i = 0; i < this.total_cells; i++) {
                    let new_state = this.updateCellValue(i);
                    this.inactive_array[i] = new_state;
            }
            this.active_array = this.inactive_array

        };

        this.gameSetUp = () => {
            this.arrayInitialization();
        };

        this.runGame = () => {
            this.updateLifeCycle();
            this.fillArray();
        };
        
    }
}
