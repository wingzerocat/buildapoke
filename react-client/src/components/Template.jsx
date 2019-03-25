import React from 'react';
import Test from './test.jsx';
import Moves from './Moves.jsx';
import List from './List.jsx';
import Ability from './Ability.jsx';
import Items from './Items.jsx';

const Template = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-sm"> 
                <img className="image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.details.selectedPoke[0].id}.png`} />
                <Test name={props.details.selectedPoke[0].name} test={props.test} />
            </div>
            
            <div className="col-sm">
                <table>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Gender</th>
                            <th>Happiness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.details.level}</td>
                            <td>{props.details.gender}</td>
                            <td>{props.details.happiness}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="bot">
                    <Ability abl={props.details.selectedPoke[0]}  setAbility={props.setAbility}/>
                </div>
            </div>

            <div className="col-sm">
                <input className="row move" value={props.details.moveSet.move_1} placeholder={'Move 1'} onClick={(e) => props.setActive(e)}></input>
                <input className="row move" value={props.details.moveSet.move_2} placeholder={'Move 2'} onClick={(e) => props.setActive(e)}></input>
                <input className="row move" value={props.details.moveSet.move_3} placeholder={'Move 3'} onClick={(e) => props.setActive(e)}></input>
                <input className="row move" value={props.details.moveSet.move_4} placeholder={'Move 4'} onClick={(e) => props.setActive(e)}></input>
                <div className="liner">
                    <button className="row reset" onClick={(e) => props.setActive(e)}>Close List</button>
                    <button onClick={(e) => props.writeSet(e)}>Export</button>
                </div>

                <div className="bot">
                    <input className="row items" value={props.details.selectedItem} placeholder={'Held Item'} onClick={(e) => props.setActive(e)}></input>
                </div>
            </div>
        </div>

        {props.details.active === 'move' ? 
            <div className="move-list">
                {props.details.moves.map(move =>
                    <List move={move} selectMove={props.selectMove} />
                )}
            </div>
            : 
            <div>
            </div>
        }
        
        {props.details.active === 'items' ? 
            <div className="move-list">
                {props.details.items.map(item =>
                    <Items item={item} selectItem={props.selectItem} />
                )}
            </div>
            : 
            <div>
            </div>
        }

        <table className="table">
            <thead>
                
            </thead>
            <tbody>
                <tr>
                    <td>HP</td>
                    <td className="base">
                        <div className="progress">
                            <div className="progress-bar hp" role="progressbar" style={{width: (props.details.selectedPoke[0].hp/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].hp}</td>
                    <td>
                        <input className="evs ev_hp" value={props.details.ev_hp} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_hp" min="0" max="252" step="4" value={props.details.ev_hp} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>

                <tr>
                    <td>ATK</td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar atk" role="progressbar" style={{width: (props.details.selectedPoke[0].atk/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].atk}</td>
                    <td>
                        <input className="evs ev_atk" value={props.details.ev_atk} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_atk" min="0" max="252" step="4" value={props.details.ev_atk} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>
                <tr>
                    <td>DEF</td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar def" role="progressbar" style={{width: (props.details.selectedPoke[0].def/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].def}</td>
                    <td>
                        <input className="evs ev_def" value={props.details.ev_def} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_def" min="0" max="252" step="4" value={props.details.ev_def} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>
                <tr>
                    <td>SPA</td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar spa" role="progressbar" style={{width: (props.details.selectedPoke[0].spa/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].spa}</td>
                    <td>
                        <input className="evs ev_spa" value={props.details.ev_spa} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_spa" min="0" max="252" step="4" value={props.details.ev_spa} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>
                <tr>
                    <td>SPD</td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar spd" role="progressbar" style={{width: (props.details.selectedPoke[0].spd/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].spd}</td>
                    <td>
                        <input className="evs ev_spd" value={props.details.ev_spd} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_spd" min="0" max="252" step="4" value={props.details.ev_spd} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>
                <tr>
                    <td>SPE</td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar spe" role="progressbar" style={{width: (props.details.selectedPoke[0].spe/255 * 100) + '%'}}>
                            </div>
                        </div>
                    </td>
                    <td>{props.details.selectedPoke[0].spe}</td>
                    <td>
                        <input className="evs ev_spe" value={props.details.ev_spe} onChange={(e) => props.setEV(e)}></input>
                    </td>
                    <td className="slide">
                        <input type="range" className="custom-range ev_spe" min="0" max="252" step="4" value={props.details.ev_spe} onChange={(e) => props.setEV(e)}></input>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Template;