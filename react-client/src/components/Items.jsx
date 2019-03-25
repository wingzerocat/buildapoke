import React from 'react';

const Items = (props) => (
    <div className="row" onClick={(e) => props.selectItem(e)}>
        <div className={"col " + props.item.item}>
            <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className={"most " + props.item.item}>
                        {props.item.item}

                        </td>
                        <td className={"deit " + props.item.item}>
                        {props.item.short_effect}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
);

export default Items;