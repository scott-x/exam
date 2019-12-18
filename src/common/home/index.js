import React, { PureComponent } from 'react';
import {
	HomeWrapper,
	Scott,
	Title,
	Book1,
	Book2,
	Book3,
    BookContainer
} from './style';

class Home extends PureComponent {
  render() {
    return (
     <HomeWrapper>
     	<Scott/>  <Title>持之以恒，坚持不懈</Title>
        <BookContainer>
            <a href="/books/1"><Book1/></a>
            <a href="/books/2"><Book2/></a>
            <a href="/books/3"><Book3/></a>
        </BookContainer>
     </HomeWrapper> 
    );
  }
}

export default Home;