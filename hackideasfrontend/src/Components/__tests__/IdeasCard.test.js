import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import BasicCard from '../IdeasCard';
import Typography from '@mui/material/Typography';
import { render, fireEvent } from '@testing-library/react';
configure({ adapter: new Adapter() });
describe('Ideas Card', () => {

    test("Display no items found when ideas data is empty", () => {
        const styles = {

            title: {
                fontSize: 20, marginTop: 10, color: "#0175EB"
            }
        }

        const ideasData = [{


            'title': 'Mock Idea',
            'description': 'Mock description',
            'likes': 0,
            'tags': [{ id: 1, value: 'ML / AI' },
            { id: 2, value: 'IOT' }],
            'posted_by': 'Priyanka M B',
            'date_posted': new Date(),
            'liked_by': []

        }]
        const wrapper = shallow(
            <BasicCard ideas={ideasData} />
        );

        var result = <Typography style={styles.title}>{ideasData[0].title}</Typography>
        expect(wrapper.contains(result)).toEqual(true)


    }

    )

    test("Display card items when ideas data is not empty", () => {
        const styles = {

            typography: {
                color: "grey",
                marginTop: 30,
                marginLeft: -150
            }
        }
        const wrapper = shallow(
            <BasicCard ideas={[]} />
        );
        var result = <Typography style={styles.typography}>No ideas</Typography>
        expect(wrapper.contains(result)).toEqual(true)


    })
})