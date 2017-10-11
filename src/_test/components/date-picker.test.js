import React from 'react';
import { shallow, mount } from 'enzyme';
import Datepicker from '../../components/date-picker';
import '../test-set-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



describe('Datepicker', () => {
    it('Renders without crashing', () => {
        shallow(<Datepicker />);
    });

    it('Should select date', () => {
        const callback = jest.fn();
        const wrapper = mount(<MuiThemeProvider><Datepicker onChange={callback} /></MuiThemeProvider>);
        expect(wrapper.props().children.props.onChange).toEqual(callback);
    });
});