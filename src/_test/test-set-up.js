import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.localStorage = {
    getItem: jest.fn()
};

configure({ adapter: new Adapter() });