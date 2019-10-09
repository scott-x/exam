import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './common/container';
import Home from './pages/home';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Route path='/' exact component={Home}></Route>
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;