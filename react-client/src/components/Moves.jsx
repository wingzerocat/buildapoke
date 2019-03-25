import React from 'react';
import Select from 'react-select';
// import temp from './pokemon.js';
import { FixedSizeList as List } from 'react-window';

const height = 35;

class MenuList extends React.Component {
    render() {
      const { options, children, maxHeight, getValue } = this.props;
      const [value] = getValue();
      const initialOffset = options.indexOf(value) * height;
  
      return (
        <List
          height={maxHeight}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      );
    }
  }
  
const Moves = (props) => (
    <Select components={{ MenuList }} options={props.list} onChange={value => props.test(value)} />
);

export default Moves;