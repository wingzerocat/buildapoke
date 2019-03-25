import React from 'react';

const List = (props) => (
    <div className="row" onClick={(e) => props.selectMove(e)}>
        <div className={"col " + props.move.name}>
            <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className={"most " + props.move.name}>
                        {props.move.name}

                        </td>
                        <td>
                        <table>
                            <thead>
                                <tr>
                                    <th>Power</th>
                                    <th>Accuracy</th>
                                    <th>PP</th>
                                </tr>
                            </thead>   
                            <tbody>
                                <td>{props.move.power}</td>
                                <td>{props.move.accuracy}</td>
                                <td>{props.move.pp}</td>
                            </tbody>
                        </table>

                        </td>

                        <td className={"desc " + props.move.name}>
                        {props.move.short_effect}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
);

export default List;