export const grid_size = 50;
export const GENERATION_TIME = 200;
export const alive = 1;
export const dead = 0;

export const create_grid = ()=>{
    let grid = new Array(grid_size);
    for(let i=0;i<grid.length;i++){
        grid[i] = Array(grid_size).fill(0);
    }
    return grid;
}


export const neighbours = (x,y)=>{
    return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]  //getting all valid neighbours
    .filter(c =>
        c[0] >= 0 && c[0] < grid_size &&  //making sure our neighbours are within bounds. They shouldnt be outside our grid 
        c[1] >= 0 && c[1] < grid_size
    );

}

export const living_cells = (current_grid,x,y)=>{
    return neighbours(x,y).filter(element=>current_grid[element[0]][element[1]] === alive).length  //getting number of living cells.
}

export const next_grid = current_grid =>{
    let newgrid = create_grid();
    for (let x = 0; x < grid_size; x++) {
        for (let y = 0; y < grid_size; y++) {
            const living = living_cells(current_grid, x, y);
            const cell = current_grid[x][y];
            if((living==3) || (living==2 && cell ==1)){
                newgrid[x][y] = 1;            
            }
            else{newgrid[x][y]=0;
            }  
        }                                                 //In the next generation we need to decide whats alive and whats not
    }
    return newgrid;
}

export const changeArrayValue = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const shuffle = grid => grid.map(row => row.map(cell => Math.round(Math.random())));