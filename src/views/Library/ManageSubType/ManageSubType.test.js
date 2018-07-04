import React from 'react';
import { shallow } from 'enzyme';
import ManageSubType from './ManageSubType';

describe('<ManageSubType />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageSubType />);
    expect(wrapper).toMatchSnapshot();
  });
});
