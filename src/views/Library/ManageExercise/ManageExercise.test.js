import React from 'react';
import { shallow } from 'enzyme';
import ManageExercise from './ManageExercise';

describe('<ManageExercise />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageExercise />);
    expect(wrapper).toMatchSnapshot();
  });
});
