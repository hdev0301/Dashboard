import React from 'react';
import { shallow } from 'enzyme';
import AvailableTraining from './AvailableTraining';

describe('<AvailableTraining />', () => {
  test('renders', () => {
    const wrapper = shallow(<AvailableTraining />);
    expect(wrapper).toMatchSnapshot();
  });
});
