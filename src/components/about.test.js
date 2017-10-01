import React from 'react';
import {shallow} from 'enzyme';
import { assert } from 'chai';

import About from './about';

describe('About', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<About />);
        assert.ok(wrapper);
    });
});
