import React from 'react';
import { shallow } from 'enzyme';
import MyFavorites from './MyFavorites';

describe('<MyFavorites />', () => {
  test('renders', () => {
    const wrapper = shallow(<MyFavorites />);
    expect(wrapper).toMatchSnapshot();
  });
});
