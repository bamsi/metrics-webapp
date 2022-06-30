import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Species from '../components/fish/species';

describe('Testing rendering of the mission page', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Species />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
