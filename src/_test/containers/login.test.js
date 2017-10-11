import React from 'react';
import {shallow} from 'enzyme';
import  Login from '../../containers/login';
import '../test-set-up';
import store from '../../store';



describe('Login', () => {
    it('Renders without crashing', () => {
        shallow(<Login store={store}/>);
    });
});
