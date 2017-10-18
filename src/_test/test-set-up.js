import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

window.localStorage = {
    getItem: jest.fn()
};

configure({ adapter: new Adapter() });

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);


 
