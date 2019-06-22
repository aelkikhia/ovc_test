import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {UserTable} from './UserTable';

configure({ adapter: new Adapter() });

describe('UserTable Component', () => {
    let props;

    beforeEach(() => {
        props = {
            fetchUsers: jest.fn(),
            users: {
                users: [],
                loading: false,
                error: false
            }
        };
    });

    it('renders without crashing', () => {
        const tree = renderer.create(<UserTable {...props} />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders an error message when a network error occurs', () => {
        props.users.error = true;
        const tree = renderer.create(<UserTable {...props} />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders an error message when a network error occurs', () => {
        props.users.loading = true;
        const tree = renderer.create(<UserTable {...props} />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders the User component correctly', () => {
        props.users.users = [
            {
                "name": "Leanne Graham",
                "email": "Sincere@april.biz",
                "address": {"city": "Gwenborough",},
                "company": {"name": "Romaguera-Crona",}
            }
        ];
        const wrapper = shallow(<UserTable {...props} />);

        expect(wrapper.find('td').length).toBe(4);
    });
});
