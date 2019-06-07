import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import InputField from '../InputField';

describe('<InputField />', () => {
    let wrapper;
    let props;
    const getTextField = () => wrapper.find('TextField');
    const shallow = createShallow({ dive: true });
    const input = '';

    beforeEach(() => {
        props = {
            label: 'label',
            value: input,
            error: true,
            required: true,
            onChange: () => {}
        };
        wrapper = shallow(<InputField {...props} />);
    });

    describe('when rendering text field', () => {
        it('should render text field', () => {
            expect(getTextField()).toHaveLength(1);
        });
    });
});
