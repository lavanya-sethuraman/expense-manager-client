import React from 'react';
import {shallow} from 'enzyme';
import  TrackSpending from '../../containers/track-spending';
import '../test-set-up';
import store from '../../store';


describe('TrackSpending', () => {
    it('Renders without crashing', () => {
        shallow(<TrackSpending store={store}/>);
    });
});
