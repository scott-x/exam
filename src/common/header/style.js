import styled from 'styled-components';
import logo_pic from './logo.jpg';

export const HeaderWrapper=styled.div`
  height:60px;
  position:relative;
`;
export const H3=styled.div`
   font-size:18px;
   line-height:70px;
   color:#f60;
   font-weight:bold;
`;
export const Logo=styled.div` 
   width:75px;
   height:75px;
   background:url(${logo_pic});
`;

export const LogoWrapper=styled.div` 
   width:75px;
   height:75px;
   float:left;
`;

export const ContentWrapper=styled.div` 
   height:75px;
   float:left;
`;

export const SelectWrapper=styled.div` 
  position:absolute;
  top:50px;
  left:70px;
`;