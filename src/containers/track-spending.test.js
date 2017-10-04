import React from 'react';
import {shallow} from 'enzyme';
import  TrackSpending from './track-spending';
import '../../src/test-set-up'


describe('TrackSpending', () => {
    it('Renders without crashing', () => {
        shallow(<TrackSpending />);
    });
});
