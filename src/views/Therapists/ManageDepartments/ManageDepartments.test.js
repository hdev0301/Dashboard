import React from 'react';
import { shallow } from 'enzyme';
import ManageDepartments from './ManageDepartments';

describe('<ManageDepartments />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageDepartments />);
    expect(wrapper).toMatchSnapshot();
  });
});
