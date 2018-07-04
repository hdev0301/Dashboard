import React from 'react';
import { shallow } from 'enzyme';
import ManageArea from './ManageArea';

describe('<ManageArea />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageArea />);
    expect(wrapper).toMatchSnapshot();
  });
});
