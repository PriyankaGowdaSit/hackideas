
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import LoginUser from "../LoginUser"
import { render, fireEvent } from '@testing-library/react';
configure({ adapter: new Adapter() });
describe('Login user', () =>{

    const setup = () => {
        const login = render(<LoginUser/>);
        const input = login.getByLabelText('Employee Id')
        const button = login.getByText('Get Started')
        return {
          input,
          button,
          ...login,
        }
      }
    
    test("button is disabled until employee Id is entered", () =>{

        const {input,button } = setup()
         
        expect(button.disabled).toEqual(true)
    }
    )

    test("button is enabled after employee Id is entered", () =>{

    const {input,button } = setup()
   //set a value to the employee Input field
   
    fireEvent.change(input, {target: {value: 'Priyanka M B'}})
    expect(input.value).toBe('Priyanka M B')
     expect(button.disabled).toEqual(false)
        
            }
            )

} )