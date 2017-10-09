import React from 'react';
import {shallow} from 'enzyme';
import  Datepicker from './date-picker';
import '../../src/test-set-up'


describe('Datepicker', () => {
    it('Renders without crashing', () => {
        shallow(<Datepicker />);
    });
});
