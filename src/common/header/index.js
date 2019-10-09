import React, { PureComponent } from 'react';
import {HeaderWrapper,H3} from './style';
import {
	Radio
} from "antd";

class Header extends PureComponent {
  render() {
  	const { model,onChange } = this.props;
    return (
     <HeaderWrapper className="header"> 
      <H3> <span>考试冲刺</span> 
        <Radio.Group onChange={onChange} value={model} style={{marginLeft:"10px"}}>
        <Radio value={1} style={{color:"#fff"}}>正常模式</Radio>
        <Radio value={2} style={{color:"#fff"}}>随机模式</Radio>
       </Radio.Group>
      </H3>
     </HeaderWrapper>
    );
  }
}

export default Header;