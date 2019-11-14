import React from 'react';

import RenderQuote from '../components/renderQuote';
import QuoteBox from '../components/quoteBox';
import QuoteMachine from '../components/quoteMachine';

export default {
  title: 'Quotes',
};

export const renderEmptyQuote = () => <RenderQuote />;

export const renderFilledQuote = () => <RenderQuote 
    quote='El disgusto debe estar subordinado a la fuerza de mis propósitos' 
    author='Stephen Covey'
    />;

export const quoteBoxEmpty = () => <QuoteBox />;

export const quoteBoxWithQuoteAndFunction = () => <QuoteBox 
    quote='El disgusto debe estar subordinado a la fuerza de mis propósitos' 
    author='Stephen Covey'
    newQuoteAction={() => alert('Get a new random quote')}
    />;

export const quoteMachine = () => <QuoteMachine />;