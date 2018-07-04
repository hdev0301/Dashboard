import React from 'react';
import { shallow } from 'enzyme';
import RolesAndPermissions from './RolesAndPermissions';

describe('<RolesAndPermissions />', () => {
  test('renders', () => {
    const wrapper = shallow(<RolesAndPermissions />);
    expect(wrapper).toMatchSnapshot();
  });
});
