import React, { PureComponent } from 'react';
import {HeaderWrapper,H3,LogoWrapper,ContentWrapper} from './style';
import {
	Radio
  
} from "antd";

import { Scott } from '../home/style';

class Header extends PureComponent {
  render() {
  	const { model,onChange} = this.props;
    return (
     <HeaderWrapper className="header"> 
     <LogoWrapper>
        <a href="/">
           <Scott/>
        </a>
     </LogoWrapper>
     <ContentWrapper>
       <H3> <span></span> 
        <Radio.Group onChange={onChange} value={model} style={{marginLeft:"10px"}}>
        <Radio value={1} style={{color:"green",fontSize:"12px"}}>一般</Radio>
        <Radio value={2} style={{color:"green",fontSize:"12px"}}>随机</Radio>
       </Radio.Group>
       {/*
         <Icon onClick={eye} type={show?"lock":"unlock"} style={{width:"20px",height:"20px",textAlign:"center",color:show?"red":"black",fontWeight:"bold"}}/>
       */} 
       </H3>
       {
         /*
          <SelectWrapper>
          {
            model===1?
            <div>
              <Icon onClick={previous} type="left-circle" className={current===0?"inactive":"active"}  style={{width:"20px",height:"20px",textAlign:"center",color:"#f60"}}/>
              <Icon onClick={next} type="right-circle"  style={{width:"20px",height:"20px",textAlign:"center",color:"green"}} />
            </div>
            :
            <Icon onClick={random} type="right-circle"  style={{width:"20px",height:"20px",textAlign:"center",color:"green"}} />
          }
          </SelectWrapper>

         */
       }
       
       
     </ContentWrapper>
    
     </HeaderWrapper>
    );
  }
}

export default Header;