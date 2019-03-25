import React from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';

const height = 35;

class MenuList extends React.Component {
    render() {
      const { options, children, maxHeight, getValue } = this.props;
      const [value] = getValue();
      const initialOffset = options.indexOf(value) * height;
  
      return (
        <List
          height={70}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      );
    }
  }
  
const Ability = (props) => {
    var temp = [
        {value: props.abl.ability_1, label: props.abl.ability_1}
    ];

    if (props.abl.ability_2 !== '') {
        temp.push({value: props.abl.ability_2, label: props.abl.ability_2});
    }
    if (props.abl.hidden !== '') {
        temp.push({value: props.abl.hidden, label: props.abl.hidden});
    }

    return (
        <Select components={{ MenuList }} options={temp} onChange={value => props.setAbility(value)} />
    )
};
  
export default Ability;