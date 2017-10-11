import React from 'react';
import {shallow} from 'enzyme';
import  Home from '../../containers/home';
import '../test-set-up';
import store from '../../store';



describe('Home', () => {
    it('Renders without crashing', () => {
        shallow(<Home store={store}/>);
    });
});
