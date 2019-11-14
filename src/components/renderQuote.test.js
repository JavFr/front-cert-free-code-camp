import React from 'react'
import setupTests from '../setupTests';
import { shallow, mount, render } from 'enzyme';

import RenderQuote from './renderQuote'


describe('<RenderQuote />', () => {

    it('It renders #text', () => {
      const wrapper = shallow(<RenderQuote />);
      expect(wrapper.exists('#text')).toEqual(true);
    });

    it('It renders #author', () => {
        const wrapper = shallow(<RenderQuote />);
        expect(wrapper.exists('#author')).toEqual(true);
    });

    it('It renders #author', () => {
        const wrapper = shallow(<RenderQuote 
            quote='El disgusto debe estar subordinado a la fuerza de mis propósitos' 
            author='Stephen Covey'/>);

        expect(wrapper.find('#text').render().text()).toEqual('El disgusto debe estar subordinado a la fuerza de mis propósitos');
        expect(wrapper.find('#author').render().text()).toEqual('Stephen Covey');
    });

});

