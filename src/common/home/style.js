import styled from 'styled-components';
import scott from './scott-x.svg'
import book1 from '../../data/00294-01.svg';
import book2 from '../../data/00463.svg';
import book3 from '../../data/11471.svg';

export const Scott=styled.div`
    display:inline-block;
	background: url(${scott});
	width:85px;
	height:30px;
`
export const HomeWrapper=styled.div`
	margin-left:10px;
	margin-top:10px;
`

export const Title=styled.div`
	display:inline-block;
	font-weight:bold;
	text-align:left;
`

export const Book1=styled.div`
	display:inline-block;
	background: url(${book1});
	width:90px;
	height:119px;
	box-sizing:border-box;
`

export const Book2=styled.div`
	display:inline-block;
	background: url(${book2});
	width:90px;
	height:119px;
	box-sizing:border-box;
`

export const Book3=styled.div`
	display:inline-block;
	background: url(${book3});
	width:90px;
	height:119px;
	box-sizing:border-box;
`
export const BookContainer=styled.div`
	margin-top:30px;
`