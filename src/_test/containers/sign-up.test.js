import React from 'react';
import {shallow} from 'enzyme';
import  Signup from '../../containers/sign-up';
import '../test-set-up';
import store from '../../store';



describe('Signup', () => {
    it('Renders without crashing', () => {
        shallow(<Signup store={store} />);
    });
});
