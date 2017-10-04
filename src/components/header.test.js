import React from 'react';
import {shallow} from 'enzyme';
import  Header from './header';
import '../../src/test-set-up';
import store from '../store'


describe('Header', () => {
    it('Renders without crashing', () => {
        shallow(<Header store={store} />);
    });
});
