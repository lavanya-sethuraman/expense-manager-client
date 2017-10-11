import React from 'react';
import {shallow, mount} from 'enzyme';
import  MenuDrawer from '../../components/menu-drawer';
import '../test-set-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe(' Menu Drawer', () => {
    it('Renders without crashing', () => {
        shallow(< MenuDrawer />);
    });

    it('Should render responsive menu', () => {
        const wrapper = mount(<MuiThemeProvider><MenuDrawer /></MuiThemeProvider>);
        expect(wrapper.find('.hide').exists()).toEqual(true);
    });

});
