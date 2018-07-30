import React from 'react';
import App from '../src/components/App';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toBe('Starter template');
    expect(wrapper).toMatchSnapshot();
  });
});
