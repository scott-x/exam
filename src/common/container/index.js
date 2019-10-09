import React, { PureComponent } from 'react';
import { Wrapper } from './style';

class Container extends PureComponent {
  render() {
    return (
       <Wrapper>
       	{this.props.children}
       </Wrapper>
    );
  }
}

export default Container;