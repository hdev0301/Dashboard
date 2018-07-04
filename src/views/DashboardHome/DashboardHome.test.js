import React from 'react';
import { shallow } from 'enzyme';
import DashboardHome from './DashboardHome';

describe('<DashboardHome />', () => {
  test('renders', () => {
    const wrapper = shallow(<DashboardHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
