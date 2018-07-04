import React from 'react';
import { shallow } from 'enzyme';
import ManageCategories from './ManageCategories';

describe('<ManageCategories />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageCategories />);
    expect(wrapper).toMatchSnapshot();
  });
});
