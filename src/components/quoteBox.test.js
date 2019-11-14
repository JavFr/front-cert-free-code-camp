import React from 'react'
import setupTests from '../setupTests';
import { shallow, mount, render } from 'enzyme';

import QuoteBox from './quoteBox'


describe('<QuoteBox />', () => {

    const newQuote = jest.fn();

    it('It renders <RenderQuote /> and buttons', () => {
      const wrapper = shallow(<QuoteBox />);
      expect(wrapper.exists('#quote-box')).toEqual(true);
      expect(wrapper.exists('RenderQuote')).toEqual(true);
      expect(wrapper.exists('#new-quote')).toEqual(true);
      expect(wrapper.exists('#tweet-quote')).toEqual(true);
    });

    it('New Quote button toggle a function when onClick', () => {
        const component = mount(<QuoteBox newQuoteAction={newQuote} />);
        component
            .find('#new-quote')
            .first()
            .simulate("click");
        
        expect(newQuote).toHaveBeenCalled();
        component.unmount();
    });

    it('Tweet button has correctly set its href', () => {
        const wrapper = shallow(<QuoteBox quote='La mejor custodia de un hombre es su propia conciencia' author='Arturo Illia'/>);

        expect(wrapper.find('#tweet-quote').props('href').href).toEqual('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22La%20mejor%20custodia%20de%20un%20hombre%20es%20su%20propia%20conciencia.%22%20Arturo%20Illia')
    });


});

