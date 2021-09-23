import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Home from './Views/Home';

configure({adapter: new Adapter()});

test('renders app component', () => {
 
  const appWrapper = shallow(<App/>)
  expect(appWrapper.containsMatchingElement(<Home/>)).toEqual(true)
});
