import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Test from './components/test.jsx';
import Template from './components/Template.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemon: [],
      selected: undefined,
      items: [],
      selectedItem: undefined,
      selectedPoke: [
        {
          id: 0,
          name: 'default',
          hp: 0,
          atk: 0,
          def: 0,
          spa: 0,
          spd: 0,
          spe: 0,
          total: 0,
          type_1: 'default',
          type_2: 'default',
          ability_1: 'default',
          ability_2: 'default',
          hidden: 'default'
        }
      ],
      moves: [],
      moveSet: {
          move_1: '',
          move_2: '',
          move_3: '',
          move_4: '',
      },
      active: undefined,
      level: 100,
      happiness: 255,
      ev_hp: 0,
      ev_atk: 0,
      ev_def: 0,
      ev_spa: 0,
      ev_spd: 0,
      ev_spe: 0,
      ev_total: 0,
      ability: undefined
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/pokes', 
      success: (data) => {
        this.setState({
          pokemon: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  fetchMoveSet() {
    var id = this.state.selected;

    console.log(this.state.selected);
    $.ajax({
      url: `/moves/${id}`,
      success: (data) => {
        this.setState({
          moves: data
        })
      }
    })
  }

  test(e) {
    if(e === null) {
      this.setState({
        selected: undefined
      })
    } else {
      var num = e.value;
      $.ajax({
        url: `/poke/${num}`,
        success: (data) => {
          let moveSet = Object.assign({}, this.state.moveSet);
          moveSet.move_1 = '';
          moveSet.move_2 = '';
          moveSet.move_3 = '';
          moveSet.move_4 = '';
          
          this.setState({
            selectedPoke: data,
            selected: num,
            moveSet
          }, () => this.fetchMoveSet())
        }
      })
    }    
  }

  setAbility(e) {
    var abl = e.value;
    this.setState({
      ability: abl
    })
  }

  selectItem(e) {
    var item = e.target.className.slice(5);
    this.setState({
      selectedItem: item,
      active: undefined
    })
  }

  selectMove(e) {
    var ev = e.target.className.slice(5);
    let moveSet = Object.assign({}, this.state.moveSet);
    let fields = Object.values(moveSet);

    if (fields.includes(ev)) {
      for (var key in moveSet) {
        if (moveSet[key] === ev) {
          moveSet[key] = '';
        }
      }
      this.setState({
        moveSet
      })
    } else if (this.state.moveSet.move_1 === '') {
      moveSet.move_1 = ev;
      this.setState({
        moveSet
      })
    } else if (this.state.moveSet.move_2 === '') {
      moveSet.move_2 = ev;
      this.setState({
        moveSet
      })
    } else if (this.state.moveSet.move_3 === '') {
      moveSet.move_3 = ev;
      this.setState({
        moveSet
      })
    } else if (this.state.moveSet.move_4 === '') {
      moveSet.move_4 = ev;
      this.setState({
        moveSet
      })
    } 
  }

  setActive(e) {
    var ev = e.target.className.slice(4);
    if (ev === 'reset') {
      this.setState({
        active: undefined
      })
    } else {
      this.setState({
        active: ev
      })
    }
  }

  writeSet() {
    var set = {
      num: this.state.selected,
      name: this.state.selectedPoke[0].name,
      ev_hp: this.state.ev_hp,
      ev_atk: this.state.ev_atk,
      ev_def: this.state.ev_def,
      ev_spa: this.state.ev_spa,
      ev_spd: this.state.ev_spd,
      ev_spe: this.state.ev_spe,
      move_1: this.state.moveSet.move_1,
      move_2: this.state.moveSet.move_2,
      move_3: this.state.moveSet.move_3,
      move_4: this.state.moveSet.move_4,
      ability: this.state.ability
    };

    console.log('write');
    $.ajax({
      url: '/set',
      type: 'post',
      data: set,
      success: () => {
        console.log('done');
      }
    })
  }

  setEV(e) {
    console.log(e.target.className);
    if (e.target.className[0] === 'e') {
      var stat = e.target.className.slice(4);
    } else {
      var stat = e.target.className.slice(13);
    }
    var evs = parseInt(e.target.value);

    if (evs + this.state.ev_total - this.state[stat] <= 510) {
      this.setState({
        [stat]: evs
      }, () => this.setState({
        ev_total: this.state.ev_hp + this.state.ev_atk + this.state.ev_def + this.state.ev_spa + this.state.ev_spd + this.state.ev_spe
      }))
    }

  }
  render () {
    return (
      <div>
        {this.state.selected === undefined ? 
          <Test test={this.test.bind(this)} />
          :
          <div>
            <Template details={this.state} 
            test={this.test.bind(this)} 
            selectMove={this.selectMove.bind(this)} 
            selectItem={this.selectItem.bind(this)} 
            setActive={this.setActive.bind(this)} 
            setEV={this.setEV.bind(this)} 
            writeSet={this.writeSet.bind(this)} 
            setAbility={this.setAbility.bind(this)} />
          </div>
        }
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));