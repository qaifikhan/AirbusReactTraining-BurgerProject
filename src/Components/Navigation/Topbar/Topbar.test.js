import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Topbar from './Topbar';
import NavItem from '../NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

configure({adapter: new Adapter()})

describe('Testing the Topbar Component', () => {
  it('should contain two Menu Items', () => {
    // console.log('Tried Calling Test 1')
    let wrapper = shallow(<Topbar />)
    expect(wrapper.find(NavItem)).toHaveLength(2)
  })
})


// describe('Testing the <Topbar /> Component', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<Topbar />)
//   })

//   it('should contain two Link elements if user is NOT logged in', () => {
//     expect(wrapper.find(NavItem)).toHaveLength(2)
//   })

//   it('should contain a Logo element', () => {
//     expect(wrapper.contains(<Logo />))
//   })  

//   it('should contain three Link elements if user is logged in', () => {
//       wrapper.setProps({userLoggedIn: true})
//       expect(wrapper.find(NavItem)).toHaveLength(3)
//   })
// })