import React from 'react'
import {shallow} from 'enzyme'
import DashBoardPage from '../../components/DashboardPage'

test('Should render DashboardPage correctly', () => {
    const wrapper = shallow(<DashBoardPage />)
    expect(wrapper).toMatchSnapshot()
})