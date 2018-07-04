import React from 'react';
import { shallow } from 'enzyme';
import Patients from './Patients';

describe('<Patients />', () => {
  test('renders', () => {
    const wrapper = shallow(<Patients />);
    expect(wrapper).toMatchSnapshot();
  });
});
