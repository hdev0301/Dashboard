import React from 'react';
import { shallow } from 'enzyme';
import ViewExercises from './ViewExercises';

describe('<ViewExercises />', () => {
  test('renders', () => {
    const wrapper = shallow(<ViewExercises />);
    expect(wrapper).toMatchSnapshot();
  });
});
