import React from 'react';
import { shallow } from 'enzyme';
import ContactSupport from './ContactSupport';

describe('<ContactSupport />', () => {
  test('renders', () => {
    const wrapper = shallow(<ContactSupport />);
    expect(wrapper).toMatchSnapshot();
  });
});
