import React from 'react';
import {shallow} from 'enzyme';
import  Datepicker from '../../components/date-picker';
import '../test-set-up'


describe('Datepicker', () => {
    it('Renders without crashing', () => {
        shallow(<Datepicker />);
    });
});
