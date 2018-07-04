import React from 'react';
import { shallow } from 'enzyme';
import HelpTopics from './HelpTopics';

describe('<HelpTopics />', () => {
  test('renders', () => {
    const wrapper = shallow(<HelpTopics />);
    expect(wrapper).toMatchSnapshot();
  });
});
