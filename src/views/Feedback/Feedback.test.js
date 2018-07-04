import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

describe('<Feedback />', () => {
  test('renders', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper).toMatchSnapshot();
  });
});
