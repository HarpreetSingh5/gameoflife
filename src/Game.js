import React ,{Component} from 'react';
import Grid from './Grid';
import Controls from './Controls.js';
import {  create_grid, next_grid, shuffle } from './logic/gamelogic';;


class Game extends Component {

  state = {
    grid: create_grid(),
    generation: 0,
    playing: false,
  }

  changeState = (grid, generation) => this.setState({
    grid: grid,
    generation: generation,
  });

  onChange = grid => this.changeState(grid, this.state.generation + 1);

  onClear = () => this.changeState(create_grid(), 0);

  onShuffle = () => this.changeState(shuffle(this.state.grid), 0);

  onNext = () => this.onChange(next_grid(this.state.grid));

  onPlay = () => {
    this.setState({ playing: true });
    this.interval = setInterval(() => this.onNext(), 200);
  }

  onStop = () => {
    this.setState({ playing: false });
    clearInterval(this.interval);
  }

  render() {
    const { grid, playing } = this.state;
    return (
      <div>
        <Grid grid={grid} onChange={this.onChange} />
        <p>Generation: {this.state.generation}</p>
        <Controls
          clear={this.onClear}
          next={this.onNext}
          play={this.onPlay}
          stop={this.onStop}
          shuffle={this.onShuffle}
          playing={playing}
        />
        
      </div>
    );
  }

}

export default Game;