import React from 'react';
import {shallow} from 'enzyme';
import  Header from '../../containers/header';
import '../test-set-up';
import store from '../../store';


describe('Header', () => {
    it('Renders without crashing', () => {
        shallow(<Header store={store} />);
    });
});
