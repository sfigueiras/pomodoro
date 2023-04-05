import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer>', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Timer initialTime={1000} onFinish={() => {}} />));
  });
});
