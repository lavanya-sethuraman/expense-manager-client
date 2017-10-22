import React from 'react';
import {shallow, mount} from 'enzyme';
import  MainContainer from '../../components/main-container';
import '../test-set-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe(' MainContainer', () => {
    it('Renders without crashing', () => {
        shallow(< MainContainer  name="test"/>);
    });

    it('Should render sidebar', () => {
        const wrapper = mount(<MuiThemeProvider><MainContainer name="test" /></MuiThemeProvider>);
        expect(wrapper.find('.windowSize').exists()).toEqual(true);
    });

});
