import React, {Component} from 'react';
import { changeArrayValue } from './logic/gamelogic';

class Grid extends Component {

  toggleCell = (cell, x, y) => {
    const {grid } = this.props;
    const row = changeArrayValue(grid[y], x, cell ? 0 : 1);
    const new_grid = changeArrayValue(grid, y, row);
    this.props.onChange(new_grid);
  }

  renderCell = (cell, x, y) => {
    return (
      <div key={x}
        className='cell'
        onMouseDown={() => this.toggleCell(cell, x, y)}
        style={{ backgroundColor: cell ? '#edd3f5' : null }}
      />
    );
  }

  renderRow = (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.renderCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='game-grid'>
        {this.props.grid.map((row, y) => this.renderRow(row, y))}
      </div>
    );
  }

}

export default Grid;