import React from 'react'
import setupTests from '../setupTests';
import { mount } from 'enzyme';

import QuoteMachine from './quoteMachine'


describe('<QuoteMachine />', () => {

    it('It gets a random quote when onCLick', () => {
        const wrapper = mount(<QuoteMachine />);
        expect(wrapper.find('#text').first().length).toEqual(1);

        const firstQuote = wrapper.find('#text').first().text();

        wrapper.find('#new-quote').first().simulate('click');
        expect(wrapper.find('#text').first().text()).not.toEqual(firstQuote);
    });

});

