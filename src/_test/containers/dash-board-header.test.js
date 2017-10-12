import React from 'react';
import {shallow, mount} from 'enzyme';
import DashBoardHeader from '../../containers/dash-board-header';
import '../test-set-up';
import store from '../../store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

  
describe('Dashboard Header', () => {
    it('Renders without crashing', () => {    
        shallow(<DashBoardHeader store = {store}/>);
    });

    it('Renders App Bar', () => {
        const wrapper = mount(<MuiThemeProvider><DashBoardHeader store={store} /></MuiThemeProvider>);
        expect(wrapper.text()).toEqual("Expense ManagerLog Out");
    });

});
