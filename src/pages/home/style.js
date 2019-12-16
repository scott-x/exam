import styled from 'styled-components';

import prev from './prev.svg'
import next from './next.svg'
import open from './open.svg'
import close from './close.svg'
import logo from './logo.svg'


export const Logo=styled.div`
  margin: 5px;
  display: inline-block;
  background:url(${logo});
  width:85px;
  height:30px;
`;

export const HomeWrapper=styled.div` 
   height:100%;
   max-width:900px;
`;

export const Box=styled.div` 
   position:fixed;
   bottom:100px;
   left:30px;
   height:100px;
   width:300px;
   max-width:900px;
`;
export const H3=styled.div`
   margin-top:20px;
   font-size:16px;
   font-weight:bold;
   text-align:left;
   margin-bottom:5px;
   line-height:20px;
   ;
`;

export const Item=styled.div`
   font-family:"Arial";
   margin-left:32px;
   line-height:18px;
   font-size: 13px;
   text-align:left;
   color: #666;
   margin-bottom:1px;
`;

export const Question=styled.div`
  margin-left:10px;
`;

export const Fixed=styled.div`
  position:fixed;
  bottom:150px;
  left:30%;
`;

export const Prev=styled.div`
  display: inline-block;
  background:url(${prev});
  width:63px;
  height:30px;
  margin: 5px;
`;

export const Next=styled.div`
  margin: 5px;
  display: inline-block;
  background:url(${next});
  width:63px;
  height:30px;
`;

export const Open=styled.div`
  display: inline-block;
  margin: 5px;
  background:url(${open});
  width:45px;
  height:30px;
`;
export const Close=styled.div`
  margin: 5px;
  display: inline-block;
  background:url(${close});
  width:45px;
  height:30px;
`;