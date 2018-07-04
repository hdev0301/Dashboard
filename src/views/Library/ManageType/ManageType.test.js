import React from 'react';
import { shallow } from 'enzyme';
import ManageType from './ManageType';

describe('<ManageType />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageType />);
    expect(wrapper).toMatchSnapshot();
  });
});
