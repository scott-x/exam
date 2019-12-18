import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './common/container';
import Home from './common/home';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';
import Detail3 from './pages/detail3';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Route path='/' exact component={Home}></Route>
            <Route path='/books/1' exact component={Detail}></Route>
            <Route path='/books/2' exact component={Detail2}></Route>
            <Route path='/books/3' exact component={Detail3}></Route>
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;